import { RegularButton } from "./Button.styled";

export default function Button({ onClick, active = false, children }) {
  return (
    <RegularButton type="button" onClick={onClick} active={active}>
      {children}
    </RegularButton>
  );
}
