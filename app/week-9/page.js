"use client"; 
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
  const router = useRouter();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div>
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          firebaseSignOut();
          window.location.href = "/week-9";
        }}
      >
        Sign Out
      </button>
      <p>Welcome, {user.displayName}!</p>
      <Link href="/week-9/Shopping-List" legacyBehavior>
        <a onClick={(e) => {
          if (!user) {
            e.preventDefault();
            alert("You must be signed in to access the Shopping List.");
          }
        }}>
          Go to Shopping List
        </a>
      </Link>
    </div>
  );
}
