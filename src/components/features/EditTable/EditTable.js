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
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData?.maxPeopleAmount);
  const [bill, setBill] = useState(tableData?.bill);

  return (
    <>
      <div className='d-flex my-4'>
        <h2>Table {id}</h2>
      </div>

      <Form>
        <Form.Group as={Row} className='mb-4 mt-4'>
          <Form.Label column xs={3} sm={2} md={1} lg={1} xl={1} className='fw-bold'>
            Status:
          </Form.Label>
          <Col xs={9} sm={7} md={7} lg={5} xl={3}>
            <Form.Select name='status' aria-label='Select status' value={tableStatus} onChange={(e) => setTableStatus(e.target.value)}>
              <option value='Free'>Free</option>
              <option value='Reserved'>Reserved</option>
              <option value='Busy'>Busy</option>
              <option value='Cleaning'>Cleaning</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-4 mt-4'>
          <Form.Label column xs={3} sm={2} md={1} lg={1} xl={1} className='fw-bold'>
            People:
          </Form.Label>
          <Col>
            <Row>
              <Col xs={4} sm={3} md={3} lg={2} xl={1}>
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
              <Col xs={1} className='d-flex align-items-center justify-content-center'>
                <span>/</span>
              </Col>
              <Col xs={4} sm={3} md={3} lg={2} xl={1}>
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
        {tableStatus === 'Busy' && (
          <Form.Group as={Row} className='my-3'>
            <Form.Label
              column
              xs={3}
              sm={2}
              md={1}
              lg={1}
              xl={1}
              className='fw-bold'
            >
              Bill:
            </Form.Label>
            <Col>
              <Row>
                <Col xs={4} sm={3} md={3} lg={2} xl={2}>
                  <Form.Control
                    name='bill'
                    className='text-center'
                    type='number'
                    min='0'
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                  />
                </Col>
                <Col xs={1}>
                  <p className='my-1'>$</p>
                </Col>
              </Row>
            </Col>
          </Form.Group>
        )}
        <Button type='submit'>Update</Button>
      </Form>
    </>
  );
};

export default EditTable;