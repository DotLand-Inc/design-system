import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { dotlandTheme } from '../../theme';

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  /**
   * The color of the button
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   * The variant to use
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * Button component based on Material-UI Button with Dotland theme
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  ...props
}) => {
  return (
    <ThemeProvider theme={dotlandTheme}>
      <MuiButton color={color} variant={variant} size={size} {...props}>
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};
