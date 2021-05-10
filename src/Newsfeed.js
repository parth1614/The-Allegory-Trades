import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed(){

    return (
        <div className="newsfeed">
            <div className="newsfeed_container">

                <div className="newsfeed_chartSection">
                    <div className="newsfeed_portfolio">
                        <h1>$114,678.2829</h1>
                        <p>$443 (+0.05%) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                        <LineGraph />
                    </div>
                </div>

            </div>


        </div>
    )

}

export default Newsfeed;
