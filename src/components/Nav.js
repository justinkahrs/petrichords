import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class Navg extends React.Component {
    render(){
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
export default Navg;