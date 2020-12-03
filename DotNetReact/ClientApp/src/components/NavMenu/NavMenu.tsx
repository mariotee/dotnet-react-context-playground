import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default () => {
    const [collapsed, setCollapsed] = React.useState(true);

    const toggleNavbar = () => {
        setCollapsed((prev) => !prev);
    }

    return <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            <Container>
                <NavbarBrand tag={Link} to="/">{"Weather"}</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/daily">Daily Forecast</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/hourly">Hourly Forecast</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Container>
        </Navbar>
    </header>
}