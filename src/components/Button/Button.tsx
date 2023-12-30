import { Link } from 'react-router-dom';
import './button.css';

type ButtonProps = {
  linkTo: string;
  buttonText: string;
  theme: 'btn-primary' | 'btn-secondary';
};

const Button: React.FC<ButtonProps> = ({ linkTo, buttonText, theme }) => {
  return (
    <Link to={linkTo} className={theme}>
      {buttonText}
    </Link>
  );
};

export default Button;
