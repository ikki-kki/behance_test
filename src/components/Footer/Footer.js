import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterBlock>
      <FooterBox>Behance 추가 정보</FooterBox>
      <FooterBox>한국어</FooterBox>
      <FooterList>
        <ListItems>사용약관</ListItems>
        <ListItems>개인정보</ListItems>
        <ListItems>커뮤니티</ListItems>
        <ListItems>도움말</ListItems>
        <ListItems>AdChoices</ListItems>
      </FooterList>
      <FooterLogo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5749.5 837 70 16"
          width="56"
          height="13"
        >
          <path d="M5761.6 837h7.1v16zm-5 0h-7.1v16zm2.5 5.9l4.5 10.1h-3l-1.3-3.2h-3.3zm19.4 3.9l-1.2 3.3a.1.1 0 0 1-.1.1h-1.1a.1.1 0 0 1-.1-.1c1-2.5 2.6-6.9 3.7-9.7.1-.1.1-.3.1-.7 0-.1 0-.1.1-.1h1.6c.1 0 .1 0 .1.1 1.3 3.4 2.6 7 3.9 10.4 0 .1 0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1l-1.3-3.4zm3.8-1.2c-.4-1-1.3-3.8-1.7-4.9-.3 1-1.1 3.1-1.6 4.9zm3.9.8a4.076 4.076 0 0 1 4.4-4.1 2.745 2.745 0 0 1 1.3.2v-3.7c0-.1 0-.1.1-.1h1.3c.1 0 .1 0 .1.1v10.7c0 .1 0 .1-.1.2a6.736 6.736 0 0 1-3 .8c-2.4-.1-4.1-1.5-4.1-4.1zm5.7-2.8a2.55 2.55 0 0 0-1.3-.2 2.73 2.73 0 0 0-2.9 2.9c0 2.2 1.3 2.9 2.7 2.9a4.636 4.636 0 0 0 1.4-.2zm10.7 2.7a3.9 3.9 0 1 1-7.8 0 3.7 3.7 0 0 1 3.9-4 3.65 3.65 0 0 1 3.9 4zm-6.2 0c0 1.7.9 3 2.5 3 1.2 0 2.3-.8 2.3-2.9 0-1.6-.7-3-2.4-3-1.4-.1-2.4 1-2.4 2.9zm9.2-7.6l.1 4a4.92 4.92 0 0 1 2-.5 3.49 3.49 0 0 1 3.6 3.7 4.357 4.357 0 0 1-4.6 4.4 5.867 5.867 0 0 1-2.3-.4c-.1 0-.1-.1-.1-.2v-11c0-.1 0-.1.1-.1l1.2.1zm1.8 4.7a2.86 2.86 0 0 0-1.7.4v5.3a4.87 4.87 0 0 0 1.2.1 2.99 2.99 0 0 0 3-3.2 2.34 2.34 0 0 0-2.5-2.6zm6.7 3a2.47 2.47 0 0 0 2.7 2.7 3.72 3.72 0 0 0 2-.5c.1 0 .1 0 .1.1v.9c0 .1 0 .1-.1.2a4.9 4.9 0 0 1-2.3.5c-2.9 0-3.9-2-3.9-4 0-2.4 1.3-4 3.7-4a3.058 3.058 0 0 1 3.2 3.1 3.14 3.14 0 0 1-.1.9 7.156 7.156 0 0 1-1.7.1zm3-.8a2.768 2.768 0 0 0 1-.1v-.3a1.863 1.863 0 0 0-1.9-1.9c-1.3 0-2 1-2.1 2.3h3z"></path>
        </svg>
      </FooterLogo>
    </FooterBlock>
  );
}

const FooterBlock = styled.footer`
  background-color: ${(props) => props.theme.colors.mainBlack};
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 30px;
  display: flex;
  width: 100%;
  z-index: 10;
  color: ${(props) => props.theme.colors.iconGray};
  font-weight: 500;
  font-size: 12px;
`;
const FooterBox = styled.div`
  margin-bottom: 0;
  margin-top: -7.5px;
  padding: calc(8px * 2) 25px 7.5px;
  position: relative;
  text-align: center;
  cursor: pointer;
  display: inline-block;

  &:after {
    content: "";
    display: inline-block;
    left: 3px;
    position: relative;
    top: -2px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid #959595;
    height: 0;
    width: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border-right: 1px #333 solid;
    height: 15px;
    margin-top: 5px;
    position: absolute;
    right: 0;
    width: 1px;
  }
`;

const FooterList = styled.ul`
  display: flex;
  align-items: center;
  height: 20px;
  padding-left: 20px;
  padding-top: 2px;
`;
const ListItems = styled.li`
  cursor: pointer;
  font-size: 11px;
  margin-right: 10px;
`;
const FooterLogo = styled.div`
  cursor: pointer;
  margin-left: auto;
  margin-right: 25px;
  fill: ${(props) => props.theme.colors.iconGray};
  padding-top: 5px;
`;

export default Footer;
