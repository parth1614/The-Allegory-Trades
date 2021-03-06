import React from 'react'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Logo from './icons8-assassins-creed-logo.svg'
import './Header.css'



function Header(){

    return(
        <div className="header_wrapper">

            <div className="header_logo">
                <img src={Logo} width={50} alt={"The Allegory"} />
            </div>

            <div className="header_search">

                <div className="header_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search The Allegory" type="text"/>

                </div>

            </div>

            <div className="header_menuItems">

                <a  href="#">Allegory Stocks</a>
                <a   href="#">LiteraTi Portfolio</a>
                <a   href="#">Cash Rules</a>
                <a   href="#">Allegory Alerts!</a>
                <a   href="#">Allegory Account</a>

            </div>

        </div>
    )

}
export default Header