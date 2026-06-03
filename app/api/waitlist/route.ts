import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Submission = { email: string; createdAt: string };

async function appendToLocalFile(submission: Submission) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "waitlist.json");

  await fs.mkdir(dir, { recursive: true });

  let existing: Submission[] = [];
  try {
    const raw = await fs.readFile(file, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    // File missing or unreadable — start fresh
  }

  existing.push(submission);
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : "";

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const submission: Submission = { email, createdAt: new Date().toISOString() };

  console.log("[waitlist] new submission", submission);

  if (process.env.NODE_ENV !== "production") {
    try {
      await appendToLocalFile(submission);
    } catch (err) {
      console.warn("[waitlist] failed to persist locally", err);
    }
  }

  return NextResponse.json({ ok: true });
}
