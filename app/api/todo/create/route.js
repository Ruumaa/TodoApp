import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
        priority: body.priority,
        user_id: body.user_id,
      },
    });
    return NextResponse.json(
      { message: 'New todo created', data: todo },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'POST todo failed', error: error },
      { status: 500 }
    );
  }
};
