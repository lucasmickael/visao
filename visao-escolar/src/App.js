import React from 'react';
import Background from './components/Background';
import LeftPanel from './components/LeftPanel';
import LoginCard from './components/LoginCard';

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

// Responsividade via media query injetada no head
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
  return (
    <>
      <style>{responsiveCSS}</style>
      <Background />
      <div style={styles.page} className="page-grid">
        <div className="left-panel-responsive">
          <LeftPanel />
        </div>
        <div style={styles.rightPanel} className="right-panel-responsive">
          <LoginCard />
        </div>
      </div>
    </>
  );
}
