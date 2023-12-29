import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    
      <Container>
        <Navbar expand="lg" className="">
        <LinkContainer to='/'>
        <Navbar.Brand ><img src="https://www.miniso.com/Content/EN/images/logo.png" alt="" /></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <LinkContainer to='/'>
                <Nav.Link className='pagess'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/brand'>
                <Nav.Link className='pages'>Brand</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/product'>
                <Nav.Link className='pages'>Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/special-campaign'>
                <Nav.Link className='pages'>Special Campaign</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/news'>
                <Nav.Link className='pages'>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/franchise'>
                <Nav.Link className='pages'>Franchise</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/investors'>
                <Nav.Link className='pages'>Investors</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
                <Nav.Link className='pages'>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
    
  );
}

export default NavBar;