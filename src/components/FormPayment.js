import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormPayment() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  console.log(name);
  const [address, setAddress] = useState("");
  console.log(address);
  const [mobile, setMobile] = useState("");
  console.log(mobile);
  const [code, setCode] = useState("");
  console.log(code);

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
        "За нарачка:   " +
        "  Име и презиме:  " +
        name +
        "  Адреса:  " +
        address +
        "  Мобилен:  " +
        mobile +
        "  Шифра:  " +
        code,
    }).then((message) => alert("Потполнете ги сите полиња"));
  };

  return (
    <div className="formInfo1">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Име и Презиме</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Адреса</Form.Label>
            <Form.Control
              type="text"
              placeholder="Адреса"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валидна адреса.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
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
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Шифра на нарачка</Form.Label>
            <Form.Control
              type="number"
              placeholder="Шифра на нарачка"
              required
              onChange={(e) => setCode(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Внеси валидна шифра
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button type="submit" onSubmit={handleSubmit} className="btnNaracaj">
          Нарачај{" "}
        </Button>
        <br></br>
      </Form>
      <br></br>
    </div>
  );
}

export default FormPayment;
