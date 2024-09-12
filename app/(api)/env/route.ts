import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  return NextResponse.json({
    public: process.env.NEXT_PUBLIC_TEST,
    secret: process.env.MY_SECRET,
    date: new Date().toISOString(),
  });
};
