import Link from "next/link";
import React from "react";

const NaveBar = () => {
  return (


    <nav className='nav'>
        <Link className="p-4" href="/">Home</Link>
        <Link className="p-4" href="/pages/about">About</Link>
        <Link className="p-4" href="/pages/contact">Contact</Link>
    </nav>
  );
};

export default NaveBar;
