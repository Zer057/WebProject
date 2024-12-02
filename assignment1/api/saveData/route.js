import { getCustomSession } from '../sessionCode.js';

export async function GET(req, res) {
  let session = await getCustomSession();

  const role = session.role || 'No role';
  const email = session.email || 'No email';

  console.log("Role:", role);
  console.log("Email:", email);

  return new Response(JSON.stringify({ role, email }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
