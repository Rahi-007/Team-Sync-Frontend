"use client";

import { useParams } from "next/navigation";
import { useGetUserByIdQuery } from "@/service/user.service";
import FormSkeleton from "@/components/layouts/FormSkeleton";
import PageHeader from "@/components/layouts/PageHeader";
import Container from "@/components/layouts/Container";
import UserForm from "../add/UserForm";

const Page = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: user, isLoading } = useGetUserByIdQuery(userId);

  return (
    <Container>
      <PageHeader
        title="Edit User"
        description="Update user information and permissions."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "User", href: "/user" },
          { label: "Edit User" },
        ]}
      />

      <div className="w-full mx-auto p-4">
        {isLoading ? (
          <FormSkeleton field={9} />
        ) : (
          <UserForm defaultValues={user} title={`${user?.firstName} ${user?.lastName ?? ""}`} />
        )}
      </div>
    </Container>
  );
};

export default Page;