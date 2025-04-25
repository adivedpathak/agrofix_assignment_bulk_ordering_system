// src/app/api/items/route.ts
import { db } from './../../db';
import { items } from './../../db/schema';
import { NextResponse } from 'next/server';


export async function GET() {
  const result = await db.select().from(items
);
  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const body = await req.json();
  const result = await db.insert(items).values({
    name: body.name,
    description: body.description,
  });
  return NextResponse.json(result);
}
