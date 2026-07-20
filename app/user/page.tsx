"use client";

import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import UserTable from "./UserTable";

const Page = () => {
  return (
    <Container>
      <PageHeader
        title="All Users"
        description="Manage user accounts, roles, and permissions."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "User" }]}
      />
      <div className="p-4">
        <UserTable />
      </div>
    </Container>
  );
};

export default Page;
