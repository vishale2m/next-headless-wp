import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  href,
  target,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'btn';

  const variants = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    primaryOutline: 'primary-btn-outline',
    secondaryOutline: 'secondary-btn-outline',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;