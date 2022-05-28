import './conversor-moedas.css';
import { Container, Button, Form, Col, Row, Spinner, Alert, Modal } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function ConversorMoedas() {
  return (

    <div>
      <h1>Conversor de Moedas</h1>
      <Alert variant='danger' show={false}>
        Erro obtendo dados de conversao, tente novamente
      </Alert>
      <Container>
        
        <Form>
          <Row>
            <Col sm="3">
              <Form.Control 
              placeholder='0' 
              value={1} 
              required/>
            </Col>
            <Col sm="3">
              <Form.Control as="select">

             </Form.Control>
            </Col>
            <Col sm="1" className='text-center' style={{paddingTop:'5px'}} >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select">

              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant='success' type='submit'>
                <Spinner animation='border' size='sm' /> 
              Converter 
              </Button>
            </Col>
          </Row>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversao</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversao aqui...
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success'>Nova Conversao</Button>
          </Modal.Footer>

        </Modal>
      </Container>
    </div>





    // <div>
    // <Container>
    // <Form>
    //   <Form.Row>
    //     <Col sm="3">
          // <Form.Control 
          // placeholder='0' 
          // value={1} 
          // required/>
    //     </Col>
    //     <Col sm="3">
          // <Form.Control as="select">

          // </Form.Control>
    //     </Col>
    //     <Col sm="1" className="text-center">
    //       <FontAwesomeIcon icon={faAngleDoubleRight} />
    //     </Col>
    //     <Col sm="3">
    //       <Form.Control as="select">

    //       </Form.Control>
    //     </Col>
    //     <Col sm="2">

    //     </Col>
    //   </Form.Row>
    // </Form>
    // </Container>
    // </div>
  
    
  );
}

export default ConversorMoedas;
