import React, { useState } from 'react';

const responsiveCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Montserrat:wght@600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { font-family: 'Nunito', sans-serif; }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: none; }
  }

  @keyframes logoFloat {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-7px); }
  }

  .login-input:focus {
    border-color: rgba(26,26,140,0.5) !important;
    box-shadow: 0 0 0 3px rgba(26,26,140,0.08) !important;
  }

  .login-input::placeholder {
    color: #aab0c0;
  }

  .login-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 32px rgba(26,26,140,0.45) !important;
  }

  .login-btn:active {
    transform: translateY(0) !important;
  }

  @media (max-width: 760px) {
    .login-card {
      flex-direction: column !important;
      max-width: 400px !important;
      padding: 40px 28px !important;
    }
    .login-left {
      border-right: none !important;
      border-bottom: 1px solid rgba(26,26,140,0.08) !important;
      padding-right: 0 !important;
      padding-bottom: 32px !important;
      align-items: center !important;
      text-align: center !important;
    }
    .login-right {
      padding-left: 0 !important;
      padding-top: 32px !important;
    }
  }
`;

export default function LoginPage({ onLogin }) {
  const [rm, setRm] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [rmFocused, setRmFocused] = useState(false);
  const [senhaFocused, setSenhaFocused] = useState(false);

  const handleSubmit = () => {
    if (!rm.trim() || !senha.trim() || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLogin) onLogin({ rm, senha });
    }, 1600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <>
      <style>{responsiveCSS}</style>

      {/* Page wrapper */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f4f6fb',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Background blobs */}
        <div style={{
          position: 'fixed', width: '500px', height: '500px', borderRadius: '50%',
          background: '#3333cc', filter: 'blur(100px)', opacity: 0.07,
          top: '-180px', right: '-100px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'fixed', width: '350px', height: '350px', borderRadius: '50%',
          background: '#00bcd4', filter: 'blur(80px)', opacity: 0.08,
          bottom: '-80px', left: '-80px', pointerEvents: 'none',
        }} />

        {/* Center content */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px 100px',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* Card */}
          <div className="login-card" style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '28px',
            boxShadow: '0 24px 64px rgba(26,26,140,0.11), 0 1px 0 rgba(255,255,255,0.9) inset',
            border: '1px solid rgba(255,255,255,0.8)',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '820px',
            padding: '56px 52px',
            animation: 'fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
            gap: '0',
          }}>

            {/* LEFT — Logo */}
            <div className="login-left" style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingRight: '52px',
              borderRight: '1px solid rgba(26,26,140,0.08)',
              gap: '16px',
            }}>
              <img
                src="/logo.jpeg"
                alt="VisãoEscolar"
                style={{
                  width: '220px',
                  animation: 'logoFloat 4s ease-in-out infinite',
                  filter: 'drop-shadow(0 8px 20px rgba(26,26,140,0.12))',
                }}
              />
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: '240px',
              }}>
                Solicite. Acompanhe. Veja o que aconteceu.<br />
                <span style={{ color: '#0097a7', fontWeight: 700 }}>
                  Transparência e segurança para todos.
                </span>
              </p>
            </div>

            {/* RIGHT — Form */}
            <div className="login-right" style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '52px',
              gap: '20px',
            }}>

              <div>
                <h2 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#0d0d5e',
                  marginBottom: '4px',
                }}>
                  Bem-vindo de volta
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>
                  Faça login para continuar
                </p>
              </div>

              {/* RM input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                }}>
                  RM
                </label>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Digite seu RM"
                  value={rm}
                  onChange={e => setRm(e.target.value)}
                  onFocus={() => setRmFocused(true)}
                  onBlur={() => setRmFocused(false)}
                  onKeyDown={handleKeyDown}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: `1.5px solid ${rmFocused ? 'rgba(26,26,140,0.5)' : 'rgba(26,26,140,0.15)'}`,
                    borderRadius: '12px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#0d0d5e',
                    background: 'rgba(244,246,251,0.7)',
                    outline: 'none',
                    transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
                    boxShadow: rmFocused ? '0 0 0 3px rgba(26,26,140,0.08)' : 'none',
                  }}
                />
              </div>

              {/* Senha input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                }}>
                  Senha
                </label>
                <input
                  className="login-input"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  onFocus={() => setSenhaFocused(true)}
                  onBlur={() => setSenhaFocused(false)}
                  onKeyDown={handleKeyDown}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: `1.5px solid ${senhaFocused ? 'rgba(26,26,140,0.5)' : 'rgba(26,26,140,0.15)'}`,
                    borderRadius: '12px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#0d0d5e',
                    background: 'rgba(244,246,251,0.7)',
                    outline: 'none',
                    transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
                    boxShadow: senhaFocused ? '0 0 0 3px rgba(26,26,140,0.08)' : 'none',
                  }}
                />
              </div>

              {/* Login button */}
              <button
                className="login-btn"
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1a1a8c 0%, #3333cc 100%)',
                  color: '#fff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: rm.trim() && senha.trim() ? 'pointer' : 'not-allowed',
                  opacity: rm.trim() && senha.trim() ? 1 : 0.6,
                  boxShadow: '0 8px 28px rgba(26,26,140,0.35)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  marginTop: '4px',
                }}
              >
                {loading ? 'Entrando...' : 'Login'}
              </button>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '52px',
          background: 'linear-gradient(90deg, #1a1a8c 0%, #3333cc 60%, #00bcd4 100%)',
          zIndex: 10,
        }} />

      </div>
    </>
  );
}
