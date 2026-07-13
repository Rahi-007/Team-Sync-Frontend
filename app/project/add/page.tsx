import Container from "@/components/layouts/Container";
import PageHeader from "@/components/layouts/PageHeader";
import ProjectForm from "./ProjectForm";

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Project"
        description="Create a project, assign members, and start tracking progress."
        breadcrumbs={[{ label: "Dashboard", href: "/" }, { label: "Project", href: "/project" }, { label: "Add Project" }]}
      />

      <div className="w-full mx-auto p-6">
        <ProjectForm />
      </div>
    </Container>
  );
};

export default page;
