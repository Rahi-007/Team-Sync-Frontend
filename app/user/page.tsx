import ComingSoonCard from "@/components/layouts/ComingSoon";
import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="All Users"
        description="Manage user accounts, roles, and permissions."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "User" }]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  );
};

export default page;
