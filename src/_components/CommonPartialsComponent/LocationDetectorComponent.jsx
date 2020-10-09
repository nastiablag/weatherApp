import React, { Component } from 'react';
import '../../_styles/weather.scss';
import * as Constants from '../../_constants';
import { MainWeatherComponent } from '..';

/**
 * @description Gets user or default location coordinates
 */
export default class LocationDetectorComponent extends Component {

    constructor() {
        super();
        this.state = {
            lat: null, 
            lon: null
        }
    }

    /**
     * @description Checks location mode on mounted component 
     */
    componentDidMount() {
        this.checkUserLocationMode();   
    }

    /**
     * @description Checks if user location is turned on
     */
    checkUserLocationMode = () => {
        if ('geolocation' in navigator) this.setPosition();
        else this.setDefaultPosition();
    }

    /**
     * @description Gets user's current position
     * @param options 
     */
    getPosition = options => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    /**
     * @description Sets location latitude and longitude 
     */
    setPosition = async () => {
        await this.getPosition().then((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
        }).catch(() => {
            this.setDefaultPosition();
       });
    }

    /**
     * @description Sets default city position if location is turned off 
     */
    setDefaultPosition = () => {
        this.setState({lat: Constants.defaultLat, lon: Constants.defaultLon})
    }
   
    render () {

        const {lat, lon} = this.state;

        if (lat === null && lon === null) return null;

        return (
            <>
                <MainWeatherComponent lat={lat} lon={lon}/>
            </>
        );

    }
}
