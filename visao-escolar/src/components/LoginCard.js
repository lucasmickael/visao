import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';

const styles = {
  card: {
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '28px',
    padding: '52px 48px',
    boxShadow: '0 20px 60px rgba(26,26,140,0.12), 0 1px 0 rgba(255,255,255,0.8) inset',
    border: '1px solid rgba(255,255,255,0.7)',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'cardIn 0.7s cubic-bezier(0.22,1,0.36,1) both',
  },
  cardTitle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '36px',
  },
  cardTitleSpan: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: 'var(--text-dark)',
    marginBottom: '4px',
  },
  cardTitleSmall: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '16px',
  },
  separator: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    margin: '4px 0',
  },
  separatorLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(0,0,0,0.08)',
  },
  separatorText: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    fontWeight: 600,
  },
  footer: {
    marginTop: '28px',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 1.6,
  },
};

function AlunoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function ProfessorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export default function LoginCard({ onNext }) {
  const handleLogin = () => {
    if (onNext) onNext();
  };

  return (
    <div style={styles.card}>
      <Logo />

      <div style={styles.cardTitle}>
        <span style={styles.cardTitleSpan}>Bem-vindo de volta</span>
        <small style={styles.cardTitleSmall}>Escolha seu perfil para continuar</small>
      </div>

      <div style={styles.btnGroup}>
        <LoginButton
          variant="aluno"
          icon={<AlunoIcon />}
          label="Sou Aluno"
          onClick={handleLogin}
        />

        <div style={styles.separator}>
          <span style={styles.separatorLine} />
          <span style={styles.separatorText}>ou</span>
          <span style={styles.separatorLine} />
        </div>

        <LoginButton
          variant="professor"
          icon={<ProfessorIcon />}
          label="Sou Professor"
          onClick={handleLogin}
        />
      </div>

      <p style={styles.footer}>
        Ao entrar, você concorda com os{' '}
        <a href="#">Termos de Uso</a>
        {' '}e a{' '}
        <a href="#">Política de Privacidade</a>
      </p>
    </div>
  );
}
