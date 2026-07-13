import ComingSoonCard from "@/components/layouts/ComingSoon";
import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="All Teams"
        description="Manage team members, leaders, and assignments."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Team" }]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  );
};

export default page;
