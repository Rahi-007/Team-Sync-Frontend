import Container from "@/components/layouts/Container";
import UserForm from "./UserForm";
import PageHeader from "@/components/layouts/PageHeader";

const Page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New User"
        description="Create a new user account and assign permissions."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "User", href: "/user" }, { label: "Add User" }]}
      />

      <div className="w-full mx-auto p-4">
        <UserForm />
      </div>
    </Container>
  );
};

export default Page;
