import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { apiUrl } from './../config';
import axios from 'axios';
import { setTitle, setStats } from './../redux/action';
import './graph.css';

class Graph extends Component {
  componentDidMount = async () => {
    try {
      const result = await axios.get(apiUrl + '/stats');
      if (result.data) {
        console.log(result.data.stats);
        this.props.setFilesStats(result.data.stats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getChartData = (stats) => {
    const labels = [];
    const datasets = [
      {
        label: 'Counts of JPEG/MP4/PDF/PNG',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ];

    stats.forEach((el) => {
      labels.push(el._id);
      datasets[0].data.push(el.total);
    });

    return { labels, datasets };
  };
  render() {
    const chartData = this.getChartData(this.props.stats);

    const options = {
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    console.log(chartData);
    this.props.setNavTitle('Statistics');
    return (
      <div className="graph">
        <Bar data={chartData} width={400} height={250} options={options} type={'horizontalBar'}></Bar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFilesStats: (stats) => {
      dispatch(setStats(stats));
    },
    setNavTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
