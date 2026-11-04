import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const { name, email, whatsapp, service, description } = await request.json();

    if (!name || !email || !whatsapp || !service || !description) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('budget_requests')
      .insert([{ name, email, whatsapp, service, description, status: 'PENDENTE' }]);

    if (error) {
      console.error('Erro ao inserir no Supabase:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Orçamento enviado com sucesso!' }, { status: 201 });
  } catch (error) {
    console.error('Erro geral:', error);
    return NextResponse.json({ error: 'Erro ao processar o formulário.' }, { status: 500 });
  }
}