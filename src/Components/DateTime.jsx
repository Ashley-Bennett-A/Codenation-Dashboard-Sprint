import React, { Component } from 'react'

class DateTime extends Component {
    state = {
        time: null
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
        return timeD
    }

    dateGetter() {
        let d = new Date();
        let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let dateD = dayArray[d.getDay()] + ' ' + d.getDate() + ' ' + monthArray[d.getMonth()];
        return dateD;
    }

    render() {
        return (
            <div className="block DateTimeCont">
                <h1>{this.dateGetter()}</h1>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}

export default DateTime