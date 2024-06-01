import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const EditTable = () => {
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, id));
  console.log(tableData);
  const [tableStatus, setTableStatus] = useState(tableData?.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData?.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    tableData?.maxPeopleAmount
  );

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
            <Form.Select name='status' aria-label='Select status' value={tableStatus} onChange={(e) => setTableStatus(e.target.value)}>
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
                  max={maxPeopleAmount}
                  className='text-center'
                  value={peopleAmount}
                  onChange={(e) => setPeopleAmount(e.target.value)}
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
                  value={maxPeopleAmount}
                  onChange={(e) => setMaxPeopleAmount(e.target.value)}
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