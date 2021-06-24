import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width:'100%',position:'fixed',zIndex:'1'}}>
                <Navbar.Brand href="#home">Covid 19</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/india" className='nav-link'>India</Link>
                        <Link to="/world" className='nav-link'>World</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
