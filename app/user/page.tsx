"use client";

import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import { useGetAllUsersQuery } from "@/service/user.service";
import UserTableSkeleton from "@/components/layouts/TableSkeleton";
import UserTable from "./UserTable";

const Page = () => {
  const { data, isLoading } = useGetAllUsersQuery();

  return (
    <Container>
      <PageHeader
        title="All Users"
        description="Manage user accounts, roles, and permissions."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "User" }]}
      />
      <div className="p-4">
        {isLoading ? (
          <UserTableSkeleton />
        ) : (
          <UserTable data={data ?? []} />
        )}
      </div>
    </Container>
  );
};

export default Page;