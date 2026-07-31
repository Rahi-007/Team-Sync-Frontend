"use client";

import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import { useGetAllProjectsQuery } from "@/service/project.service";
import TableSkeleton from "@/components/layouts/TableSkeleton";
import ProjectTable from "./ProjectTable";

const Page = () => {
  const { data, isLoading } = useGetAllProjectsQuery();

  return (
    <Container>
      <PageHeader
        title="All Projects"
        description="Manage project information, status, and assignments."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Project" }]}
      />
      <div className="p-4">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <ProjectTable data={data ?? []} />
        )}
      </div>
    </Container>
  );
};

export default Page;
