"use client";

import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import { useGetAllTeamsQuery } from "@/service/team.service";
import UserTableSkeleton from "@/components/layouts/TableSkeleton";
import TeamTable from "./TeamTable";

const Page = () => {
  const { data, isLoading } = useGetAllTeamsQuery();

  return (
    <Container>
      <PageHeader
        title="All Teams"
        description="Manage team members, leaders, and assignments."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Team" }]}
      />

      <div className="p-4">
        {isLoading ? (
          <UserTableSkeleton />
        ) : (
          <TeamTable data={data ?? []} />
        )}
      </div>
    </Container>
  );
};

export default Page;
