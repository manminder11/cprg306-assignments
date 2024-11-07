"use client";
import React, { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignOut = () => {
    firebaseSignOut();
    router.replace("/week-9"); // Redirect to /week-9 after signing out
  };

  // Protected Route logic
  useEffect(() => {
    if (!user) {
      router.replace("/week-9"); // Redirect to /week-9 if not signed in
    }
  }, [user, router]);

  // Render sign-in button if user is not authenticated
  if (!user) {
    return (
      <div>
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      </div>
    );
  }

  // Render the page content for signed-in users
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <p>Welcome, {user.displayName}!</p>

      {/* Link to the Shopping List page, accessible only if signed in */}
      <Link href="/week-9/Shopping-List" legacyBehavior>
        <a>Go to Shopping List</a>
      </Link>
    </div>
  );
}
