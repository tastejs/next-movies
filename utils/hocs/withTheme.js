
import ThemeContext from 'contexts/theme-context';

function withTheme(WrappedComponent) {
  return React.forwardRef(function ThemeComponent(props, ref) {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <WrappedComponent
            {...props}
            ref={ref}
            theme={themeContext} />
        )}
      </ThemeContext.Consumer>
    );
  });
};

export default withTheme;
