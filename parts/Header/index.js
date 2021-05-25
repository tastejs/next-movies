

import clsx from 'clsx';

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
        font-size: ${size === SIZE_TYPES.LARGE ? '3.75rem' : '3rem'};
        font-weight: ${theme.typography.fontWeightLight};
        line-height: ${size === SIZE_TYPES.LARGE ? '1.2' : '1'};
        text-transform: uppercase;
        letter-spacing: -0.5px;
      }
    
      @media ${theme.mediaQueries.medium} {
        .title {
          font-size: ${size === SIZE_TYPES.LARGE ? '3rem' : '2.125rem'};
        }
      }
    
      @media ${theme.mediaQueries.small} {
        .title {
          font-size: ${size === SIZE_TYPES.LARGE ? '2.125rem' : '1.5rem'};
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
        font-size: ${size === SIZE_TYPES.LARGE ? '1.5rem' : '1.25rem'};
        font-weight: ${theme.typography.fontWeightBold};
        line-height: ${size === SIZE_TYPES.LARGE ? '1.5' : '1'};
        text-transform: uppercase;
      }
    
      @media ${theme.mediaQueries.medium} {
        .subtitle {
          font-size: ${size === SIZE_TYPES.LARGE ? '1.25rem' : '1rem'};
        }
      }
    `}</style>
  </>
);

const Header = ({
  theme,
  title,
  subtitle,
  size,
  className,
  ...rest
}) => (
  <>
    <div
      {...rest}
      className={clsx('header', className)}>
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
    <style jsx>{`
      .header {
        margin-bottom: 2rem;
      }
    `}</style>
  </>
);

export default withTheme(Header);
