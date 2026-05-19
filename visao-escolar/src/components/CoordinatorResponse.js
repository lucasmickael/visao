import React, { useState } from 'react';
import Background from './Background';

const styles = {
  page: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  leftPanel: {
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
  },
  headline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 'clamp(2rem, 3vw, 2.8rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    color: 'var(--text-dark)',
  },
  headlineAccent: {
    background: 'linear-gradient(135deg, var(--blue-mid), var(--teal))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtext: {
    fontSize: '1.05rem',
    fontWeight: 500,
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    maxWidth: '400px',
  },
  rightPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 60px 60px 40px',
  },
  card: {
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '28px',
    padding: '48px 44px',
    boxShadow: '0 20px 60px rgba(26,26,140,0.12), 0 1px 0 rgba(255,255,255,0.8) inset',
    border: '1px solid rgba(255,255,255,0.7)',
    width: '100%',
    maxWidth: '460px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    animation: 'cardIn 0.7s cubic-bezier(0.22,1,0.36,1) both',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  backBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    border: '1.5px solid rgba(26,26,140,0.15)',
    background: 'rgba(26,26,140,0.05)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.18s ease',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text-dark)',
    letterSpacing: '0.02em',
  },
  avatarWrap: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1a1a8c, #3333cc)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    flexShrink: 0,
  },
  sectionLabel: {
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '8px',
  },
  textarea: {
    width: '100%',
    minHeight: '130px',
    border: '1.5px solid rgba(26,26,140,0.15)',
    borderRadius: '14px',
    padding: '16px 18px',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--text-dark)',
    background: 'rgba(244,246,251,0.7)',
    resize: 'vertical',
    outline: 'none',
    transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
    lineHeight: 1.6,
  },
  btnRow: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
  },
  btnCancel: {
    padding: '12px 28px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #e53935, #ef5350)',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(229,57,53,0.3)',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
  },
  btnSend: {
    padding: '12px 28px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #2e7d32, #43a047)',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(46,125,50,0.3)',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
  },
  divider: {
    height: '1px',
    background: 'rgba(26,26,140,0.08)',
    margin: '0 -4px',
  },
  infoBox: {
    background: 'rgba(244,246,251,0.9)',
    border: '1.5px solid rgba(26,26,140,0.1)',
    borderRadius: '14px',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  infoRow: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  infoIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, rgba(26,26,140,0.08), rgba(0,188,212,0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '1px',
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  infoLabel: {
    fontSize: '0.7rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
  },
  infoValue: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: 'var(--text-dark)',
  },
};

// Dados mockados da solicitação
const solicitacao = {
  solicitante: 'João Silva',
  perfil: 'Aluno — 3º Ano B',
  motivo: 'Objeto pessoal furtado durante o intervalo',
  local: 'Corredor próximo à quadra esportiva',
  data: '18/05/2026',
  horario: '10h30 — 11h00',
};

export default function CoordinatorResponse({ onBack }) {
  const [resposta, setResposta] = useState('');
  const [focused, setFocused] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!resposta.trim() || sending) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 2500);
      setResposta('');
    }, 1600);
  };

  const handleCancel = () => {
    setResposta('');
  };

  return (
    <>
      <Background />
      <div style={styles.page} className="page-grid">

        {/* LEFT */}
        <div style={styles.leftPanel} className="left-panel-responsive">
          <div style={styles.badge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Área do Coordenador
          </div>

          <h1 style={styles.headline}>
            Responda as<br />
            solicitações com<br />
            <span style={styles.headlineAccent}>agilidade</span>
          </h1>

          <p style={styles.subtext}>
            Analise as informações da solicitação e envie uma resposta clara ao aluno ou professor que pediu acesso às câmeras.
          </p>
        </div>

        {/* RIGHT */}
        <div style={styles.rightPanel} className="right-panel-responsive">
          <div style={styles.card}>

            {/* Header */}
            <div style={styles.cardHeader}>
              <button
                style={styles.backBtn}
                onClick={onBack}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(26,26,140,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(26,26,140,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(26,26,140,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(26,26,140,0.15)';
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a8c" strokeWidth="2.5" width="16" height="16">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <span style={styles.cardTitle}>Login Coordenador</span>

              <div style={styles.avatarWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="22" height="22">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div style={styles.divider} />

            {/* Textarea */}
            <div>
              <p style={styles.sectionLabel}>Resposta da Solicitação</p>
              <textarea
                style={{
                  ...styles.textarea,
                  borderColor: focused ? 'rgba(26,26,140,0.4)' : 'rgba(26,26,140,0.15)',
                  boxShadow: focused ? '0 0 0 3px rgba(26,26,140,0.08)' : 'none',
                }}
                placeholder="Digite aqui a resposta para a solicitação..."
                value={resposta}
                onChange={e => setResposta(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </div>

            {/* Buttons */}
            <div style={styles.btnRow}>
              <button
                style={styles.btnCancel}
                onClick={handleCancel}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(229,57,53,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(229,57,53,0.3)'; }}
              >
                Cancelar
              </button>
              <button
                style={{
                  ...styles.btnSend,
                  opacity: !resposta.trim() ? 0.6 : 1,
                  cursor: !resposta.trim() ? 'not-allowed' : 'pointer',
                }}
                onClick={handleSend}
                onMouseEnter={e => { if (resposta.trim()) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(46,125,50,0.4)'; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(46,125,50,0.3)'; }}
              >
                {sending ? 'Enviando...' : sent ? '✓ Enviado!' : 'Enviar'}
              </button>
            </div>

            <div style={styles.divider} />

            {/* Info box */}
            <div>
              <p style={styles.sectionLabel}>Informações da Solicitação</p>
              <div style={styles.infoBox}>

                <div style={styles.infoRow}>
                  <div style={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a8c" strokeWidth="2" width="16" height="16">
                      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Solicitante</span>
                    <span style={styles.infoValue}>{solicitacao.solicitante} · {solicitacao.perfil}</span>
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <div style={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0097a7" strokeWidth="2" width="16" height="16">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Motivo</span>
                    <span style={styles.infoValue}>{solicitacao.motivo}</span>
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <div style={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a8c" strokeWidth="2" width="16" height="16">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Local</span>
                    <span style={styles.infoValue}>{solicitacao.local}</span>
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <div style={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0097a7" strokeWidth="2" width="16" height="16">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Data · Horário</span>
                    <span style={styles.infoValue}>{solicitacao.data} · {solicitacao.horario}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
