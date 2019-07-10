import React, { Component } from 'react'

class Weather extends Component {
    state = {
        key: "b9135e48ae5fbef6a2aa0237402ab6e9",
        long: null,
        lat: null,
        res: null,
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
        })
    }

    weatherDisplay = (i) => {
        let c = Math.floor(i - 273.15)
        return (
            <div>
                <h1>The weather is currently {c}°C in {this.state.res.name}</h1>
            </div>
        );
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