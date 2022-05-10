import useFetch from './useFetch';

const Fetch = ({ url, children }) => {
  const { isLoading, error, data } = useFetch(url);

  if (isLoading) return 'Loading...';
  if (error) return `Meeehh, error: ${error.message}`;
  return children(data);
};

export default Fetch;
