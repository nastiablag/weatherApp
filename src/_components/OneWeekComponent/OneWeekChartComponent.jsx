import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { weatherService } from '../../_services';

/**
 * @description Displays week forecast chart
 */
export default class OneWeekChartComponent extends Component {
  
  constructor() {
    super();
    this.state = {
      series: [
        {data: []},
        {data: []}
      ],
      options: {
        colors: ['#f1961c', '#6b87bc'],
        chart: {
          type: 'bar',
          toolbar: {show: false},
          sparkline: {enabled: true}
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '100%'
          }
        },
        dataLabels: {enabled: false},
        stroke: {show: false},
        legend: {
          show: false,
          floating: false
        },
        xaxis: {
          categories: ['day', 'night'],
          labels: {show: false},
          axisBorder: {show: false},
          axisTicks: {show: false}
        },
        yaxis: {show: false},
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        tooltip: {enabled: false}
      },
      dailyData: []
    };
  }

  /**
   * @description Fetches city data on mounted component
   */
  componentDidMount() {
    this.fetchCityDailyData();
  }

  /**
   * @description Fetches city data by coordinates
   */
  fetchCityDailyData = () => {

    const {lat, lon} = this.props;

    weatherService.getCityDailyData(lat, lon)
    .then(response => this.setDataForChart(response.daily.slice(1))); 
  }
  
  /**
   * @description Sets data for chart
   * @param data 
   */
  setDataForChart = data => {

    const {series} = this.state;

    data.map(day => (
      this.setState(prev => ({
        series: [
          {data: [...prev.series[0].data, day.temp.day]},
          {data: [...prev.series[1].data, day.temp.night]},                    
        ]
      }))
    ));

    return series;
  }

  render() {

    const {options, series} = this.state;

    return (
      <Chart options={options} series={series} type='bar' height={53}/>
    );
  }
}
