import { getCustomSession } from '/sessionCode.js';

export async function GET(req, res) {
  let session = await getCustomSession();

  if (!session.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: "Authorized" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
