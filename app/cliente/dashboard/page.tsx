'use client';

import Link from 'next/link';

export default function ClientDashboard() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* CABEÇALHO DO PAINEL */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Painel do Cliente</h1>
            <p className="text-xs text-zinc-500 mt-1">Ambiente seguro de acompanhamento de projetos PRISMA.</p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-zinc-700 hover:text-zinc-900 border border-zinc-200 px-4 py-2.5 rounded-xl bg-white shadow-sm transition-all">
            Voltar ao Início
          </Link>
        </header>

        {/* STATUS DO PROJETO ATUAL */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-block text-[10px] bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider mb-3">
                Em Desenvolvimento
              </span>
              <h2 className="text-xl font-bold text-zinc-900">Desenvolvimento de Ecossistema Web Customizado</h2>
              <p className="text-xs text-zinc-500 mt-1 font-mono">ID: #PRISMA-2026-01</p>
            </div>
            <div className="text-left md:text-right bg-[#FAFAFA] md:bg-transparent p-4 md:p-0 rounded-xl border md:border-0 border-zinc-100">
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block">Prazo Estimado</span>
              <p className="text-lg font-bold text-zinc-900">15 Dias Úteis</p>
            </div>
          </div>

          {/* BARRA DE PROGRESSO */}
          <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden mb-3">
            <div className="w-[45%] bg-blue-600 h-full rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs font-medium text-zinc-500">
            <span>Fase: Arquitetura & UI/UX</span>
            <span className="text-zinc-900 font-semibold">45% Concluído</span>
          </div>
        </section>

        {/* SUPORTE E CONTATO DIRETO */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-2">Canais de Atendimento Oficial</h3>
          <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
            Nossa equipe técnica permanece à disposição para alinhamentos e dúvidas por meio do e-mail dedicado.
          </p>
          <div className="inline-block bg-[#FAFAFA] border border-zinc-200 px-4 py-3 rounded-xl font-mono text-xs text-blue-600 font-medium">
            prismadev.webdesign@gmail.com
          </div>
        </section>

      </div>
    </main>
  );
}