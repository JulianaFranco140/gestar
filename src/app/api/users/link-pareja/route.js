import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// POST: Vincular dos usuarios como pareja
export async function POST(request) {
  try {
    const { userId, parejaCode } = await request.json();
    if (!userId || !parejaCode) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }
    // Buscar usuario actual y pareja
    const [user] = await sql`SELECT * FROM users WHERE id = ${userId}`;
    const [pareja] = await sql`SELECT * FROM users WHERE id = ${parejaCode}`;
    if (!user || !pareja) {
      return NextResponse.json({ error: 'Usuario o pareja no encontrados' }, { status: 404 });
    }
    if (user.id_pareja || pareja.id_pareja) {
      return NextResponse.json({ error: 'Uno de los usuarios ya tiene pareja vinculada' }, { status: 409 });
    }
    // Validar que los roles sean opuestos
    if (
      (user.rol === 'gestante' && pareja.rol !== 'acompañante') ||
      (user.rol === 'acompañante' && pareja.rol !== 'gestante')
    ) {
      return NextResponse.json({ error: 'Solo puedes vincularte con un usuario del rol opuesto' }, { status: 400 });
    }
    // Si la pareja ya tiene semana, se sincroniza
    let semana = pareja.semana || user.semana || null;
    await sql`UPDATE users SET id_pareja = ${pareja.id}, semana = ${semana} WHERE id = ${user.id}`;
    await sql`UPDATE users SET id_pareja = ${user.id}, semana = ${semana} WHERE id = ${pareja.id}`;
    return NextResponse.json({ success: true, semana });
  } catch (e) {
    return NextResponse.json({ error: 'Error en el servidor', details: e.message }, { status: 500 });
  }
}
