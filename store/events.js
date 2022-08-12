export const state = () => ({
    data: {
        list: {
            content: []
        }
    }
})

export const mutations = {
    load(state, events) {
        state.data.list = events;
        //state.activeEvent = events.events.content.find(x => x.FlexbilletID === events.activeEventId) != undefined ? events.events.content.find(x => x.FlexbilletID === events.activeEventId) : '-'
    }
    /*,
    setActiveEvent(state, id) {
        state.activeEvent = id;
        //state.activeEvent = events.events.content.find(x => x.FlexbilletID === events.activeEventId) != undefined ? events.events.content.find(x => x.FlexbilletID === events.activeEventId) : '-'
    }
    */
}

