import connectMongoDB from "@/libs/mongodb";
import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function GET(request: NextRequest) {
    await connectMongoDB();
    try {
        const users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error); 
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const { firstName, lastName, email, password} = await request.json();
    if ( !firstName || !lastName || !email || !password) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        points: 0,
        company: "",
    }
    try {
        const existingUser = await User.findOne({ $or: [{ email }] }).lean();
        if (existingUser) {
            return NextResponse.json({ error: 'Username or email already exists' }, { status: 400 });
        }
        const createdUser = await User.create(newUser);
        return NextResponse.json({ message: 'User created successfully', user: createdUser}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}