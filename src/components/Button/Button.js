import React from "react";
import styled from 'styled-components'

const BaseButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 9px 36px;
`

const Button = ({ children, ...rest }) => {
  return (
    <BaseButton className="button" {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
