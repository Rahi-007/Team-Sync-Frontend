import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="All Projects"
        description="Manage project information, status, and assignments."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Project" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
