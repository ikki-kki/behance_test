import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return(
    <BlueButton>
      {props.text}
    </BlueButton>
  );
};

const BlueButton = styled.button`
  width: 100%;
  height: 17px;
  background-color: ${(props)=> props.theme.colors.mainBlue};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25px;
  padding: 6px 15px 8px;
  margin: 0 3px;
`
export default Button;