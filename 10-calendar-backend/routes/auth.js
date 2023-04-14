/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const {check} = require('express-validator')
const { fieldValidate } = require('../middlewares/field-validators')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { JWTValidate } = require('../middlewares/jwt-validators')
const router = Router()

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe contener al menos 6 caracteres').isLength({ min: 6}),
        fieldValidate
    ],     
    loginUsuario)

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe contener al menos 6 caracteres').isLength({ min: 6}),
        fieldValidate
    ], 
    crearUsuario )

router.get('/renew', JWTValidate, revalidarToken)

module.exports = router;