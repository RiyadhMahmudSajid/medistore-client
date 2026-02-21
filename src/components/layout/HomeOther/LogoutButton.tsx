"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh(); 
          router.push("/login");
        },
      },
    });
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Sign Out
    </button>
  );
}