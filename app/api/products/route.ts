import { NextResponse } from "next/server";
import { Product } from "@/core/models/Product";
import connectDB from "@/core/connect";


/**
 * GET /api/products
 * Sare products laane ke liye
 */
export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error 👉", error); 
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/products
 * Naya product add karne ke liye
 */
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const product = await Product.create(body);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create product" },
      { status: 500 }
    );
  }
}
