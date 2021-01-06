import React from 'react'
import './Header.css'
import './MainContent.css'

class Header extends React.Component {



    render() {
        return (
            <div className="Header">
                <div className="headerName">Sauce</div>
                <nav className="dropDown" role="select">
                    <div className="btnsOnHeader">
                        <button><a href="#">Link 1</a></button>
                        <button><a href="#">Link 1</a></button>
                        <button><a href="#">Link 1</a></button>
                    </div>
                    <div className="dropDown">
                        <button className="dropbtn">Drop</button>
                        <div id="myDropdown" className="dropdown-content">
                            {/* going to use a somesort of onClick for it
                            Ill work on it later */}
                        </div>
                    </div>
                    {/**** Going to just use search bar UNDER the Header
                        for every page!!! not easier and smoother***************
                        <form className="headerForm"> 
                            <input id="headerInput"/>
                            <button id="inputBtn">Go</button>
                     </form> */}
                  

                </nav>
            </div>
        )
    }
}



export default Header