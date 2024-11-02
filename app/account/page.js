import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <h1 className="text-3xl text-accent-500">
          Welcome, {session.user.name.split(" ")[0]}
        </h1>
      ) : (
        <p>Welcome</p>
      )}
    </div>
  );
}
