import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import type { Session } from 'next-auth';

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  const { query, mutation, variables } = await req.json();

  if (!session?.accessToken) {
    return Response.json(
      {
        error: 'Unauthorized',
      },
      { status: 401 }
    );
  }

  if (query && mutation) {
    return Response.json(
      {
        error: 'Only one of query or mutation can be specified',
      },
      { status: 400 }
    );
  }

  const graphqlOperation = query ? { query: query } : { mutation: mutation };

  const response = await fetch(String(process.env.GRAPHQL_ENDPOINT), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({ ...graphqlOperation, variables }),
  });

  const json = await response.json();
  return Response.json(json);
}
