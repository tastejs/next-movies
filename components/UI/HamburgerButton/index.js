

import withTheme from 'utils/hocs/withTheme';

const Bar = withTheme(({ theme }) => (
  <>
    <span className='bar' />
    <style jsx>{`
      .bar {
        width: 100%;
        height: 4px;
        margin: 2px 0;
        border-radius: ${theme.shape.borderRadius}px;
        background-color: var(--palette-secondary-main);
      }
    `}</style>
  </>
));

const HamburgerButton = props => (
  <>
    <div className='hamburger-button' {...props}>
      <Bar />
      <Bar />
      <Bar />
    </div>
    <style jsx>{`
      .hamburger-button {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: space-around;
        width: 25px;
        line-height: 1;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default HamburgerButton;
