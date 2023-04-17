const { response } = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

const loginUsuario = async(req, res = response) => {
    const { email, password } = req.body;
    // manejo de errores
    try {
        const user = await User.findOne({ email: email})
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario y el email no son correctos',
            })
        }

        //Confirmar passwords
        const validPassword = bcrypt.compareSync( password, user.password)
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

         // Generar nuestro JWT         
         const token = await generateJWT( user.id, user.name);
         res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No se pudo realizar el login. Por favor, hable con el administrador'
        })
    }
}

const crearUsuario = async(req, res = response) => {
    const { email, password } = req.body;

    try {       
        let user = await User.findOne({ email: email})
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El email introducido ya existe en BBDD',
            })
        }
        user = new User( req.body)
    
        // Encriptar password
        // const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, bcrypt.genSaltSync() )
        // Fin Encriptar password

        await user.save();

        // Generar nuestro JWT
        const token = await generateJWT( user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No se pudo guardar el usuario. Por favor, hable con el administrador'
        })
    }
}

const revalidarToken = async(req, res = response) => {

    const { uid, name } = req;
    // generar un nuevo JWT y retornarlo en esta petición
    const token = await generateJWT( uid, name);
    res.json({
        ok: true,
        uid, name,
        token
    });
}

module.exports = {
    crearUsuario, 
    loginUsuario, 
    revalidarToken
}