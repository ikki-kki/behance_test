import React from "react";
import styled from "styled-components";
import BlueButton from "../../Button/Button";
import WhiteButton from "../../Button/WhiteButton";

function ListTitles() {
  return (
    <ListTitleBlock>
      <ListTitleBox>
        <ListTitle>Illustrator</ListTitle>
        <ListDesc>
          Illustrator에서 세련된 벡터 아트를 제작하세요. 로고, 아이콘, 스케치,
          타이포그래피뿐만 아니라 복잡한 일러스트레이션도 제작할 수 있습니다.
        </ListDesc>
        <ButtonBox>
          <ButtonStyleBox>
            <BlueButton text="Follow Illustrator" />
          </ButtonStyleBox>
          <ButtonStyleBox>
            <WhiteButton text="Download Illustrator" />
          </ButtonStyleBox>
        </ButtonBox>
      </ListTitleBox>
    </ListTitleBlock>
  );
}

const ListTitleBlock = styled.div`
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  user-select: text;
  display: flex;
`;
const ListTitleBox = styled.div`
  margin: 40px 40px 60px;
  text-align: center;
`;
const ListTitle = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 0.9;
  margin: 0 0 15px;
`;
const ListDesc = styled.h2`
  font-size: 23px;
  font-weight: 400;
  line-height: 1.25;
  margin: 0 auto;
  max-width: 800px;
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ButtonStyleBox = styled.div`
  margin: 0 3px;
`;

export default ListTitles;
