"use client"
//@ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Form} from 'react-bootstrap';
import {useGlobalContext} from '../../features/Context/UserStore';

export default function  Contact (): JSX.Element {


  const { data, setData, error, setError, loading, setLoading, register, login, logout } = useGlobalContext()
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')


 useEffect (() => {
    if (data) {
      const user = data;
      setUser(user.name);
      setEmail(user.email);
    }
  }, [data]);




 

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ynv83op',
         'template_3oljtxo',
          form.current, 
          '92Cb78cmp5MUyYktO'
      )
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
 

    <div className="container-fluid text-center bg-grey border-colorat" >
      <div className="row">
        <div className="col-md-12">

    <Form ref={form} onSubmit={sendEmail} style={{'display': 'inline-grid'}}>
      <label>Name</label>
      <input type="text"  name="user_name" value={ user }  />
      <label>Email</label>
      <input type="email" name="user_email" value={ email } />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </Form>

    </div>
      </div>
</div>
  );
};




