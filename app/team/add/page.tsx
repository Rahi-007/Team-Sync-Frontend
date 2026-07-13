import ComingSoonCard from "@/components/layouts/ComingSoon";
import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Team"
        description="Create a team and add members to collaborate effectively."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Team", href: "/team" }, { label: "Add Team" }]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  );
};

export default page;
