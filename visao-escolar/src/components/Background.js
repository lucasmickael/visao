import React from 'react';

const styles = {
  bgLayer: {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    background: `
      radial-gradient(ellipse 80% 60% at 80% 10%, rgba(0,188,212,0.12) 0%, transparent 70%),
      radial-gradient(ellipse 60% 50% at 10% 80%, rgba(51,51,204,0.10) 0%, transparent 70%),
      #f4f6fb
    `,
  },
  shape1: {
    position: 'fixed',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.18,
    pointerEvents: 'none',
    background: 'var(--blue-mid)',
    top: '-200px',
    right: '-150px',
  },
  shape2: {
    position: 'fixed',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.18,
    pointerEvents: 'none',
    background: 'var(--teal)',
    bottom: '-100px',
    left: '-100px',
  },
  dotGrid: {
    position: 'fixed',
    bottom: '40px',
    left: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 8px)',
    gap: '8px',
    opacity: 0.15,
    pointerEvents: 'none',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--blue-mid)',
    display: 'block',
  },
};

export default function Background() {
  return (
    <>
      <div style={styles.bgLayer} />
      <div style={styles.shape1} />
      <div style={styles.shape2} />
      <div style={styles.dotGrid}>
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} style={styles.dot} />
        ))}
      </div>
    </>
  );
}
