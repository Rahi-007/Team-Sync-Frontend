import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Client"
        description="Create a new client profile and add contact information."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Client", href: "/client" },
          { label: "Add Client" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
