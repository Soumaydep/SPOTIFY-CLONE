import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CleanUrlAfterAuth = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Clean the URL to remove the hash fragment
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location]);

  return null; // This component does not render anything
};

export default CleanUrlAfterAuth;