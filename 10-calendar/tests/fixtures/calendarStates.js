

export const events = [
    {
        id: '1',
        title: 'Cumpleaños de Sara',
        notes: 'Alguna nota',
        start: new Date('2023-04-18 13:00:00'),
        end: new Date('2023-04-18 15:00:00')
    },
    {
        id: '2',
        title: 'Cumpleaños de Jesús',
        notes: 'Alguna nota de Jesús',
        start: new Date('2023-12-17 13:00:00'),
        end: new Date('2023-12-17 15:00:00')
    }
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null,
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: { ...events[0]},
}