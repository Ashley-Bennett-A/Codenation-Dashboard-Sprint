import React, { Component } from 'react'
import Weather from './Weather'
import DateTime from './DateTime'
import './dateTimeWeather.css'

class Greeter extends Component {
    render() {
        return (
            <div className="greeterCont">
                <DateTime />
                <Weather />
            </div>
        )
    }
}

export default Greeter