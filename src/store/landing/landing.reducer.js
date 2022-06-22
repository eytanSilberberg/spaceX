const initialState = {
    landings: null
}

export function landingReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_LANDINGS':
            console.log(action.landings)
            return { ...state, landings: action.landings }

        default:
            return state
    }

}
