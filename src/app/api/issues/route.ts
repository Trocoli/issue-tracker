import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/../prisma/client";

const issueSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is requiredll'),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedObj = issueSchema.safeParse(body);
  if (!validatedObj.success) {
    return NextResponse.json(validatedObj.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issues.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
