import React from 'react';
// node.js library that concatenates classes (strings)
import classnames from 'classnames';
// javascipt plugin for creating charts
import Chart from 'chart.js';
// react plugin used to create charts
// import { Line, Bar } from 'react-chartjs-2';
// reactstrap components
import { Container } from 'reactstrap';

// core components
import { chartOptions, parseOptions } from 'variables/charts.js';

// import getBrandText from 'search/Search.js';
import Header from 'components/Headers/Header.js';
// import AdminNavbar from 'components/Navbars/AdminNavbar';
let text = {
	color: 'black',
};
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeNav: 1,
			chartExample1Data: 'data1',
		};
		if (window.Chart) {
			parseOptions(Chart, chartOptions());
		}
	}

	toggleNavs = (e, index) => {
		e.preventDefault();
		this.setState({
			activeNav: index,
			chartExample1Data:
				this.state.chartExample1Data === 'data1' ? 'data2' : 'data1',
		});
	};

	render() {
		return (
			<>
				<Header />
				<Container className="mt--7" fluid></Container>
			</>
		);
	}
}

export default Index;
