export async function POST(req: Request) {
  const { query, mutation, variables } = await req.json();

  const response = await fetch(String(process.env.GRAPHQL_ENDPOINT), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, mutation, variables }),
  });
  const json = await response.json();
  return Response.json(json);
}
