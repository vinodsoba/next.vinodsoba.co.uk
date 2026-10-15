import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { username, password } = body;

        const response = await fetch(
            "https://vinod-soba.co.uk/wp-json/jwt-auth/v1/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok || !data.token) {
            return Response.json(
                { error: "Invalid Username or Password" },
                { status: 401 }
            );
        }

        const cookieStore = await cookies();

        cookieStore.set("auth_token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        return Response.json({
            success: true,
        });
    } catch (error) {
        console.error("Login API error:", error);

        return Response.json(
            { error: "Login service failed" },
            { status: 500 }
        );
    }
}