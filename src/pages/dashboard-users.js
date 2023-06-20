import Users from "@/components/DashboardUsers";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import DashboardNav from "@/components/DashboardNav";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen text-black bg-black/50">
        <DashboardNav />

        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Users
            </h1>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Users />
          </div>
        </main>
      </div>
    </>
  );
}
