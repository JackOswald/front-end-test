import styled from 'styled-components';

type ButtonProps = {
  name: string;
  onClick: () => void;
  disabled: boolean;
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
  border-color: transparent;
  box-shadow: rgba(5, 30, 46, 0.24) 0px 2px 4px 0px, transparent 0px 0px;
  background-color: #ffffff;
`;

export const Button = ({ name, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {name}
    </StyledButton>
  );
};
