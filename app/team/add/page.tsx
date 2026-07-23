import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import TeamForm from "./TeamForm";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Team"
        description="Create a team and add members to collaborate effectively."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Team", href: "/team" }, { label: "Add Team" }]}
      />

      <div className="w-full mx-auto p-4">
        <TeamForm />
      </div>
    </Container>
  );
};

export default page;
