import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import Timeline from './Timeline'

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
                        <Timeline />
                    </div>
                </div>
                <div className="newsfeed_buying_section">
                    <h2>Buying Power</h2>
                    <h2>$420.69</h2>
                </div>
                <div className="newsfeed_market_section">
                    <div className="newsfeed_market_box">

                        <p>The Allegory Presents</p>
                        <h1>The LiteraTi Festival</h1>
                    </div>
                </div>

            </div>



        </div>
    )

}

export default Newsfeed;