import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tema_id = searchParams.get('tema_id');
  if (!tema_id) return NextResponse.json({ error: 'Falta tema_id' }, { status: 400 });
  try {
    const comentarios = await sql`
      SELECT c.id, c.contenido, c.created_at, c.parent_id, c.nivel, c.user_id, u.nombres as autor
      FROM foro_comentarios c
      JOIN users u ON c.user_id = u.id
      WHERE c.tema_id = ${tema_id}
      ORDER BY c.created_at ASC;
    `;
    return NextResponse.json({ comentarios });
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener comentarios', details: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { tema_id, user_id, contenido, parent_id, nivel } = body;
    if (!tema_id || !user_id || !contenido) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }
    const [nuevoComentario] = await sql`
      INSERT INTO foro_comentarios (tema_id, user_id, contenido, parent_id, nivel)
      VALUES (${tema_id}, ${user_id}, ${contenido}, ${parent_id || null}, ${nivel || 1})
      RETURNING id, contenido, created_at, parent_id, nivel;
    `;
    return NextResponse.json({ comentario: nuevoComentario }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear comentario', details: error.message }, { status: 500 });
  }
}
