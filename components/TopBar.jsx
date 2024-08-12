import Head from "next/head";
import Link from "next/link";

import React from "react";

export default function TopBar({  children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Wesbite
            </Link>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>
    </>
  );
}
