import styled from 'styled-components';

export default styled.div`
  display: flex;
  margin-bottom: 15px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 5px 5px rgba(38, 38, 38, 0.1);
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  width: 600px;
  min-width: 470px;
  height: 100px;
  @media (max-width: 711px) {
    width: 470px;
  }
`;
