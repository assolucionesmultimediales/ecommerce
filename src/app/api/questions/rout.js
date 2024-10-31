import { NextResponse } from 'next/server';
import { getAllQuestionsDB, getOneQuestionDB } from '@/app/actions';

export async function GET() {
  try {
    // Llama a la función para obtener todas las preguntas desde la base de datos
    const { questions } = await getAllQuestionsDB();
    return NextResponse.json({ message: 'Ok', questions });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener preguntas', error: error.message }, { status: 500 });
  }
}

