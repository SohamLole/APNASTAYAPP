"use client";
import { mockUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!mockUser.isLoggedIn || mockUser.role !== role) {
      router.replace("/auth/login");
    }
  }, []);

  return <>{children}</>;
}
