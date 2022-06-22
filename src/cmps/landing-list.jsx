import React from "react";
import { LandingPreview } from './landing-preview.jsx'

export const LandingList = ({ landings }) => {
    console.log(landings)
    // export const LandingList = () => {
    return <div className="landing-list">
        {landings.map(landing => {
            return <LandingPreview key={landing.id} landing={landing} />
        })}
    </div>
    // return <div>hello</div>
}