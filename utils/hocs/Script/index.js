
const Script = ({ children }) => (
  <script dangerouslySetInnerHTML={{__html: `(${children.toString()})();` }}></script>
);

export default Script;
