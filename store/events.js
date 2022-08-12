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
    }
}