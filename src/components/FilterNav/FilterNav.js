import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FilterNav() {
  //states
  const [filterList, setFilterList] = useState([]);
  const [clicked, setClicked] = useState(0);
  const [transform, setTransform] = useState(0);

  //useEffects
  useEffect(() => {
    loadFilterList();
  }, []);

  useEffect(() => {
    setTransform(transform);
  }, [transform]);

  //navList fetch
  const loadFilterList = async () => {
    const response = await fetch("http://localhost:3001/Data/MainList.json");
    const list = await response.json();
    setFilterList(list.data);
  };

  //click functions
  const clickRight = () => {
    // setTransform((prevState) => prevState + 210);
    setTransform(() => transform + 210);
    setClicked(() => clicked + 1);
  };

  const clickLeft = () => {
    setTransform(() => transform - 210);
    setClicked(() => clicked - 1);
  };
  console.log("transform", transform);

  return (
    <FilterNavBlock>
      <SliderBtnLeft onClick={clickLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.924"
          height="17.665"
          viewBox="0 0 11.924 17.665"
        >
          <path
            d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
            transform="translate(-9.75 -3.5)"
          ></path>
        </svg>
      </SliderBtnLeft>
      <SliderBtnRight onClick={clickRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.924"
          height="17.665"
          viewBox="0 0 11.924 17.665"
        >
          <path
            d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
            transform="translate(-9.75 -3.5)"
          ></path>
        </svg>
      </SliderBtnRight>
      <SeeAllBtn>
        <svg viewBox="0 0 22 8" width="22" height="8">
          <circle cx="2.5" cy="2.5" r="2.5"></circle>
          <circle cx="10.5" cy="2.5" r="2.5"></circle>
          <circle cx="18.5" cy="2.5" r="2.5"></circle>
        </svg>
      </SeeAllBtn>
      <FilterNavBox transform={transform}>
        {filterList.map((el, idx) => (
          <Link to={el.url} key={idx}>
            <FilterList>
              <ListOverlay />
              <ListTitle>{el.title}</ListTitle>
              <FilterImg src={el.img} />
            </FilterList>
          </Link>
        ))}
      </FilterNavBox>
    </FilterNavBlock>
  );
}

const SliderBtnRight = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  right: 100px;
  z-index: 3;
  align-items: center;
  background-color: #fff;
  fill: ${(props) => props.theme.colors.iconGray};
  box-shadow: 0 2px 10px rgba(25, 25, 25, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.15s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.borderGray};
    fill: ${(props) => props.theme.colors.mainBlack};
    transition: all 0.15s linear;
  }
`;

const SliderBtnLeft = styled(SliderBtnRight)`
  right: 0;
  left: 10px;
  transform: rotate(180deg) translateY(50%);
  box-shadow: 0 -2px 3px rgba(25, 25, 25, 0.25);
`;

const SeeAllBtn = styled(SliderBtnRight)`
  height: 68px;
  width: 68px;
  border-radius: 6px;
  right: 15px;
`;

const FilterNavBlock = styled.nav`
  margin-top: 60px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  width: 100%;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
  }

  &:after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const FilterNavBox = styled.ul`
  display: inline-flex;
  left: 50%;
  position: relative;
  transform: translateX(${(props) => props.transform}px);
`;

const ListOverlay = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.mainBlue};
  transition: opacity 0.15s linear;
  z-index: 2;
`;

const FilterList = styled.li`
  margin: 10px 5px;
  width: 200px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.mainBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: pointer;
  /* transform: translateX(-100%); */

  &:hover ${ListOverlay} {
    opacity: 1;
  }
`;

const FilterImg = styled.img`
  width: 100px;
  position: absolute;
  width: 100%;
  z-index: 0;
  opacity: 0.5;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 1px 0 ${(props) => props.theme.colors.mainBlack};
  z-index: 2;
`;

export default FilterNav;
