import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
export default function Navbar(){
    return <div>
    <nav>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to="/bmi">Bmi</Link></li>
      <li><Link to="/calc">Calc</Link></li>
      <li><Link to="/grade">Grade</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
    </nav>
    </div>
}
const Ul = styled.ul`
  background-color: #FFDAB9;
  text-decoration: none;
  text-align: center;
`

const Li = styled.li`
  float: left;
  margin-left: 1em;
  font-size: 20px;
  text-align: center;
  display: inline-block
  `