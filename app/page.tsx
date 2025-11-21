"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const requestBody = {
      email,
      password,
    };

    console.log(requestBody);
  };

  return (
    <div className="h-screen w-screen bg-[#F1D0DB] flex justify-center items-center">
      <div className="flex flex-col text-black gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outline" className="text-white" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
