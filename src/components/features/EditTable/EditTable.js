import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTableRequest } from '../../../redux/tablesRedux';

const EditTable = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tableData = useSelector((state) => getTableById(state, id));
  const [tableStatus, setTableStatus] = useState(tableData?.status || 'Free');
  const [peopleAmount, setPeopleAmount] = useState(tableData?.peopleAmount || 0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData?.maxPeopleAmount || 0);
  const [bill, setBill] = useState(tableData?.bill);

  const tableStatusHandler = (e) => {
    e.preventDefault();
    setTableStatus(e.target.value);
    if ((e.target.value === 'Free') | (e.target.value === 'Cleaning')) {
      setPeopleAmount(0);
    }
  };

  const maxPeopleAmountHandler = (e) => {
    e.preventDefault();
    const newValue = parseInt(e.target.value, 10);
    if (newValue <= 10) {
      setMaxPeopleAmount(newValue);
      if (newValue < peopleAmount) {
        setPeopleAmount(newValue);
      }
    }
  };

  const peopleAmountHandler = (e) => {
    e.preventDefault();
    const newValue = parseInt(e.target.value);
    if (newValue <= 10 && newValue <= maxPeopleAmount) {
      setPeopleAmount(newValue);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      editTableRequest({
        id: id,
        status: tableStatus,
        peopleAmount: peopleAmount,
        maxPeopleAmount: maxPeopleAmount,
        bill: bill,
      })
    );
    navigate('/');
  };

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
            <Form.Select name='status' aria-label='Select status' value={tableStatus} onChange={tableStatusHandler}>
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
                  min='0'
                  max={maxPeopleAmount}
                  className='text-center'
                  value={peopleAmount}
                  onChange={peopleAmountHandler}
                />
              </Col>
              <Col xs={1} className='d-flex align-items-center justify-content-center'>
                <span>/</span>
              </Col>
              <Col xs={4} sm={3} md={3} lg={2} xl={1}>
                <Form.Control
                  name='maxPeopleAmount'
                  type='number'
                  min='0'
                  max='10'
                  placeholder='Max'
                  className='text-center'
                  value={maxPeopleAmount}
                  onChange={maxPeopleAmountHandler}
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
                <Col xs={4} sm={3} md={3} lg={2} xl={1}>
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
        <Button type='submit' onClick={submitHandler}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default EditTable;