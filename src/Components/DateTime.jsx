import React, { Component } from 'react'

class DateTime extends Component {
    state = {
        time: null,
        h: null
    }

    componentDidMount() {
        setInterval(() => this.setState({time: this.timeCalcualtor()}), 1000)
    }

    timeCheck = (i) => {
        if(i < 10) {
            i = "0" + i;
            return i;
        } else {
            return i
        }
    }

    timeCalcualtor = () => {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        m = this.timeCheck(m);
        s = this.timeCheck(s);
        let timeD = h + ":" + m + ":" + s;
        this.setState({h: h})
        return timeD
    }

    dateGetter() {
        let d = new Date();
        let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let dateD = dayArray[d.getDay()] + ' ' + d.getDate() + ' ' + monthArray[d.getMonth()];
        return dateD;
    }

    greeter() {
        if(this.state.h >= 12) {
            return (
                <div className="">
                    <h1>Good Afternoon, user {this.state.time}</h1>
                    <h2>The time is {this.state.time}</h2>
                    <h1>It's {this.dateGetter()}</h1>
                </div>
            
            )
        } else if(this.state.time >= 18) {
            return (
                <div>
                    <h1>Good Evening, user. It is {this.state.time}</h1>
                    <h2>The time is {this.state.time}</h2>
                    <h1>It's {this.dateGetter()}</h1>
                </div>
            
            )
        } else {
            return (
                <div>
                    <h1>Good Morning, user</h1>
                    <h2>The time is {this.state.time}</h2>
                    <h1>It's {this.dateGetter()}</h1>
                </div>
            
            )
        }
    }

    render() {
        return (
            <div className="block DateTimeCont">
                {this.greeter()}
            </div>
        )
    }
}

export default DateTime