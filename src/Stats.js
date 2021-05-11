import React, {useState, useEffect} from 'react'
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {db} from "./firebase";

const TOKEN = "c2cgi6qad3ibl1b7npmg";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats(){

    function click(){
        document.getElementById("click").hide();
    }

    const [stockData, setstockData] =useState([]);

    const [myStocks,setmyStocks] = useState([]);

    const getMyStocks = () => {
        db
            .collection('myStocks')
            .onSnapshot(snapshot => {
                let promises = [];
                let tempData = []
                snapshot.docs.map((doc) => {
                    promises.push(getStocksData(doc.data().ticker)
                        .then(res => {
                            tempData.push({
                                id: doc.id,
                                data: doc.data(),
                                info: res.data
                            })
                        })
                    )})
                Promise.all(promises).then(()=>{
                    setmyStocks(tempData);
                })
            })
    }

    const getStocksData = (stock)=> {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error)=>{
            console.error("Error", error.message);
        });

    };

  useEffect(()=>{
      let tempStocksData =[];
 const stockList = [
     "AMZN", "AAPL", "TSLA", "FB", "NFLX", "UBER", "MSFT", "SBUX"
 ];

      getMyStocks();
      let promises = [];
      stockList.map((stock) => {
          promises.push(
              getStocksData(stock)
                  .then((res) => {
                      tempStocksData.push({
                          name: stock,
                          ...res.data
                      });
                  })
          )
      });

      Promise.all(promises).then(()=>{

          setstockData(tempStocksData);
          console.log(tempStocksData);
      })

  }, [])

    return(

        <div className="stats">

            <div className="stats_container">
                <div className="stats_header">
                    <p>STOCKS(Live)</p>
                    <MoreHorizIcon />
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                volume={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className="stats_header stats_lists" onClick="click()">
                    <p id="click" >Listings</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {stockData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Stats;