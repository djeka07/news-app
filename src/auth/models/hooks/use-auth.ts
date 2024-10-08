import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/auth.context';

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used in a AuthProvider');
  }
  return context;
};

export default useAuth;