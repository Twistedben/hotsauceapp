import React from 'react'
import './Header.css'
import './MainContent.css'
import { MDBIcon, MDBBtn } from 'mdbreact';
// import { MDBBtn } from "mdbreact";
// import { MDBAnimation } from "mdbreact";
// import { MDBView } from

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

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
    // const hotPepperIcon = <FontAwesomeIcon icon={faPepperHot} />
    render() {
        const linkDrpDwn = {
            width: "80px",
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "5px",
            fontFamily: "Arial"
        };
        const btnsOnHeader = {
            width: "90px",
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "5px",
            fontFamily: "Arial"
        };
        return (
            <div className="Header">
                <div className="headerName hotOnHeader">HotSauce</div>
                {/* <div className="headerName sauceOnHeader">Sauce</div> */}
                <nav className="dropDown" role="select">
                    <div className="btnsOnHeader">
                        <MDBBtn rounded outline color="secondary" style={btnsOnHeader}><a href="/#">Home</a></MDBBtn>
                        <MDBBtn rounded outline color="secondary" style={btnsOnHeader}><a href="/#">HS Directory</a></MDBBtn>
                        <MDBBtn rounded outline color="secondary" style={btnsOnHeader}><a href="/#">Profile</a></MDBBtn>
                        <MDBBtn rounded outline color="secondary" style={btnsOnHeader}><a href="/#">Contact Us</a></MDBBtn>
                        {/* <button id="homeBtn"><a href="/#">Home</a></button>
                        <button id="hsDirBtn"><a href="/#">HS Directory</a></button>
                        <button id="profileBtn"><a href="/#">Profile</a></button>
                        <button id="contactUsBtn"><a href="/#">Contact Us</a></button> */}
                    </div>
                    <div className="btnsOnMenuBtn">
                        <MDBBtn rounded outline color="secondary" id="dropMenuBtn" style={{ padding: "5px" }} onClick={this.showMenu}>
                            {/* <div className="btnPeppper"> */}
                            <MDBIcon icon="pepper-hot" size="2x" color="action" />
                            {/* </div> */}
                        </MDBBtn>
                        {/* <MDBIcon icon="tint" /> */}
                        {
                            this.state.showMenu
                                ? (
                                    <div className="grid gride-cols-3 btnsOnDrpDwn"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        {/* style={linkDrpDwn} */}

                                        {/* <MDBAnimation type="bounce" infinite hover> */}
                                        <MDBBtn rounded outline color="secondary" style={linkDrpDwn}><a href="/#">Home</a></MDBBtn>
                                        {/* </MDBAnimation> */}

                                        {/* <MDBBtn rounded outline color="secondary" style={linkDrpDwn}><a href="/#">Home</a></MDBBtn> */}
                                        <MDBBtn rounded outline color="secondary" style={linkDrpDwn}><a href="/#">HS Directory</a></MDBBtn>
                                        <MDBBtn rounded outline color="secondary" style={linkDrpDwn}><a href="/#">Profile</a></MDBBtn>
                                        <MDBBtn rounded outline color="secondary" style={linkDrpDwn}><a href="/#">Contact Us</a></MDBBtn>
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