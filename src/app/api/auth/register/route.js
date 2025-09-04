import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombres, correo, password, genero, rol } = body;
    if (!nombres || !correo || !password || !rol || !genero) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }
    const hashedPassword = await hash(password, 10);
    try {
      const result = await sql`
        INSERT INTO users (nombres, correo, password, genero, rol, id_pareja, semana)
        VALUES (${nombres}, ${correo}, ${hashedPassword}, ${genero}, ${rol}, NULL, NULL)
        RETURNING id, nombres, correo, genero, rol, id_pareja, semana, created_at;
      `;
      return NextResponse.json(result[0], { status: 201 });
    } catch (e) {
      if (e.message.includes('duplicate key')) {
        return NextResponse.json({ error: 'El correo ya está registrado' }, { status: 409 });
      }
      return NextResponse.json({ error: 'Error en el servidor', details: e.message }, { status: 500 });
    }
  } catch (e) {
    return NextResponse.json({ error: 'Error en el servidor', details: e.message }, { status: 500 });
  }
}
