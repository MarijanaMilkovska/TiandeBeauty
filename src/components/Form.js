import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormContact() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  console.log(name);
  const [lastname, setLastname] = useState("");
  console.log(lastname);
  const [address, setAddress] = useState("");
  console.log(address);
  const [city, setCity] = useState("");
  console.log(city);
  const [mobile, setMobile] = useState("");
  console.log(mobile);
  const [mail, setMail] = useState("");
  console.log(mail);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(name);
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "tiande.health.and.beauty.macedonia@gmail.com",
      Password: "tiandebojana",
      To: "tiande.health.and.beauty.macedonia@gmail.com",
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body:
        "За нови ченови:  " +
        "  Име:  " +
        name +
        "  Презиме:  " +
        lastname +
        "  Адреса:  " +
        address +
        "  Град:  " +
        city +
        "  Email:   " +
        mail +
        "  Телефонски број:   " +
        mobile,
    }).then((message) => alert("Потполнете ги сите полиња"));
  };

  return (
    <div className="formInfo">
      <h1>
        Биди со тимот кој секогаш победува! <br></br>Одбери промена, одбери
        успех! <br></br>Аплицирај
      </h1>
      <br></br>
      <br></br>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Име</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Име"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Презиме</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Презиме"
              onChange={(e) => setLastname(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Адреса</Form.Label>
            <Form.Control
              type="text"
              placeholder="Адреса"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валидна адреса
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Град</Form.Label>
            <Form.Control
              type="text"
              placeholder="Град"
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валиден град.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setMail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валиден email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Телефонски број</Form.Label>
            <Form.Control
              type="number"
              placeholder="Телефонски број"
              required
              onChange={(e) => setMobile(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валиден телефонски број{" "}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          className="buttonPrijavise"
          onSubmit={handleSubmit}
        >
          Пријави се
        </Button>
      </Form>
    </div>
  );
}

export default FormContact;
