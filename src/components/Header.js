import { Button, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <h3>this is header</h3>

      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>

      <button>HTML</button>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>
      <Button variant="light">light</Button>
      <Button variant="dark">dark</Button>
    </>
  );
};

export default Header;
