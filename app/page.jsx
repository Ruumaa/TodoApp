import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>hello world</h1>
      <button className="btn btn-primary">Test</button>
    </div>
  );
}
