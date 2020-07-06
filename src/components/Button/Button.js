import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 9px 36px;
`;

// const Button = ({ children, ...rest }) => {
//   return (
//     <BaseButton className="button" {...rest}>
//       {children}
//     </BaseButton>
//   );
// };

// Extend BaseButton
const Button = styled(BaseButton)`
  background: ${(props) => props.theme.primary};
  border: none;
  color: #fff

  :hover,
  :focus {
    background-color: ${(props) => props.theme.primaryHover};
    color: #fff;
  }

  // Using Props
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.50;
    cursor: not-allowed;
  `}
`;

const ButtonComponent = () => {
  return (
    <>
      <Button>{"Hello World!"}</Button>
      <Button disabled>{"Hello World!"}</Button>
    </>
  );
};

export default ButtonComponent;
