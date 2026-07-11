import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="All Designations"
        description="Manage Designations, permission and user access."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Designation" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
