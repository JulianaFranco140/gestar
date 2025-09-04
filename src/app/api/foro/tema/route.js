export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Falta id' }, { status: 400 });
  try {
    await sql`DELETE FROM foro_temas WHERE id = ${id};`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar tema:', error);
    return NextResponse.json({ error: 'Error al eliminar tema', details: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { titulo, contenido, slug, user_id } = body;
    if (!titulo || !contenido || !slug || !user_id) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }
    const existe = await sql`SELECT id FROM foro_temas WHERE slug = ${slug} LIMIT 1;`;
    if (existe.length > 0) {
      return NextResponse.json({ error: 'Ya existe un tema con ese título' }, { status: 409 });
    }
    const [nuevoTema] = await sql`
      INSERT INTO foro_temas (user_id, titulo, slug, contenido)
      VALUES (${user_id}, ${titulo}, ${slug}, ${contenido})
      RETURNING id, titulo, slug, contenido, created_at;
    `;
    return NextResponse.json({
      tema: {
        id: nuevoTema.id,
        titulo: nuevoTema.titulo,
        slug: nuevoTema.slug,
        contenido: nuevoTema.contenido,
        fecha: nuevoTema.created_at ? nuevoTema.created_at.toISOString().slice(0, 10) : '',
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/foro/tema:', error);
    return NextResponse.json({ error: 'Error al crear el tema', details: error.message }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Falta slug' }, { status: 400 });
  try {
    const [tema] = await sql`
      SELECT t.id, t.titulo, t.slug, t.contenido, t.created_at, t.user_id, u.nombres as autor
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
        user_id: tema.user_id,
        fecha: tema.created_at ? tema.created_at.toISOString().slice(0, 10) : '',
        contenido: tema.contenido,
      }
    });
  } catch (error) {
    console.error('Error en /api/foro/tema:', error);
    return NextResponse.json({ error: 'Error al obtener el tema', details: error.message }, { status: 500 });
  }
}
