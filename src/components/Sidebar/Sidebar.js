/*eslint-disable*/
import React from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';
// nodejs library to set properties for components
import { PropTypes } from 'prop-types';

// reactstrap components
import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
} from 'reactstrap';

class Sidebar extends React.Component {
	state = {
		collapseOpen: false,
	};

	constructor(props) {
		super(props);
		this.activeRoute.bind(this);
	}

	// verifies if routeName is the one active (in browser input)
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
	}

	// toggles collapse between opened and closed (true/false)
	toggleCollapse = () => {
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		});
	};
	// closes the collapse
	closeCollapse = () => {
		this.setState({
			collapseOpen: false,
		});
	};
	// creates the links that appear in the left menu / Sidebar
	//apabila menekan button pada navbar maka button tersebut akan aktif
	createLinks = routes => {
		return routes.map((prop, key) => {
			return prop.layout === '/admin' && !prop.api ? (
				<NavItem key={key}>
					<NavLink
						to={prop.layout + prop.path}
						tag={NavLinkRRD}
						onClick={this.closeCollapse}
						activeClassName="active"
					>
						<i className={prop.icon} />
						{prop.name}
					</NavLink>
				</NavItem>
			) : null;
		});
	};

	createApiLinks = routes => {
		return routes.map((prop, key) => {
			return prop.layout === '/admin' && prop.api ? (
				<NavItem key={key}>
					<NavLink
						to={prop.layout + prop.path}
						tag={NavLinkRRD}
						onClick={this.closeCollapse}
						activeClassName="active"
					>
						<i className={prop.icon} />
						{prop.name}
					</NavLink>
				</NavItem>
			) : null;
		});
	};

	render() {
		//Sidebar meneima 3 props, yang nantinya akan di isi di file admin
		const { bgColor, routes, logo } = this.props;
		let navbarBrandProps;
		if (logo && logo.innerLink) {
			navbarBrandProps = {
				to: logo.innerLink,
				tag: Link,
			};
		} else if (logo && logo.outterLink) {
			navbarBrandProps = {
				href: logo.outterLink,
				target: '_blank',
			};
		}
		return (
			<Navbar
				className="navbar-vertical fixed-left navbar-light bg-white"
				expand="md"
				id="sidenav-main"
			>
				<Container fluid>
					{/* Toggler */}
					<button
						className="navbar-toggler"
						type="button"
						onClick={this.toggleCollapse}
					>
						<span className="navbar-toggler-icon" />
					</button>
					{/* Brand */}
					{logo ? (
						<NavbarBrand className="pt-0" {...navbarBrandProps}>
							<img
								alt={logo.imgAlt}
								className="navbar-brand-img"
								src={logo.imgSrc}
							/>
						</NavbarBrand>
					) : null}
					{/* User */}
					{/* Collapse */}
					<Collapse navbar isOpen={this.state.collapseOpen}>
						{/* Navigation */}
						<Nav navbar>{this.createLinks(routes)}</Nav>
						{/* Divider */}
						<hr className="my-3" />
						<h6 className="navbar-heading text-muted">API routes</h6>
						{/* API links */}
						<Nav navbar>{this.createApiLinks(routes)}</Nav>
						{/* Divider */}
						<hr className="my-3" />
						{/* Heading */}
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

Sidebar.defaultProps = {
	routes: [{}],
};

Sidebar.propTypes = {
	// links that will be displayed inside the component
	routes: PropTypes.arrayOf(PropTypes.object),
	logo: PropTypes.shape({
		// innerLink is for links that will direct the user within the app
		// it will be rendered as <Link to="...">...</Link> tag
		innerLink: PropTypes.string,
		// outterLink is for links that will direct the user outside the app
		// it will be rendered as simple <a href="...">...</a> tag
		outterLink: PropTypes.string,
		// the image src of the logo
		imgSrc: PropTypes.string.isRequired,
		// the alt for the img
		imgAlt: PropTypes.string.isRequired,
	}),
};

export default Sidebar;
