import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';

const EditTable = () => {
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, id));
  console.log(tableData);

  return (
    <>
      <div className='d-flex my-4'>
        <h2>Table {id}</h2>
      </div>

      <Form>
        <Form.Group as={Row} className='mb-4 mt-4'>
          <Form.Label column sm='2' lg='1' className='fw-bold'>
            Status:
          </Form.Label>
          <Col sm='4' lg='3'>
            <Form.Select name='status' aria-label='Select status'>
              <option value='Free'>Free</option>
              <option value='Reserved'>Reserved</option>
              <option value='Busy'>Busy</option>
              <option value='Cleaning'>Cleaning</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-4 mt-4'>
          <Form.Label column sm='2' lg='1' className='fw-bold'>
            People:
          </Form.Label>
          <Col sm='4' lg='3'>
            <Row>
              <Col>
                <Form.Control
                  name='peopleAmount'
                  type='number'
                  min='1'
                  max='10'
                  placeholder='Min'
                  className='text-center'
                />
              </Col>
              <Col className='d-flex align-items-center justify-content-center'>
                <span>/</span>
              </Col>
              <Col>
                <Form.Control
                  name='maxPeopleAmount'
                  type='number'
                  min='1'
                  max='10'
                  placeholder='Max'
                  className='text-center'
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>

        <Button type='submit'>Update</Button>
      </Form>
    </>
  );
};

export default EditTable;