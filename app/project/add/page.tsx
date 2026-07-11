import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Project"
        description="Create a project, assign members, and start tracking progress."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Project", href: "/project" },
          { label: "Add Project" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
