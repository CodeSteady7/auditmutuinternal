import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import AdminFooter from 'components/Footers/AdminFooter.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import './style.css';

import routes from 'routes.js';

class Admin extends React.Component {
	componentDidUpdate(e) {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.mainContent.scrollTop = 0;
	}

	getRoutes = routes => {
		return routes.map((prop, key) => {
			if (prop.layout === '/admin') {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};
	getBrandText = path => {
		for (let i = 0; i < routes.length; i++) {
			if (
				this.props.location.pathname.indexOf(
					routes[i].layout + routes[i].path
				) !== -1
			) {
				return routes[i].list;
			}
		}
		return 'Brand';
	};

	render() {
		return (
			<>
				<Sidebar
					{...this.props}
					routes={routes}
					logo={{
						innerLink: '/admin/index',
						imgSrc: require('assets/img/brand/poltek.png').default,
						imgAlt: '...',
					}}
				/>
				<div className="main-content wrapper" ref="mainContent">
					{/* menampilkan navbar yang menerima props */}
					<AdminNavbar
						{...this.props}
						brandText={this.getBrandText(this.props.location.pathname)}
					/>
					<Switch>
						{this.getRoutes(routes)}
						<Redirect from="*" to="/admin/index" />
					</Switch>
					<Container fluid style={{ marginTop: 'auto' }}>
						<AdminFooter />
					</Container>
				</div>
			</>
		);
	}
}

export default Admin;
