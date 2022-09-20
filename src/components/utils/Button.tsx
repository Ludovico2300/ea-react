import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline-black", "btn--outline-white"];

const SIZES = ["btn--medium", "btn--large"];

interface Props {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle?: any;
  buttonSize?: any;
  className?: any
}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: Props) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

  return (
    <Link to="#" className="btn-mobile">
      <button
        className={`${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
