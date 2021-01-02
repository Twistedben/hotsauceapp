import React from 'react'
import './Header.css'

class Header extends React.Component {



    render() {
        return (
            <div className="Header">
                <h2 className="headerName">Hot Sauce Site</h2>
                <nav>
                    <div className="mainHeaderBtns">
                        <button>Home</button>
                        <button>Hot Sauce Directory</button>
                        <button>Profile</button>
                        <button>Search</button>
                        <button>Contact Us</button>


                    </div>
                </nav>
            </div>
        )
    }
}



export default Header