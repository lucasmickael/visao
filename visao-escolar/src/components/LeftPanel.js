import React from 'react';

const styles = {
  panel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '80px 72px',
    gap: '20px',
    animation: 'fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(0,188,212,0.12)',
    border: '1px solid rgba(0,188,212,0.3)',
    color: '#0097a7',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '6px 14px',
    borderRadius: '100px',
    marginBottom: '8px',
  },
  headline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    color: 'var(--text-dark)',
  },
};

export default function LeftPanel() {
  return (
    <div style={styles.panel}>
      <div style={styles.badge}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Plataforma Educacional
      </div>

      <h1 style={styles.headline}>
        Acesso às câmeras<br />
        de segurança<br />
        com{' '}
        <span style={{
          background: 'linear-gradient(135deg, var(--blue-mid), var(--teal))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          transparência
        </span>
      </h1>

      <p style={{
        fontSize: '1.05rem',
        fontWeight: 500,
        color: 'var(--text-muted)',
        lineHeight: 1.7,
        maxWidth: '420px',
      }}>
        Solicite à secretaria o acesso às câmeras de segurança da escola de forma rápida, simples e rastreável.
      </p>
    </div>
  );
}
