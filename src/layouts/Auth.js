import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

// core components
import AuthNavbar from 'components/Navbars/AuthNavbar.js';
import AuthFooter from 'components/Footers/AuthFooter.js';

import routes from 'routes.js';
// import Login from '../views/examples/Login';

class Auth extends React.Component {
	componentDidMount() {
		document.body.classList.add('bg-default');
	}
	componentWillUnmount() {
		document.body.classList.remove('bg-default');
	}
	getRoutes = routes => {
		return routes.map((prop, key) => {
			if (prop.layout === '/auth') {
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
	render() {
		return (
			<>
				<div className="main-content">
					<AuthNavbar />
					<div className="header bg-gradient-info py-7 py-lg-8">
						<Container>
							<div className="header-body text-center mb-7">
								<Row className="justify-content-center">
									<Col lg="5" md="6">
										<NavbarBrand to="/" tag={Link}>
											<img
												alt="..."
												src={require('assets/img/brand/poltek.png').default}
												width="75px"
											/>
										</NavbarBrand>
										<h1 className="text-white">AUDIT MUTU INTERNAL</h1>
										<p className="text-lead text-light">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</Col>
								</Row>
							</div>
						</Container>
						<div className="separator separator-bottom separator-skew zindex-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								version="1.1"
								viewBox="0 0 2560 100"
								x="0"
								y="0"
							>
								<polygon
									className="fill-default"
									points="2560 0 2560 100 0 100"
								/>
							</svg>
						</div>
					</div>
					{/* Page content */}
					<Container className="mt--8 pb-5">
						<Row className="justify-content-center">
							<Switch>
								{/* <Login /> */}
								{this.getRoutes(routes)}
								<Redirect from="*" to="/auth/login" />
							</Switch>
						</Row>
					</Container>
				</div>
				<AuthFooter />
			</>
		);
	}
}

export default Auth;
