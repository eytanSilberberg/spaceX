
import { landingService } from '../../services/landing/landing.service'

export function setLandings() {
    return async dispatch => {
        try {
            // console.log('hello')
            const landings = await landingService.setLandings()
            console.log('landings', landings);
            await dispatch({ type: 'SET_LANDINGS', landings })
            return landings
        } catch (err) {
            console.log('LandingActions: err in loadLanding', err)
        }
    }
}

//load any to state
// export function loadLanding(anyId) {
//     return async dispatch => {
//         try {
//             const any = await landingService.getById(anyId)
//             dispatch(getActionSetLanding(any))
//             return any
//         } catch (err) {
//             console.log('LandingActions: err in loadLanding', err)
//             throw err
//         }
//     }
// }
