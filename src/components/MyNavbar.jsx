import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => (
  <Navbar className="text-white" style={{ backgroundColor: "#000080" }}>
    <Container fluid className="">
      <Navbar.Brand>
        <h1>EPICLOUD</h1>
      </Navbar.Brand>
      <Nav>
        <Nav.Link
          href="#home"
          className="text-white text-center me-3 border rounded-5 px-4 nav-btn"
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#features"
          className="text-white text-center me-3 border rounded-5 px-4 nav-btn"
        >
          Contattaci
        </Nav.Link>
        <Nav.Link
          href="#pricing"
          className="text-white text-center border rounded-5 px-4 nav-btn"
        >
          Dove siamo
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavbar;
