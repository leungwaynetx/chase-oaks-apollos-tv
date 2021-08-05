import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import DefaultPreference from 'react-native-default-preference';

import { AUTH_TOKEN_KEY } from '../config/keys';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  authenticated: false,
  identity: null,
  step: 0,
  token: null,
  type: null,
  userExists: false,
  onSuccess: () => false,
  userProfile: [],
};

const actionTypes = {
  update: 'update',
  logout: 'logout',
  reset: 'reset',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.update: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.logout: {
      return initialState;
    }
    case actionTypes.reset: {
      return initialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

async function getInitialState(state) {
  const token = await DefaultPreference.get(AUTH_TOKEN_KEY);
  if (token) {
    return {
      ...state,
      authenticated: true,
      token,
    };
  }
  return state;
}

function AuthProvider(props = {}) {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);
  const { authenticated, token } = state;

  useEffect(() => {
    if (token) {
      DefaultPreference.set(AUTH_TOKEN_KEY, token);
      dispatch({ type: 'update', payload: { authenticated: true } });
    }
  }, [token, authenticated]);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

// const state = useAuthState();
function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error(`useAuthState must be used within a AuthProvider`);
  }
  return context;
}

// const dispatch = useAuthDispatch();
function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(`useAuthDispatch must be used within a AuthProvider`);
  }
  return context;
}

// const [state, dispatch] = useAuth();
function useAuth() {
  const context = [useAuthState(), useAuthDispatch()];
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

const update = (payload) => ({
  type: 'update',
  payload,
});

const logout = () => ({
  type: 'logout',
});

const reset = () => ({
  type: 'reset',
});

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export {
  AuthProvider as default,
  useAuth,
  useAuthState,
  useAuthDispatch,
  actionTypes,
  update,
  logout,
  reset,
};
