
// MEMO: not used but keep it for future use
const Script = ({ children }) => (
  <script dangerouslySetInnerHTML={{__html: `(${children.toString()})();` }}></script>
);

export default Script;
