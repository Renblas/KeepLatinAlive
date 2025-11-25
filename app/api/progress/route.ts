import { auth } from '@clerk/nextjs/server';
import { connectToDatabase } from '../../../src/lib/mongodb';
import UserProgress from '../../../src/models/UserProgress';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectToDatabase();

  const progress = await UserProgress.findOneAndUpdate(
    { clerkId: userId },
    { 
      $setOnInsert: { 
        completedLessons: [], 
        quizScores: [] 
      } 
    },
    { upsert: true, new: true }  // creates if missing, returns the doc
  );

  return NextResponse.json(progress);
}

export async function POST(request: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  await connectToDatabase();

  const updateData = {
    ...body,
    completedLessons: body.completedLessons || [],
    quizScores: body.quizScores || [],
    updatedAt: new Date(),
  };

  const progress = await UserProgress.findOneAndUpdate(
    { clerkId: userId },
    updateData,
    { upsert: true, new: true }
  );

  return NextResponse.json(progress);
}