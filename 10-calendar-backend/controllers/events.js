const { response } = require('express');
const Event = require('../models/Event')
const User = require('../models/User');

const createEvent = async (req, res = response) => {
    const { body } = req;

    const event = new Event(body)
    try {
        event.user = req.uid
        // Comprobamos que existe el usuario
        // let user = await User.findOne({ _id: body.userId})
        // if (!user) {
        //     return res.status(400).json({
        //         ok: false,
        //         msg: 'No se ha podido encontrar el usuario ' + body.userId,
        //     });
        // }

        const savedEvent = await event.save();

        res.status(201).json({
            ok: true,
            event: savedEvent
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No se pudo guardar el evento. Por favor, hable con el administrador'
        })
    }
}

const updateEvent = async (req, res = response) => {
    
    const eventId = req.params.id;
    const uid = req.uid
    try {
        // Comprobamos que existe el evento
        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por id: ' + eventId,
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(404).json({
                ok: false,
                msg: 'No tiene permisos para editar este evento',
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true }).populate('user', 'name')

        res.json({
            ok: true,
            event: updatedEvent
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No se pudo guardar el evento. Por favor, hable con el administrador'
        })
    }
}

const deleteEvent = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid
    try {
        // Comprobamos que existe el evento
        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por id: ' + eventId,
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(404).json({
                ok: false,
                msg: 'No tiene permisos para eliminar este evento',
            });
        }

        await Event.findByIdAndDelete( eventId)

        res.json({
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No se pudo guardar el evento. Por favor, hable con el administrador'
        })
    }
}

const getEvents = async (req, res = response) => {

    const events = await Event.find()
        .populate('user', 'name')
    res.json({
        ok: true,
        events
    });
}

module.exports = {
    createEvent,
    deleteEvent,
    getEvents,
    updateEvent
}