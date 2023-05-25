import React, { useState } from 'react';
import logo from './logo.svg';
import './PageShell.css';
import { PageContextProvider } from './usePageContext';
import { Link } from './Link';

export { PageShell };

function PageShell({ pageContext, children }) {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const handleSidebarButtonClick = () => {
    setDisplaySidebar(false);
  };

  const handleToggleButtonClick = () => {
    setDisplaySidebar(true);
  };

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <Layout>
        {displaySidebar ? (
            <Sidebar>
              <button onClick={handleSidebarButtonClick}>X</button>
              <Logo />
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/about">
                About
              </Link>
              <Link className="navitem" href="/create">
                Create
              </Link>
              <Link className="navitem" href="/view">
                View
              </Link>
            </Sidebar>
        ) : (
          <ToggleButton onClick={handleToggleButtonClick} />
        )}
            <Content>{children}</Content>
          </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

function ToggleButton({ onClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: '#fff',
        padding: '10px'
      }}
    >
      <button onClick={onClick}>O</button>
    </div>
  );
}

