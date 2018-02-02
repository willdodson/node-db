import React, { Component } from 'react';

const DivPerson = (props) => (
  <div key={ props.index }>  
    <span>Name: { props.element.name }</span>
    <span>Spirit Animal: { props.element.animal }</span>
    <br/>
    <span>Hogwarts House: { props.element.house }</span>
  </div>
);

export default DivPerson;