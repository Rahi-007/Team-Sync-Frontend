import UserForm from "./UserForm";
import PageHeader from "@/components/layouts/PageHeader";

const Page = () => {
  return (
    <div className="min-h-[92.5vh] bg-[#F6FBFA]">

      <PageHeader
        title="Add New User"
        description="Create a new user account and assign permissions."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "User", href: "/dashboard/user" },
          { label: "Add User" },
        ]}
      />

      <div className="mx-auto max-w-7xl p-6">
        <UserForm />
      </div>
    </div>
  );
};

export default Page;