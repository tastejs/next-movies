
import ErrorBox from 'parts/ErrorBox';

const Error = ({ statusCode }) => (
  <ErrorBox statusCode={statusCode} />
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {statusCode};
};

export default Error;
