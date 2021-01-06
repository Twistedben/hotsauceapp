import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import './MainContent.css'

class App extends React.Component {


    render() {
        return (
            <div className="testing">
                <Header />
                <SearchBar />
            </div>
        )
    }
}

export default App