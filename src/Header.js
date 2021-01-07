import React from 'react'
import './Header.css'
import './MainContent.css'

class Header extends React.Component {
    /* this.state {showMenu: false}
    // showMenu(event) {
        this.setState: true
    }
    */
    constructor() {
        super();

        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this)
    }

    showMenu(event) {
        event.preventDefault();
        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({ showMenu: false })
        }
        console.log(this.state.showMenu)
    }

    closeMenu() {

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        // const closedMenu = this.setState({ showMenu: false })



        return (
            <div className="Header">
                <div className="headerName">Sauce</div>
                <nav className="dropDown" role="select">
                    <div className="btnsOnHeader">
                        <button id="homeBtn"><a href="/#">Home</a></button>
                        <button id="hsDirBtn"><a href="/#">HS Directory</a></button>
                        <button id="profileBtn"><a href="/#">Profile</a></button>
                        <button id="contactUsBtn"><a href="/#">Contact Us</a></button>
                    </div>
                    <div className="dropMenuBtn">
                        <button onClick={this.showMenu}>showMenu</button>

                        {
                            this.state.showMenu
                                ? (
                                    <div className="btnsOnDropDown"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        <button id="dropDownHome"><a href="/#">Home</a></button>
                                        <button id="dropDownHsDir"><a href="/#">HS Directory</a></button>
                                        <button id="dropDownProfile"><a href="/#">Profile</a></button>
                                        <button id="dropDownContact"><a href="/#">Contact Us</a></button>
                                    </div>
                                ) : (
                                    null
                                )
                        }
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