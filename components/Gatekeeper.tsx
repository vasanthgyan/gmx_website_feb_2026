
import React, { useState, useEffect } from 'react';
import { Lock, Sparkles, BrainCircuit, Rocket, ShieldCheck } from 'lucide-react';

interface GatekeeperProps {
  onAuthorize: () => void;
}

const Gatekeeper: React.FC<GatekeeperProps> = ({ onAuthorize }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isMounting, setIsMounting] = useState(false);

  // The secret "Sigma" password
  const CORRECT_PASS = 'AI_IS_THE_GOAT_FR';

  useEffect(() => {
    setIsMounting(true);
    // Check local storage for persistent session
    const auth = localStorage.getItem('gm_auth_2026');
    if (auth === 'true') onAuthorize();
  }, [onAuthorize]);

  const handleVibeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === CORRECT_PASS) {
      localStorage.setItem('gm_auth_2026', 'true');
      onAuthorize();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center p-6 transition-all duration-1000 ${isMounting ? 'opacity-100' : 'opacity-0'}`}>
      {/* Abstract AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2A9D8F]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0066FF]/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative w-full max-w-xl">
        <div className="bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-16 shadow-[0_0_100px_rgba(0,0,0,0.8)] text-center space-y-12">
          
          {/* Logo Branding */}
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-2xl shadow-2xl border border-white/20">
              <img 
                src="https://gyanmatrix.com/wp-content/uploads/2023/12/Link-GyanMatrix-Logo-%E2%86%92-gyanmatrix_logo-1-400x78.png.png" 
                alt="GyanMatrix Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-500 uppercase tracking-widest">
              Sigma AI Infrastructure Detected
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-white">
              NO CAP AI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">ENERGY ONLY.</span>
            </h1>
            <p className="text-neutral-400 text-lg font-bold max-w-sm mx-auto leading-tight">
              POV: You're about to scale 300+ engineers with elite rizz. Enter the secret sauce to unlock the lab.
            </p>
          </div>

          <form onSubmit={handleVibeCheck} className="space-y-6">
            <div className="relative group">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="The secret key, fr fr..."
                className={`w-full bg-black/60 border ${error ? 'border-red-500' : 'border-white/10'} group-hover:border-teal-500/50 rounded-2xl px-8 py-5 focus:outline-none focus:border-teal-500 text-center font-black tracking-[0.2em] text-white text-lg transition-all shadow-inner`}
              />
              {error && (
                <div className="absolute -bottom-8 left-0 w-full text-red-500 text-[10px] font-black uppercase tracking-widest animate-bounce">
                  L + Ratio + Wrong Password
                </div>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-white text-black text-xl font-black rounded-full hover:bg-teal-500 hover:text-white transition-all transform active:scale-95 shadow-2xl uppercase tracking-widest flex items-center justify-center gap-3"
            >
              VIBE CHECK
              <Sparkles className="w-6 h-6" />
            </button>
          </form>

          <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2 text-neutral-600">
              <BrainCircuit size={20} />
              <span className="text-[8px] font-black uppercase tracking-widest">Big Brain</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-neutral-600">
              <Rocket size={20} />
              <span className="text-[8px] font-black uppercase tracking-widest">To The Moon</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-neutral-600">
              <ShieldCheck size={20} />
              <span className="text-[8px] font-black uppercase tracking-widest">Aura Protected</span>
            </div>
          </div>

          <div className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.4em]">
            Hint: AI IS THE ____ FR (Use underscores, caps)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gatekeeper;
