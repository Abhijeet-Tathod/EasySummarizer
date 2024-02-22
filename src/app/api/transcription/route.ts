import { openai } from "@/lib/openai";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  try {
    const transcript = await openai.audio.transcriptions.create({
      model: "whisper-1",
      file: file,
    });
    
    return NextResponse.json(transcript, { status: 200 });
  } catch (error) {
    console.error("Error transcribing audio:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
