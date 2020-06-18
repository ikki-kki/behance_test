import React from "react";
import styled from "styled-components";

const WhiteButtons = (props) => {
  return <WhiteButton>{props.text}</WhiteButton>;
};

const WhiteButton = styled.button`
  height: 33px;
  background-color: #fff;
  color: ${(props) => props.theme.colors.mainBlack};
  border: 1px solid #dbdbdb;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;
  margin: 0 3px 2px 0;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  display: inline-block;

  &:hover {
    background-color: #e8e8e8;
    transition: all 0.4s ease-in-out;
  }
`;

export default WhiteButtons;
