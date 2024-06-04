import React from "react";
import NextLink from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Hello, world! 2</h1>
      <NextLink href="/about">About</NextLink>
    </div>
  );
}
