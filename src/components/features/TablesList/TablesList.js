import { getTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TablesList = () => {
  const tables = useSelector((state) => getTables(state));
  const navigate = useNavigate();

  return (
    <div>
      {tables.length === 0 && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {tables.map((table) => (
        <Row key={table.id} className='border-bottom py-3 align-items-center'>
          <Col xs={3} md={2} className='align-items-center d-flex'>
            <h2 className='my-auto'>Table {table.id}</h2>
          </Col>
          <Col xs={6} md={8} className='my-2 align-items-center d-flex'>
            <p className='fs-6 fw-bold my-auto'>
              Status: <span className='fw-normal'>{table.status}</span>
            </p>
          </Col>
          <Col xs={3} md={2} className='text-end'>
            <Button variant='primary' className='m-auto' onClick={() => navigate(`/table/${table.id}`)}>
              Show more
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TablesList;