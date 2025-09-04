import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export async function POST(request) {
  try {
    const body = await request.json();
    const { correo, password } = body;
    if (!correo || !password) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }
    const users = await sql`SELECT * FROM users WHERE correo = ${correo}`;
    if (users.length === 0) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }
    const user = users[0];
    const valid = await compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }
    const { password: _, ...userData } = user;
    return NextResponse.json(userData, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Error en el servidor', details: e.message }, { status: 500 });
  }
}
