import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="All Clients"
        description="Manage client information and contact details."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Client" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
