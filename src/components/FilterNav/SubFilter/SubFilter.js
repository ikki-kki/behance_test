import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SubFilter() {
  const [subFilterList, setSubFilterList] = useState([]);

  useEffect(() => {
    loatSubFilter();
  }, []);

  const loatSubFilter = async () => {
    const response = await fetch(
      "http://localhost:3000/Data/SubFilterList.json"
    );
    const filters = await response.json();
    setSubFilterList(filters.data);
  };

  return (
    <>
      <SubFilterBlock>
        {subFilterList.map((el, idx) => (
          <Link to="/" key={idx}>
            <SubFilterBox>
              <FilterTitle>{el.title}</FilterTitle>
            </SubFilterBox>
          </Link>
        ))}
      </SubFilterBlock>
    </>
  );
}

const SubFilterBlock = styled.div`
  display: flex;
  position: relative;
  margin: auto 0;
  width: 100%;
  justify-content: center;
`;
const SubFilterBox = styled.div`
  padding: 14px 21px 11px;
  margin: 0 5px 10px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(25, 25, 25, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.mainBlue};
    transition: all 0.2s ease-in-out;
  }
`;
const FilterTitle = styled.h5`
  font-size: 16px;
  font-weight: 700;
`;

export default SubFilter;
