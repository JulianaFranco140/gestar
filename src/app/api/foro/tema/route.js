import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// GET /api/foro/tema?slug=primer-tema-ejemplo
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Falta slug' }, { status: 400 });
  try {
    const [tema] = await sql`
      SELECT t.id, t.titulo, t.slug, t.contenido, t.created_at, u.nombres as autor
      FROM foro_temas t
      JOIN users u ON t.user_id = u.id
      WHERE t.slug = ${slug}
      LIMIT 1;
    `;
    if (!tema) return NextResponse.json({ error: 'Tema no encontrado' }, { status: 404 });
    return NextResponse.json({
      tema: {
        id: tema.id,
        titulo: tema.titulo,
        slug: tema.slug,
        autor: tema.autor,
        fecha: tema.created_at ? tema.created_at.toISOString().slice(0, 10) : '',
        contenido: tema.contenido,
      }
    });
  } catch (error) {
    console.error('Error en /api/foro/tema:', error);
    return NextResponse.json({ error: 'Error al obtener el tema', details: error.message }, { status: 500 });
  }
}
