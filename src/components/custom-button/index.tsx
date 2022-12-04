import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

CustomButton.defaultProps = {
  type: 'button',
};

export default CustomButton;
