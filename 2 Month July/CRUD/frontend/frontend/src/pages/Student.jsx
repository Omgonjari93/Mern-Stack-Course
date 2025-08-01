import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const Student = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-center'>Add Student</h1>

                        <div className='add-form-div'></div>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                            </Row>
                             <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Std</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Std" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Roll No.</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Roll No" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose</option>
                                        <option>Maharashtra</option>
                                        <option>Bihar</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Goa</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>Delhi</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    Student Add form
                </div>
                <div className="col-md-6"> <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Std</th>
                            <th>Roll No.</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                         <tr>
                            <td>1</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                         <tr>
                            <td>2</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                         <tr>
                            <td>3</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                         <tr>
                            <td>4</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                         <tr>
                            <td>5</td>
                            <td>Om</td>
                            <td>Gonjari</td>
                            <td>1</td>
                            <th>93</th>
                            <th>Karad</th>
                            <th>Karad,Vidhyanagar</th>
                            <th>Maharashtra</th>
                            <th>415124</th>
                        </tr>
                       
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}

export default Student
