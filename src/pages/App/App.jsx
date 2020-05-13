import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Link = styled(NavLink)`
  color: #61dafb;
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/counter">View sample redux counter page</Link>
      </AppHeader>
    </AppWrapper>
  );
};

export default App;
