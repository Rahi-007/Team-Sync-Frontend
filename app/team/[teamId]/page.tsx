"use client";

import TeamForm from "../add/TeamForm";
import { useParams } from "next/navigation";
import { useGetTeamByIdQuery } from "@/service/team.service";
import FormSkeleton from "@/components/layouts/FormSkeleton";
import PageHeader from "@/components/layouts/PageHeader";
import Container from "@/components/layouts/Container";

const Page = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const { data: user, isLoading } = useGetTeamByIdQuery(Number(teamId));

  return (
    <Container>
      <PageHeader
        title="Edit Team"
        description="Update Team members to collaborate effectively."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Team", href: "/team" },
          { label: "Edit Team" },
        ]}
      />

      <div className="w-full mx-auto p-4">
        {isLoading ? (
          <FormSkeleton field={3} />
        ) : (
          <TeamForm defaultValues={user} title={user?.name} />
        )}
      </div>
    </Container>
  );
};

export default Page;