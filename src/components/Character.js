import React from "react";
import styled from 'styled-components';

const LI = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 5px;
  padding: 10px;
  height: 50px;
  width: 100%;

  border-radius: 5px;
  
  background: #1f4037;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`


const Character = props => {
  return <LI>{props.character.name}</LI>;
};

export default Character;
