import { NextResponse } from 'next/server';


export async function GET() {
  try {
    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}

export async function POST() { //TO BE CONTINUED...
  try {
    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}
