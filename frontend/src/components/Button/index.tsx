import React from 'react';
import './styles.css'
import { IconProps } from '@phosphor-icons/react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    className?: string;
    icon?: React.ComponentType<IconProps>;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, className = '', icon: Icon }) => {
  return (
    <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        aria-label={label}
        aria-disabled={disabled}
        role="button"
    >
        {Icon && <Icon size={18} />}
        {label}
    </button>
  );
};

export default Button;
