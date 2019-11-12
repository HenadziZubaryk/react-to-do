import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from './styles/global';
import "./index.scss";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);
`;

const Header = styled.h1`
  margin: 0 0 5em 0;
  text-align: center;
  font-size: 1em;
  color: ${ colors.black };
`;

function App() {
  return <div className="wrapper">
      <Header>
        <h1>React-To-Do</h1>
      </Header>
  </div>
}

export default App;