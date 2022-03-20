// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      token: string;
    }
  | {
      message: string;
    };

const getToken = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: process.env.STRAPI_USER,
        password: process.env.STRAPI_PASSWORD,
      }),
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json.jwt as string;
  }
  throw new Error(
    `Error fetchin JWT, ${response.status} | ${response.statusText}`
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // const token = await getToken();
    res.status(200).json({ token: process.env.STRAPI_API_TOKEN! });
  } else {
    res.status(404).json({ message: "bad request" });
  }
}
