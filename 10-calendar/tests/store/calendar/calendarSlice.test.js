import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates"


describe('Pruebas en calendarSlice', () => {
    test('Debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState()
        expect(state).toEqual(initialState)
    })

    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) )
        expect(state.activeEvent).toEqual( events[0])        
    })

    test('onAddNewEvent debe de agregar el evento', () => {

        const newEvent = {
            id: '3',
            title: 'Cumpleaños de Maruja',
            notes: 'Alguna nota de Maruja',
            start: new Date('2023-11-01 15:00:00'),
            end: new Date('2023-11-01 17:00:00')
        }
        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) )
        expect(state.events).toEqual( [...events, newEvent])        
    })

    test('onUpdateEvent debe actualizar el evento', () => {

        const updatedEvent = {
            id: '1',
            title: 'Cumpleaños de Sara actualizado',
            notes: 'Alguna nota de Sara actualizado',
            start: new Date('2023-11-20 15:00:00'),
            end: new Date('2023-11-20 17:00:00')
        }
        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) )
        expect(state.events).toContain( updatedEvent)        
    })

    test('onDeleteEvent debe borrar el elemento activo', () => { 
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent())
        expect(state.events).not.toContain(events[0])
        expect(state.activeEvent).toBe(null)
    })
    
    test('onLoadEvents debe establecer los eventos', () => { 
         const state = calendarSlice.reducer(initialState, onLoadEvents(events))
        //  console.log(state)
         expect(state.events).toEqual(events)
         expect(state.isLoadingEvents).toBeFalsy()
         expect(state.activeEvent).toBeNull()

         const newState = calendarSlice.reducer(state, onLoadEvents(events))
         expect( newState.events.length).toBe(events.length)
        // initialState
     })

     test('onLogout debe de limpiar el estado', () => { 
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())
        expect(state).toEqual(initialState)

     })


})