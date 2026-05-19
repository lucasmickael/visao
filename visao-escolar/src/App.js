import React, { useState } from 'react';
import Background from './components/Background';
import LeftPanel from './components/LeftPanel';
import LoginCard from './components/LoginCard';
import CoordinatorResponse from './components/CoordinatorResponse';
import LoginPage from './components/LoginPage';

const styles = {
  page: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  rightPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 60px 60px 40px',
  },
};

const responsiveCSS = `
  @media (max-width: 900px) {
    .page-grid {
      grid-template-columns: 1fr !important;
      grid-template-rows: auto auto;
    }
    .left-panel-responsive {
      padding: 60px 40px 40px !important;
      align-items: center !important;
      text-align: center !important;
    }
    .right-panel-responsive {
      padding: 20px 24px 60px !important;
    }
  }
  @media (max-width: 500px) {
    .left-panel-responsive {
      padding: 40px 20px 24px !important;
    }
  }
`;

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'loginPage') {
    return (
      <LoginPage onLogin={() => setPage('home')} onBack={() => setPage('home')} />
    );
  }

  if (page === 'coordinator') {
    return (
      <>
        <style>{responsiveCSS}</style>
        <CoordinatorResponse onBack={() => setPage('home')} />
      </>
    );
  }

  return (
    <>
      <style>{responsiveCSS}</style>
      <Background />
      <div style={styles.page} className="page-grid">
        <div className="left-panel-responsive">
          <LeftPanel />
        </div>
        <div style={styles.rightPanel} className="right-panel-responsive">
          <LoginCard onNext={() => setPage('loginPage')} />
        </div>
      </div>
    </>
  );
}
