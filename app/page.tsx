"use client";

import AccessForm from "@/components/layouts/LoginForm";
import { useState } from "react";

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  if (showHome) {
    return <AccessForm />;
  } else {
    return (
      <div className="w-full min-h-[92.4vh] border flex justify-center items-center border-gray-300 bg-[#F5FFFC]">
        To get started, edit the page.tsx file.
      </div>
    );
  }
}
