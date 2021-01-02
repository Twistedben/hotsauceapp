import React from 'react'
import './Header.css'

class Header extends React.Component {



    render() {
        return (
            <div className="Header">
                <h2 className="headerName">Hot Sauce</h2>
                <nav role="select">
                    
                    <div className="dropDown">
                    <button onClick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </div>
                        {/* <button>Home</button>
                        <button>Hot Sauce Directory</button>
                        <button>Profile</button>
                        <button>Search</button>
                        <button>Contact Us</button> */}
                    
                        {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">HS Directory</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul> */}
                        {/* <select onchange="if (this.value) window.location.href = this.value;">
                            <option value="#">Home</option>
                            <option value="#">HS Directory</option>
                            <option value="#">Profile</option>
                            <option value="#">Search</option>
                            <option value="#">Contact Us</option>
                        </select> */}

                    
                </nav>
            </div>
        )
    }
}



export default Header