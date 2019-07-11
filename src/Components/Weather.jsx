import React, { Component } from 'react'
import './dateTimeWeather.css'

class Weather extends Component {
    state = {
        key: "b9135e48ae5fbef6a2aa0237402ab6e9",
        long: null,
        lat: null,
        res: null,
        tempIndi: "normal",
        locationAccess: false
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.postition)
        } else {
            this.setState({locationAccess: false})
        }
    }

    postition = (pos) => {
        let c = pos.coords
        this.setState({lat: c.latitude});
        this.setState({long: c.longitude})
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.long + "&APPID=" + this.state.key).then(res => {
            return res.json()
        }).then(res => {
            this.setState({res: res, locationAccess: true})
            this.tempCheck(res.main.temp)
        })
    }

    weatherDisplay = (i) => {
        let c = Math.floor(i - 273.15)
        return (
            <div className="weatherDisplay">
                <h3>{this.state.res.name}</h3>
                <h3><i class={"fas fa-temperature-high " + this.state.tempIndi}></i> {c}°C</h3>
                <span><img src={"https://openweathermap.org/img/wn/" + this.state.res.weather[0].icon + "@2x.png"} alt="x" height="50px"/><h3>{this.capMe(this.state.res.weather[0].description)}</h3></span>
                <h3><i class="fas fa-wind"></i> {this.windCalc(this.state.res.wind.speed)}mph</h3>
            </div>
        );
    }

    windCalc(i) {
        let s = Math.floor(i * 2.237)
        return s
    }

    capMe(str) {
        str = str.split(" ");
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    }

    tempCheck(temp) {
        let c = Math.floor(temp - 273.15);
        console.log(c)
        if(c < 13) {
            this.setState({tempIndi: "low"})
        } else if(c < 22) {
            this.setState({tempIndi: "mid"})
        } else if(c > 23) {
            this.setState({tempIndi: "high"})
        }
    }

    render() {
        return (
            <div class="block weatherCont">
                {this.state.locationAccess && this.weatherDisplay(this.state.res.main.temp)}
            </div>
        )
    }
}

export default Weather