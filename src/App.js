import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from './styles/global';
import "./index.css";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);
`;

const Header = styled.h1`
  margin: 0 0 2em 0;
  text-align: center;
  font-size: 24px;
  color: ${ colors.black };
`;

const Buttons = styled.button`
  background: ${ colors.lightYellow };
  color: ${ colors.yellow };
  padding: 1em 1em 1em 2em;  
  cursor: pointer;
  width: 125px;
  height: 50px;

  border-radius: 1em 0 0 1em;
  position: relative;

  :before {
    content: "";
    position: absolute;
    right: -15px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 15px solid ${ colors.lightYellow };
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
  }
  
  ${props => 
    props.largeButton &&
      css`
        width: 285px;
        margin: 1.5em 0 0 0;        
      `}
`;

const ItemList = styled.button`
  background: ${ colors.lightBlue };
  color: ${ colors.blue };
  padding: 1.5em 2em; 
  cursor: pointer;
  border-radius: 1em;
  margin: 0 0 1.5em 0;
  
  :hover {
    background: ${ colors.hoverBlue };
  }
`;
const Input = styled.input`
  background: ${ colors.lightBlue };
  color: ${ colors.lightBlack };
  padding: 1.5em; 
  cursor: text;
  border-radius: 1em;
`;
const TextArea = styled.textarea`
  background: ${ colors.lightBlue };
  color: ${ colors.lightBlack };
  padding: 1.5em;  
  cursor: text;
  border-radius: 1em;
  height: 82px;
  margin: 1.5em 0;
  resize: none; 
`;
const Row = styled.div`
  display: inline-flex;
`;
const ColumnFirst = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;
const ColumnSecond = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  margin: 0 2em;
`;
const ColumnThird = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

function App() {
  return (
    <div>
      <Container>
        <Header>React-To-Do</Header>
        <Row>
          <ColumnFirst>
            <ItemList>Учеба</ItemList>
            <ItemList>Вождение</ItemList>
            <ItemList>Работа</ItemList>
            <Buttons>Добавить категорию</Buttons>
          </ColumnFirst>
          <ColumnSecond>
            <ItemList>ГАИ</ItemList>
            <ItemList>Внутренний экзамен</ItemList>
            <Buttons>Добавить заметку</Buttons>          
          </ColumnSecond>
          <ColumnThird>
            <Input placeholder="Введите заголовок" type="text" />
            <TextArea placeholder="Введите текст" type="text"></TextArea>
            <Input placeholder="Введите пароль" type="password" />
            <Buttons largeButton>Encrypt</Buttons>
            <Buttons largeButton>Сохранить</Buttons>
          </ColumnThird>
        </Row>  
      </Container>     
    </div>
  );
}

export default App;