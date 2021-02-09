import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="ml-auto">
						<Nav.Link href="#cart">Cart</Nav.Link>
						<Nav.Link href="#login">Login</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

		</>
	)
}

export default Header
