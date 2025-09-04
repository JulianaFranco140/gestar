import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// POST: Actualizar semana para usuario y su pareja
export async function POST(request) {
  try {
    const { userId, fechaUltimaMenstruacion } = await request.json();
    if (!userId || !fechaUltimaMenstruacion) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }
    // Buscar usuario y su pareja
    const [user] = await sql`SELECT * FROM users WHERE id = ${userId}`;
    if (!user) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    let parejaId = user.id_pareja;
    await sql`UPDATE users SET semana = ${fechaUltimaMenstruacion} WHERE id = ${userId}`;
    if (parejaId) {
      await sql`UPDATE users SET semana = ${fechaUltimaMenstruacion} WHERE id = ${parejaId}`;
    }
    return NextResponse.json({ success: true, semana: fechaUltimaMenstruacion });
  } catch (e) {
    return NextResponse.json({ error: 'Error en el servidor', details: e.message }, { status: 500 });
  }
}