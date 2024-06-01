import { getTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Row, Col, Button } from 'react-bootstrap';

const TablesList = () => {
  const tables = useSelector((state) => getTables(state));

  return (
    <div>
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
          <Col xs={3} md={2} className='text-end align-items-center d-flex'>
            <Button variant='primary' className='m-auto'>
              Show more
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TablesList;