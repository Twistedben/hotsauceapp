import React from 'react'
import Header from './Header'
// import SearchBar from './SearchBar'
// import SearchBarResults from './SearchResultsPage'
import './MainContent.css'
import firebase from "firebase/app";


class App extends React.Component {
    const firebaseapp = firebase.apps[0]
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional


    render() {

        return (
            <div className="testing">
                <Header />

            </div>
        )
    }
}

export default App