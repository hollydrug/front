import React from 'react';
import styled from 'styled-components';

const MainSearchBox = ({ value, onChange }) => {
  return (
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='검색어를 입력하세요'
    />
  );
};

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default MainSearchBox;
