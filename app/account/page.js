import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Accounts Page</h1>
      <Link href={"/cabins"}>Cabins</Link>
    </div>
  );
}
