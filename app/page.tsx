import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default function Home() {
  getServerSession(authOptions);
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
