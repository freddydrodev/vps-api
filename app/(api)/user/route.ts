import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const id = Math.round(Math.random() * 10);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return NextResponse.json({
    name: "this is an update",
    user,
    date: new Date().toISOString(),
  });
};
