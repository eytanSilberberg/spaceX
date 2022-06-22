import { storageService } from '../basic/async-storage.service'
import axios from 'axios'
const STORAGE_KEY_LANDING = 'landing'

export const landingService = {
    setLandings,
    getLandingById,
}

window.landingService = landingService


async function setLandings() {
    let landings = await storageService.query(STORAGE_KEY_LANDING)

    console.log('landings from storage', landings)
    if (!landings || landings.length === 0) {
        landings = await axios.get(' https://api.spacexdata.com/v4/launches')
        landings = landings.data
        console.log('landings from set', landings)
        storageService.post(STORAGE_KEY_LANDING, landings)
    } else {
        landings = landings[0]
    }
    return landings

}

async function getLandingById(landingId) {
    const landing = await storageService.get(STORAGE_KEY_LANDING, landingId)
    return landing;
}

