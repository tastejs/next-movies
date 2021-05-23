
import withTheme from 'utils/hocs/withTheme';
import SIZE_TYPES from 'utils/constants/size-types';

const Title = ({
  theme,
  size = SIZE_TYPES.MEDIUM,
  children
}) => (
  <>
    <h1 className='title'>{children}</h1>
    <style jsx>{`
      .title {
        margin-bottom: 0.5rem;
        color: var(--palette-text-primary);
        font-size: ${size === SIZE_TYPES.LARGE ? '4rem' : '2.5rem'};
        font-weight: 200;
        line-height: ${size === SIZE_TYPES.LARGE ? '1.2' : '1'};
        text-transform: uppercase;
        letter-spacing: -0.5px;
      }
    
      @media ${theme.mediaQueries.medium} {
        .title {
          font-size: ${size === SIZE_TYPES.LARGE ? '2.7rem' : '2.2rem'};
        }
      }
    
      @media ${theme.mediaQueries.small} {
        .title {
          font-size: ${size === SIZE_TYPES.LARGE ? '2.2rem' : '2rem'};
        }
      }
    `}</style>
  </>
);

const Subtitle = ({
  theme,
  size,
  children
}) => (
  <>
    <h2 className='subtitle'>{children}</h2>
    <style jsx>{`
      .subtitle {
        color: var(--palette-text-secondary);
        font-size: ${size === SIZE_TYPES.LARGE ? '1.7rem' : '1.2rem'};
        font-weight: 700;
        line-height: ${size === SIZE_TYPES.LARGE ? '1.5' : '1'};
        text-transform: uppercase;
      }
    
      @media ${theme.mediaQueries.medium} {
        .subtitle {
          font-size: ${size === SIZE_TYPES.LARGE ? '1.3rem' : '1.1rem'};
        }
      }
    `}</style>
  </>
);

const Header = ({
  theme,
  style,
  title,
  subtitle,
  size,
  ...rest
}) => (
  <div
    {...rest}
    style={{
      ...style,
      marginBottom: '2rem'
    }}>
    <Title
      theme={theme}
      size={size}>
      {title}
    </Title>
    <Subtitle
      theme={theme}
      size={size}>
      {subtitle}
    </Subtitle>
  </div>
);

export default withTheme(Header);
