'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push('/cliente/dashboard');
    } else {
      alert('Por favor, preencha e-mail e senha.');
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex items-center justify-center font-sans p-6">
      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wider text-zinc-900">PRISMA</h1>
          <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest mt-1">Área do Cliente</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">E-mail Profissional</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com" 
              required 
              className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white outline-none transition-all" 
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">Senha de Acesso</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required 
              className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white outline-none transition-all" 
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-600/15 cursor-pointer mt-2">
            Acessar Painel
          </button>
        </form>

        <div className="text-center mt-8 pt-6 border-t border-zinc-100">
          <Link href="/" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            ← Voltar para o site institucional
          </Link>
        </div>

      </div>
    </main>
  );
}