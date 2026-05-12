import React, { useState } from 'react';

const baseStyle = {
  width: '100%',
  padding: '17px 32px',
  border: 'none',
  borderRadius: '14px',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.95rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
};

const variants = {
  aluno: {
    background: 'linear-gradient(135deg, #1a1a8c 0%, #3333cc 100%)',
    boxShadow: '0 8px 30px rgba(26,26,140,0.35)',
  },
  professor: {
    background: 'linear-gradient(135deg, #0097a7 0%, #00bcd4 100%)',
    boxShadow: '0 8px 30px rgba(0,188,212,0.35)',
  },
};

const hoverShadows = {
  aluno: '0 14px 40px rgba(26,26,140,0.45)',
  professor: '0 14px 40px rgba(0,188,212,0.45)',
};

function SpinnerIcon() {
  return (
    <svg
      style={{ animation: 'spin 0.8s linear infinite' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      width="20"
      height="20"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export default function LoginButton({ variant, icon, label, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
    if (onClick) onClick(variant);
  };

  const style = {
    ...baseStyle,
    ...variants[variant],
    transform: hovered && !loading ? 'translateY(-3px)' : 'none',
    boxShadow: hovered && !loading ? hoverShadows[variant] : variants[variant].boxShadow,
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {loading ? (
        <>
          <SpinnerIcon />
          Entrando...
        </>
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </button>
  );
}
