

import theme from 'styles/theme';
import ThemeContext from 'contexts/theme-context';

const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
