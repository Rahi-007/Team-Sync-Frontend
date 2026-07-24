import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import ClientForm from "./ClientForm";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Client"
        description="Create a new client profile and add contact information."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Client", href: "/client" }, { label: "Add Client" }]}
      />

      <div className="w-full mx-auto p-4">
        <ClientForm />
      </div>
    </Container>
  );
};

export default page;
