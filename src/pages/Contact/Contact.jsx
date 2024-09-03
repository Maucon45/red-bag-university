import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LucknowLocationImg from '../../utils/images/Lucknow-location.jpg';
import UPLocationImg from '../../utils/images/UP-location.jpg';
import INDIALocationImg from '../../utils/images/INDIA-location.jpg';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add the Web3Forms access key
    formData.append("access_key", "d4a530ba-c0c1-488d-84c5-a7d654b664a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Get In Touch</h1>
          <p className='text-center w-75 mb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            pariatur qui quos aspernatur, voluptatem autem possimus esse quo
            consequatur omnis, soluta consectetur ullam ipsum cum!
          </p>
        </div>
      </header>

      <div className='container my-5 d-flex justify-content-center'>
        <Form id='contact-form' onSubmit={onSubmit}>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="first_name" placeholder='First name' required />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="last_name" placeholder='Last name' required />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name="email" placeholder='Enter email' required />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" placeholder='Your address' required />
          </Form.Group>

          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Location</Form.Label>
              <Form.Select name="location" defaultValue="Lucknow">
                <option>LUCKNOW</option>
                <option>KANPUR</option>
                <option>GORAKHPUR</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control name="postcode" placeholder='Postcode' required />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} required />
          </Form.Group>

          <Button variant="danger btn-lg" type='submit'>
            Submit
          </Button>
        </Form>
        <span>{result}</span>
      </div>

      <div className='bg-dark text-light p-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>Our Locations</h2>
          <div className='row g-4'>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={LucknowLocationImg} className='img-fluid' alt="Lucknow location" />
              <h3 className='text-center mt-3'>Lucknow</h3>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={UPLocationImg} className='img-fluid' alt="UP location" />
              <h3 className='text-center mt-3'>Kanpur</h3>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={INDIALocationImg} className='img-fluid' alt="India location" />
              <h3 className='text-center mt-3'>GORAKHPUR</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Contact component as the default export
export default Contact;
