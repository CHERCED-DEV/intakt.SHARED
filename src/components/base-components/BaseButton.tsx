import React from 'react';
import { BaseButtonProps } from '../../interfaces/base-interfaces/components/base-button.interface';


const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  id,
  ariaLabel,
  disabled = false,
}) => {
  return (
    <button
      id={id}
      className={`btn btn-${variant}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default BaseButton;
