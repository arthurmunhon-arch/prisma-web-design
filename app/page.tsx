'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      service: formData.get('service'),
      description: formData.get('description'),
    };

    try {
      const response = await fetch('/api/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato.');
        e.currentTarget.reset();
      } else {
        alert(`Erro: ${result.error || 'Não foi possível enviar.'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-blue-600 selection:text-white">
      
      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <span className="text-xl font-bold tracking-wider text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">PRISMA</span>
            <span className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold px-2.5 py-0.5 bg-blue-50 rounded-md border border-blue-200 shadow-sm">Web Design</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
            <a href="#servicos" className="hover:text-blue-600 transition-colors duration-200">Serviços</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors duration-200">Portfólio</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors duration-200">Sobre</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/admin/orcamentos" className="text-xs uppercase tracking-wider font-medium text-zinc-600 hover:text-blue-600 transition-colors duration-200 hidden sm:block">
              Área do Cliente
            </Link>
            <a href="#orcamento" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 hover:-translate-y-0.5 active:translate-y-0">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-[#FAFAFA] to-[#FAFAFA] pointer-events-none animate-pulse duration-[4000ms]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-blue-600 mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>Engenharia de Software & Design Exclusivo</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Transformamos visões em <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-blue-600">experiências digitais de elite.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Desenvolvimento web de alto desempenho, arquitetura robusta e estética sofisticada para marcas que exigem excelência técnica real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#orcamento" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
              Iniciar Projeto
            </a>
            <a href="#servicos" className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm hover:-translate-y-1">
              Conhecer Soluções
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">Ecossistema PRISMA</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Soluções Especializadas</h3>
            <p className="text-zinc-600 text-sm">Arquiteturas digitais construídas sob medida com foco absoluto em conversão e performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sites Institucionais", desc: "Plataformas corporativas sofisticadas com foco em autoridade de marca e performance extrema." },
              { title: "Lojas Virtuais & E-commerce", desc: "Ecossistemas de vendas seguros, altamente otimizados e integrados a sistemas logísticos." },
              { title: "Sistemas & Web Apps", desc: "Aplicações web customizadas em Next.js e PostgreSQL para fluxos operacionais complexos." },
            ].map((s, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-zinc-200 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 font-mono text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  0{i+1}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{s.title}</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO / PROJETOS DE DESTAQUE (Atualizado com 4 projetos) */}
      <section id="portfolio" className="py-24 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">Portfólio de Excelência</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Projetos em Destaque</h3>
            <p className="text-zinc-600 text-sm">Conheça alguns dos ecossistemas digitais desenvolvidos com alto rigor estético e técnico.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ágapes Clothes — E-commerce de Vestuário",
                category: "Plataforma de E-commerce / SSR",
                desc: "Ecossistema autônomo estruturado via Server Side Rendering, integrando gestão de estoque, vitrine de produtos de alta conversão e design minimalista.",
                tag: "Next.js & Supabase"
              },
              {
                title: "Portal Corporativo & Gestão de Leads",
                category: "Sistema Web / Arquitetura Customizada",
                desc: "Plataforma institucional de alto desempenho desenvolvida para consolidação de autoridade de marca, combinando painel administrativo seguro e UX refinada.",
                tag: "TypeScript & PostgreSQL"
              },
              {
                title: "Lumina Studio — Dashboard de Moda",
                category: "SaaS & Gestão Visual",
                desc: "Painel interativo para padronização visual e gestão de ativos digitais voltados para catálogos profissionais de moda e e-commerce.",
                tag: "Tailwind CSS & Supabase"
              },
              {
                title: "Nexus Smart Safe — IoT Interface",
                category: "Aplicação Embarcada & Web",
                desc: "Interface de controlo para cofre eletrônico inteligente integrado a microcontroladores, permitindo gestão de trancas e alarmes sonoros em tempo real.",
                tag: "C++ & Next.js"
              }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-blue-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-md font-semibold uppercase tracking-wider group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {p.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{p.tag}</span>
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{p.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-medium text-zinc-500">
                  <span>Status: Entregue & Operacional</span>
                  <span className="text-blue-600 font-semibold">PRISMA Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A PRISMA */}
      <section id="sobre" className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">Nossa Metodologia</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">Engenharia de precisão e design focado em conversão.</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                Na <strong className="text-zinc-900">PRISMA</strong>, entendemos que um site de alto padrão não deve apenas impressionar visualmente — ele precisa entregar estabilidade, carregamento instantâneo e uma arquitetura robusta pronta para escalar.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                Utilizamos as tecnologias mais modernas do mercado (Next.js, TypeScript e bancos de dados relacionais otimizados) para garantir que cada projeto seja um ativo digital definitivo para o seu negócio.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FAFAFA] border border-zinc-200 p-4 rounded-xl hover:border-blue-400 transition-colors duration-300">
                  <p className="text-2xl font-bold text-zinc-900 mb-1">100%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Customizado</p>
                </div>
                <div className="bg-[#FAFAFA] border border-zinc-200 p-4 rounded-xl hover:border-blue-400 transition-colors duration-300">
                  <p className="text-2xl font-bold text-blue-600 mb-1">Alta</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Performance & SEO</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] border border-zinc-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Pilares de Atuação PRISMA</h4>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong className="text-zinc-900">Estética Sofisticada:</strong> Paletas light, espaçamentos limpos e tipografia de alto impacto.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong className="text-zinc-900">Segurança de Dados:</strong> Backend integrado e isolamento robusto de áreas restritas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span><strong className="text-zinc-900">Suporte Dedicado:</strong> Canais diretos de acompanhamento durante todas as fases do projeto.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE ORÇAMENTO */}
      <section id="orcamento" className="py-32 bg-[#FAFAFA] border-b border-zinc-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="bg-white border border-zinc-200/90 rounded-3xl p-10 md:p-16 shadow-2xl shadow-zinc-200/50">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Inicie Seu Projeto
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mt-4 mb-4">
                Solicite seu Orçamento
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-light">
                Preencha os detalhes abaixo. Nossa equipe técnica analisará sua demanda para uma proposta sob medida.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">Nome Completo *</label>
                  <input name="name" type="text" required className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300" placeholder="Como devemos te chamar?" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">E-mail Profissional *</label>
                  <input name="email" type="email" required className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">WhatsApp / Telefone *</label>
                  <input name="whatsapp" type="text" required className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">Serviço Desejado *</label>
                  <select name="service" required className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 cursor-pointer">
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Loja Virtual / E-commerce">Loja Virtual / E-commerce</option>
                    <option value="Sistema / Web App Personalizado">Sistema / Web App Personalizado</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">Descrição Detalhada do Projeto *</label>
                <textarea name="description" rows={5} required className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 text-sm focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 resize-none" placeholder="Conte-nos sobre os objetivos, escopo e prazos esperados..."></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50">
                {loading ? 'Processando Solicitação...' : 'Enviar Solicitação de Orçamento'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-white py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© 2026 PRISMA — Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-mono text-blue-600">prismadev.webdesign@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}