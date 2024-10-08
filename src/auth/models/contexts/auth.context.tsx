'use client';
import { ReactNode, createContext, useCallback, useMemo, useState } from 'react';
import { RoleResponse, UserResponse } from '~/users/models/services/generated/user.generated';
import { Authorization } from '../helpers/token';

export type AuthProviderProps = {
  initialToken: Authorization;
  initialUser: UserResponse;
  initialRoles: RoleResponse[];
  children: ReactNode;
};

export type AuthState = {
  token?: Authorization;
  user?: UserResponse;
  roles: RoleResponse[];
};

export type AuthContextActions = {
  updateToken: (token: Authorization) => void;
  updateUser: (user: UserResponse) => void;
  updateRoles: (roles: RoleResponse[]) => void;
};

export type AuthContextType = [AuthState, AuthContextActions];

const initialContext: AuthContextType = [
  {
    token: undefined,
    user: undefined,
    roles: [],
  },
  {
    updateToken: () => {
      throw new Error('AuthProvider updateToken not assigned');
    },
    updateUser: () => {
      throw new Error('AuthProvider updateToken not assigned');
    },
    updateRoles: () => {
      throw new Error('AuthProvider updateToken not assigned');
    },
  },
];

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider = (props: AuthProviderProps) => {
  const [token, setToken] = useState(props.initialToken);
  const [user, setUser] = useState(props.initialUser);
  const [roles, setRoles] = useState(props.initialRoles);

  const state = useMemo(() => ({ token, user, roles }), [token, user, roles]);

  const updateToken = useCallback((newToken: Authorization) => {
    setToken(newToken);
  }, []);

  const updateRoles = useCallback((roles: RoleResponse[]) => {
    setRoles(roles);
  }, []);

  const updateUser = useCallback((user: UserResponse) => {
    setUser(user);
  }, []);

  const context: AuthContextType = [state, { updateToken, updateRoles, updateUser }];

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
};
