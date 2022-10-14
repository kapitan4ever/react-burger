import { FC, ReactNode } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { getCookie } from '../../services/utils';
import { TLocation } from '../../services/types/data'; 

interface IProtectedProps {
	children: ReactNode;
	path: string;
	exact?: boolean;
}

export const ProtectedRoute: FC<IProtectedProps> = ({ children, ...rest }) => {
	const cookie = getCookie('token');
	const location = useLocation<TLocation>();
	
  return (
    <Route
      {...rest}
      render={() => (
          cookie ? (children) : (<Redirect to={{ pathname: '/login', state: { from: location}}} />)
        )
      }
    />
  );
} 