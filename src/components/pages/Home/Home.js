import { Row, Col } from 'react-bootstrap';
import TablesList from '../../features/TablesList/TablesList';

const Home = () => {
  return (
    <>
      <Row>
        <Col className='d-flex justify-content-between'>
          <h1>All tables</h1>
        </Col>
      </Row>
      <Row>
        <TablesList />
      </Row>
    </>
  );
};

export default Home;
