import React from 'react';

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
    marginBottom: '40px',
  },
  img: {
    width: '200px',
    animation: 'logoFloat 4s ease-in-out infinite',
    filter: 'drop-shadow(0 8px 20px rgba(26,26,140,0.15))',
  },
};

export default function Logo() {
  return (
    <div style={styles.wrap}>
      <img
        src="/logo.jpeg"
        alt="VisãoEscolar"
        style={styles.img}
      />
    </div>
  );
}
