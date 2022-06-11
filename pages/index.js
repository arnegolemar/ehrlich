import Link from "next/link"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {
        !session
          ? <Login />
          : <Dashboard />

      }
    </div>
  )
}
