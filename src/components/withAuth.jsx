import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem('access_token'); // Check if the token exists

    if (!token) {
      return <Navigate to="/auth" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;