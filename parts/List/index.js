
/**
 * TODO:
 * Number UI is fragile on small width screen.
 * Could apply ellipsis to movie titles to avoid breaking number element.
 */

const ListItem = ({
  children,
  ...rest
}) => (
  <>
    <li {...rest}>
      <div>
        {children}
      </div>
    </li>
    <style jsx>{`
      li {
        display: flex;
        align-items: center;
        margin: 2px 0;
        font-size: 1.5rem;
        counter-increment: item;
        margin-bottom: 5px;
      }

      li:before {
        margin-right: 10px;
        content: counter(item);
        background-color: var(--palette-custom-lightBlue);
        border-radius: 50%;
        color: var(--palette-text-primary);
        width: 24px;
        height: 24px;
        display: inline-grid;
        place-items: center;
      }

      li > div {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--palette-divider);
        padding: 2px 8px 2px 20px;
      }
    `}</style>
  </>
);

const List = props => (
  <>
    <ol {...props} />
    <style jsx>{`
      ol {
        list-style: none;
        counter-reset: item;
      }
    `}</style>
  </>
);

export {
  ListItem
};

export default List;
