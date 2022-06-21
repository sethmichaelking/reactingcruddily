import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample({posts }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">CRUDDER2THEMOON</Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <h3>Dashboard</h3>
        <h5>There are currently: {posts.length} posts</h5>
      </div>
    </>
  );
}

export default BrandExample;