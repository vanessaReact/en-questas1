import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../logo777.png';
function NavBar(){
    return (
	<>

		<Navbar className="navegacion">
		<Container>
		
		<Link to='/en-questas_uno/'>
			<img src={logo} width='50px'/>
			<Navbar.Brand href="/en-questas_uno/">EnQestas</Navbar.Brand>
		</Link>

		<Nav className="mx-auto">

		<Link to='/en-questas_uno/encuesta'>
			<Nav.Link href="#Encuesta">Quiz</Nav.Link>
		</Link>

		<Link to='/en-questas_uno/register'>
			<Nav.Link href="#Register">Register</Nav.Link>
		</Link>

		<Link to='/en-questas_uno/login'>
			<Nav.Link href="#Login">Login</Nav.Link>
		</Link>

		<Link to='/en-questas_uno/logout'>
			<Nav.Link href="#Logout">Logout</Nav.Link>
		</Link>

		</Nav>
		</Container>
		</Navbar>
	</>
    )
}

export default NavBar;