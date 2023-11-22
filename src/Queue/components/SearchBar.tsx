import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  filterChange: (x: string) => void;
};

const StyledSearchBar = styled.input`
  width: 25vw;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    box-shadow: rgba(5, 30, 46, 0.24) 10px 10px 10px 0.5px;
  }
`;

export const SearchBar = ({ filterChange }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    filterChange(e.target.value);
  };

  return (
    <StyledSearchBar
      data-testid='search-bar'
      type='text'
      placeholder='Search'
      value={searchValue}
      onChange={handleValue}
    ></StyledSearchBar>
  );
};
