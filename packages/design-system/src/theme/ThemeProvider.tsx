import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dotlandTheme } from './index';

interface DotlandThemeProviderProps {
  children: React.ReactNode;
}

/**
 * DotlandThemeProvider wraps your application with the Dotland design system theme.
 * This component should be placed at the root of your application.
 *
 * @example
 * ```tsx
 * import { DotlandThemeProvider } from '@dotland/design-system';
 *
 * function App() {
 *   return (
 *     <DotlandThemeProvider>
 *       <YourApp />
 *     </DotlandThemeProvider>
 *   );
 * }
 * ```
 */
export const DotlandThemeProvider: React.FC<DotlandThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={dotlandTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
