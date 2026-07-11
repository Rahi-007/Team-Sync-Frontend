"use client";

import ComingSoonCard from "@/components/layouts/ComingSoon";
import Container from "@/components/layouts/Container";
import AccessForm from "@/components/layouts/LoginForm";
import { useState } from "react";

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  if (showHome) {
    return <AccessForm />;
  } else {
    return (
      <Container>
        <div className="p-6">
          <ComingSoonCard />
        </div>
      </Container>
    );
  }
}
