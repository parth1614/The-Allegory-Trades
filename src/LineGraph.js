import React, { useEffect, useState } from "react";
import { Bubble} from "react-chartjs-2";
import "./LineGraph.css"


let options;
options = {
    legend: {
        display: "StockPrice",
    },
    hover: {
        intersect: false
    },
    elements: {
        line: {
            tension: 0
        },
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {},
    },
    scales: {
        xAxes: [
            {
                type: "date",
                gridLines: {
                    display: true,
                    drawborder: false,
                },
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
                ticks: {
                    display: false,
                }
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                    drawborder: false,
                },
                ticks: {
                    display: false,
                },
            },
        ],
    },
};

function LineGraph() {
    const [data, setData] = useState({});

    useEffect(() => {

        let data = [];
        let value = 50;
        for(let i = 1; i <= 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 2) * Math.random(date) * 10);
            data.push({x: date, y: value});
        }
        setData(data)
    }, []);

    return (
        <div className="linegraph">
            {data?.length > 0 && (
                <Bubble
                    data={{
                        datasets: [
                            {
                                type: 'line',
                                backgroundColor: "black",
                                borderColor: "#5AC53B",
                                borderWidth: 2,
                                pointBorderColor: 'rgba(0, 0, 0, 0)',
                                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                                pointHoverBackgroundColor: '#5AC53B',
                                pointHoverBorderColor: '#000000',
                                pointHoverBorderWidth: 4,
                                pointHoverRadius: 6,
                                data: data,
                            },
                        ],
                    }}
                    options={options}
                />
            )}
        </div>
    );
}

export default LineGraph;
