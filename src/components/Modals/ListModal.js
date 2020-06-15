import React from "react";
import styled from "styled-components";
import { ModalFilterList } from "../FilterNav/FilterList/FilterList";
const ListModal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <ModalOverlay onClick={close} />
          <ModalBlock>
            <ModalBox>
              <ModalWrapper>
                <ModalTitle>
                  최고의 크리에이티브 분야로 이루어진 갤러리
                </ModalTitle>
                <ModalListBox>
                  <ModalFilterList />
                </ModalListBox>
              </ModalWrapper>
              <ModalWrapper>
                <ModalTitle>
                  최고의 크리에이티브 툴을 사용하여 제작된 갤러리
                </ModalTitle>
              </ModalWrapper>
            </ModalBox>
          </ModalBlock>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

// Styled-Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  opacity: 0.4;
  z-index: 10;
`;

const ModalBlock = styled.div`
  z-index: 11;
  overflow: auto;
  position: fixed;
  top: 18%;
  right: 0;
  width: 1135px;
  height: 500px;
  border-radius: 3px;
  background-color: white;
  padding: 40px 35px;
  box-shadow: 0 2px 9px rgba(25, 25, 25, 0.25);
`;
const ModalBox = styled.ul``;
const ModalWrapper = styled.li``;
const ModalTitle = styled.h5`
  padding-left: 5px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 18px;
`;
const ModalListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export default ListModal;
