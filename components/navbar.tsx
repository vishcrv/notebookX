import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
  } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export async function Navbar() {
    const { isAuthenticated }= getKindeServerSession();
    return (
            <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-extrabold text-3xl ml-7 " style={{ color: 'hsl(var(--c1))' }}>NotebookX</h1>
                </Link>
                <div className="flex items-center gap-x-5">
                    <ThemeToggle/>

                    {(await isAuthenticated()) ? (
                        <LogoutLink>
                            <Button>Sign Out</Button>
                        </LogoutLink>
                     ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Sign In</Button>
                            </LoginLink>

                            <RegisterLink>
                                <Button variant="secondary">Sign Up</Button>
                            </RegisterLink>
                        </div>
                    )}
        </div>
      </div>
    </nav>
  );
}






