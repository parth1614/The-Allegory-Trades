import React from 'react'
import "./Timeline.css"

function Timeline(){
    return(

        <div className="timeline_container">
             <div className="timeline_buttons_container">
    <div className="timeline_button">#LIVE</div>
    <div className="timeline_button">1D</div>
    <div className="timeline_button active">1W</div>
    <div className="timeline_button">3M</div>
    <div className="timeline_button">1Y</div>
    <div className="timeline_button">ALL</div>
             </div>
        </div>

    );
}

export default Timeline;