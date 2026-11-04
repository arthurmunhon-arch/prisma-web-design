'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BudgetRequest {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  description: string;
  status: string;
  created_at: string;
}

export default function AdminOrcamentos() {
  const [requests, setRequests] = useState<BudgetRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin/orcamentos')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setRequests(data.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Erro de conexão ao carregar orçamentos.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-blue-600 selection:text-white p-6 md:p-12">
      
      {/* HEADER DO PAINEL */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <span className="text-xl font-bold tracking-wider text-zinc-900">PRISMA</span>
            <span className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold px-2 py-0.5 bg-blue-50 rounded border border-blue-200">Admin</span>
          </div>
          <p className="text-sm text-zinc-500 font-light">Gerenciamento centralizado de solicitações de orçamento.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xs uppercase tracking-wider font-semibold text-zinc-600 hover:text-blue-600 transition-colors bg-white border border-zinc-200 px-4 py-2.5 rounded-xl shadow-sm">
            Ver Site
          </Link>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 text-sm text-zinc-500 animate-pulse">Carregando solicitações do banco de dados...</div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-sm">{error}</div>
        ) : requests.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-2xl p-16 text-center shadow-sm">
            <p className="text-zinc-400 text-sm mb-2">Nenhum orçamento recebido até o momento.</p>
            <p className="text-xs text-zinc-500">Assim que um cliente preencher o formulário no site, ele aparecerá aqui instantaneamente.</p>
          </div>
        ) : (
          <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAFAFA] border-b border-zinc-200 text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    <th className="p-4 md:p-6">Cliente</th>
                    <th className="p-4 md:p-6">Contato</th>
                    <th className="p-4 md:p-6">Serviço</th>
                    <th className="p-4 md:p-6">Descrição</th>
                    <th className="p-4 md:p-6">Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
                  {requests.map((req) => (
                    <tr key={req.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 md:p-6 font-medium text-zinc-900">
                        {req.name}
                        <div className="text-xs text-zinc-400 font-normal">{req.email}</div>
                      </td>
                      <td className="p-4 md:p-6 font-mono text-xs text-zinc-600">
                        {req.whatsapp}
                      </td>
                      <td className="p-4 md:p-6">
                        <span className="inline-block bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-1 rounded-md text-xs font-semibold">
                          {req.service}
                        </span>
                      </td>
                      <td className="p-4 md:p-6 max-w-xs truncate text-zinc-600 text-xs leading-relaxed" title={req.description}>
                        {req.description}
                      </td>
                      <td className="p-4 md:p-6 text-xs text-zinc-400 font-mono">
                        {new Date(req.created_at).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}