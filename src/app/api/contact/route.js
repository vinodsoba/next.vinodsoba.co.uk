import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
    name,
    email,
    company,
    project,
    budget,
    message,
    token,
    } = body;

    // Verify Turnstile
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const verification = await verify.json();

    if (!verification.success) {
      return Response.json(
        {
          success: false,
          error: "Bot verification failed",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Contact Form:", body);

    if (!email || !email.includes("@")) {
    return Response.json(
        {
        success: false,
        error: "Valid email address required",
        },
        {
        status: 400,
        }
    );
    }

    const { data, error } = await resend.emails.send({
      from: "Vinod Soba <hello@vinodsoba.co.uk>",
      to:  [
            "hello@vinodsoba.co.uk",
            "vinodsoba@gmail.com",
            ],
      reply_to: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project:</strong> ${project}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <hr />

        <p>${message}</p>
        `,
    });

    console.log("Resend Data:", data);
    console.log("Resend Error:", error);

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error("RESEND ERROR:", error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}