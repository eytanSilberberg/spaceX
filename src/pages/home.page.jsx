import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLandings } from '../store/landing/landing.action'
import { LandingList } from '../cmps/landing-list.jsx'


export const HomePage = () => {
    const landings = useSelector((storeState) => storeState.landingModule.landings)
    const dispatch = useDispatch()
    useEffect(() => {
        ; (async () => {
            await dispatch(setLandings())
        })()
    }, [])


    console.log(landings)
    return <section className='home-page'>
        <h1>View all landings</h1>

        {landings && <LandingList landings={landings.splice(0, 20)} />}
    </section>

}