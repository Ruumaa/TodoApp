import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await prisma.todo.findMany();
    return NextResponse.json(
      { message: 'GET data success', data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET data failed', error },
      { status: 500 }
    );
  }
};
