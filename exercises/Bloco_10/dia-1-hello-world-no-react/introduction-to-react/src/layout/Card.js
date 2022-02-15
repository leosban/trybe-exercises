import './Card.css';
import React from 'react';

export default (props) => (
  <div className="Card">
    <div className="Container">{props.children}</div>
    <div className="Footer">{props.title}</div>
  </div>
);
