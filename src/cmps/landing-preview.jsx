import React from "react";

export const LandingPreview = ({ landing }) => {
    console.log(landing)

    const date = new Intl.DateTimeFormat("en-US").format(landing.date)
    let desc = landing.details
    return <div className="landing-preview">
        <div>
            {landing.links.youtube_id && <iframe src={`http://www.youtube.com/watch?v=${landing.links.youtube_id}`} frameborder="0"></iframe>}
            {!landing.links.youtube_id && <img src={landing.links.patch.small} alt={`${landing.name} img`} />}
        </div>
        <h1>{landing.name}</h1>
        <span>{date}</span>
        {!desc && <p>No details yet</p>}
        {desc && <p>{desc.substring(0, 50)}...</p>}
    </div>
}