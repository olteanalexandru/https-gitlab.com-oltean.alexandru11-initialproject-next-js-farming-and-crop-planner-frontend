"use client"
//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useGlobalContext } from '../../Context/UserStore';

export default function Contact(): JSX.Element {
  const { data, setData, error, setError, loading, setLoading, register, login, logout } = useGlobalContext();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (data) {
      const user = data;
      setUser(user.name);
      setEmail(user.email);
    }
  }, [data]);

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ynv83op', 'template_3oljtxo', form.current, '92Cb78cmp5MUyYktO')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" value={user} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" value={email} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" />
            </Form.Group>
            <Button type="submit" className="mt-3">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}




