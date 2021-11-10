import React, {useState} from 'react';
import {Container, Row, Form, Button, Col, Card, Modal, Image} from "react-bootstrap"
import placehImg from '../images/posterPlaceholder.jpg';
import Seats from './seatsmap';
import SeatMatrix from './SeatMatrix'
import SeatAvailability from './SeatAvailability'
import MovieContext from '../contexts/MovieContext'

/*
function SeatModal (props){
    const [seats, setSeats] = useState([
        {
            id: 1,
            text: 1,
            occ: false
        },
        {
            id: 2,
            text: 2,
            occ: false
        },
        {
            id: 3,
            text: 3,
            occ: false
        }
    ])
    const toggleSelect = (id) => {
        console.log(id);
        setSeats(
            seats.map((seat)=>
            seat.id === id ? {...seat, occ: 
                !seat.occ} : seat
                )
        )
    }

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton color="blue">
          <Modal.Title id="contained-modal-title-vcenter">
            Vælg sæde
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Container fluid>
            <Row style={{ marginBottom: '25%' }}>
                <Card className='text-center' bg='dark' text='light' >
                    <Card.Title> Lærred </Card.Title>
                </Card>
            </Row>
            <Row>
                <Seats seats={seats} onToggle={toggleSelect} />
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
}

 **place this in InfoSite to implement
                         <Button variant="outline-secondary" onClick={()=> setModalShow(true)}>Valg af sæder</Button>
                        <SeatModal show= {modalShow} onHide={() => setModalShow(false)}/>
    **
*/

function InfoSite () {
    const [movies, EditMovies] = useState({
		movieNames: {
			"Shang-Chi": 10,
			"Free Guy": 8,
			"Jaws": 11,
			"Interstellar": 12,
			"Dune": 9
		},
		moviePrice: 10,
		totalSeats: 0,
		seatNumbers: []
	})
    const [modalShow, setModalShow] = useState(false);
    return(
        <Container fluid>
            <Row style={{ justifyContent: 'left' }}>
                <Col>
                <Image src={placehImg} thumbn style={{width: '180px', height: '260px'}}/>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'left' }}>
                <Col xs={3} md={4}>
                    <Form>

                        <Form.Group >
                            <Form.Label>Navn</Form.Label>
                            <Form.Control type="fullname" placeholder="Indtast dit fulde navn" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                    
                        <Form.Group>
                            <Form.Label>Sæder</Form.Label>
                            <Form.Select>
                                <option >Vælg antal sæder</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Form.Select>
                        </Form.Group>
                        <p></p>
                        <Button variant="outline-primary" type="submit">
                            Place Booking
                        </Button>
                        

                    
                    </Form>
                </Col>
                <Col xs={3} md={{span:4, offset: 3}}>
                <p> Choose your seats </p>
                <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                    <SeatAvailability/>
                    <SeatMatrix/>
                </MovieContext.Provider>
                </Col>

            </Row>
            <Row style={{ justifyContent: 'right' }}>

            </Row>
        </Container>
        

    )


}

export default InfoSite;



