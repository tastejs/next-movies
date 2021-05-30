
/**
 * TODO:
 * Could remove all theme prop and just wrap it with this HOC whenever the component needs theme properties for consistency and simplicity. 
 */

import ThemeContext from 'contexts/theme-context';

function withTheme(WrappedComponent) {
  return React.forwardRef(function ThemeComponent(props, ref) {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <WrappedComponent
            ref={ref}
            theme={themeContext}
            {...props} />
        )}
      </ThemeContext.Consumer>
    );
  });
};

export default withTheme;
