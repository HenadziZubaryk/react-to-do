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

function App() {
  return <div className="wrapper">
    <Container>
       
    </Container>
  </div>;
}

export default App;