import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("New appointment request received:", body);

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booking registered successfully",
        bookingId: `BHDC-${Math.floor(100000 + Math.random() * 900000)}`,
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
