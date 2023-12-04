import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const PATCH = async (req, context) => {
  try {
    const { params } = context;
    const body = await req.json();
    const newTodo = await prisma.todo.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
        priority: body.priority,
        user_id: body.user_id,
      },
    });
    return NextResponse.json(
      { message: 'Updated todo success', data: newTodo },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'PATCH todo failed', error: error },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, context) => {
  try {
    const { params } = context;
    const todo = await prisma.todo.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'DELETE todo failed', error: error },
      { status: 500 }
    );
  }
};

export const GET = async (req, context) => {
  try {
    const { params } = context;
    const todo = await prisma.todo.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      {
        message: 'Get Todo success',
        data: todo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET Todo failed', error: error },
      { status: 500 }
    );
  }
};
