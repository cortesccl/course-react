/*
    Events Routes
    /api/events
*/

const { Router } = require('express');
const { JWTValidate } = require('../middlewares/jwt-validators')
const { check } = require('express-validator')
const { fieldValidate } = require('../middlewares/field-validators')
const { createEvent, deleteEvent, getEvents, updateEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router()

router.use(JWTValidate);
// Todas tienen que pasar por la validacióon del JWT
// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'El campo start es obligatorio').custom( isDate ),
        check('end', 'El campo end es obligatorio').custom( isDate ),
        fieldValidate
    ],
    createEvent
);

// Actualizar un evento existente
router.put(
    '/:id',
    // [
    //     check('title', 'El título es obligatorio').not().isEmpty(),
    //     check('start', 'El campo start es obligatorio').custom( isDate ),
    //     check('end', 'El campo end es obligatorio').not().custom( isDate ),
    //     fieldValidate
    // ],
    updateEvent
);

// Eliminar un evento existente
router.delete(
    '/:id',
    deleteEvent
);

module.exports = router;