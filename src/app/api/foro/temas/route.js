import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';


const sql = neon(process.env.DATABASE_URL);

// Devuelve la lista de temas del foro ordenados por fecha descendente, mostrando el nombre del autor
export async function GET() {
  try {
    const temas = await sql`
      SELECT t.id, t.titulo, t.slug, t.created_at, t.likes, u.nombres as autor
      FROM foro_temas t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC
      LIMIT 30;
    `;
    // El resultado es un array directo
    const temasFormateados = temas.map(row => ({
      id: row.id,
      titulo: row.titulo,
      slug: row.slug,
      autor: row.autor,
      fecha: row.created_at ? row.created_at.toISOString().slice(0, 10) : '',
      likes: row.likes ?? 0,
    }));
    return NextResponse.json({ temas: temasFormateados });
  } catch (error) {
    console.error('Error en /api/foro/temas:', error);
    return NextResponse.json({ error: 'Error al obtener los temas', details: error.message, stack: error.stack }, { status: 500 });
  }
}
