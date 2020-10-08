import React, {Component} from 'react';
import './weather.scss';
import * as Constants from '../constants';
import WeatherApp from './WeatherApp';

export default class LocationDetectorComponent extends Component {

    constructor() {
        super();
        this.state = {
            lat: null, 
            lon: null
        }
    }

    componentDidMount() {
        this.checkUserLocationMode();   
    }

    getPosition = options => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    checkUserLocationMode = () => {
        if ('geolocation' in navigator) this.setPosition();
        else this.setDefaultPosition();
    }

    setPosition = async () => {
        await this.getPosition().then((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
        }).catch(() => {
            this.setDefaultPosition();
       });
    }

    setDefaultPosition = () => {
        this.setState({lat: Constants.defaultLat, lon: Constants.defaultLon})
    }
   
    render () {

        const {lat, lon} = this.state;

        if (lat === null && lon === null) return null;

        return (
            <>
                <WeatherApp lat={lat} lon={lon}/>
            </>
        );

    }
}
