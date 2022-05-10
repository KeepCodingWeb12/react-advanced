import React from 'react';
import useFetch from './useFetch';

export default function withFetch(url) {
  return function (WrappedComponent) {
    return function WithFetchComponent(props) {
      const { isLoading, error, data } = useFetch(url);

      if (isLoading) return 'Loading...';
      if (error) return `Meeehh, error: ${error.message}`;
      return <WrappedComponent data={data} {...props} />;
    };
    // return class WithFetchComponent extends React.Component {};
  };
}
