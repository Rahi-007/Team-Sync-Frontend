import ComingSoonCard from "@/components/layouts/ComingSoon"
import Container from "@/components/layouts/Container"
import PageHeader from "@/components/layouts/PageHeader"

const page = () => {
  return (
    <Container>
      <PageHeader
        title="Add New Designation"
        description="Create a new designation and assign it to users."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Designation", href: "/designation" },
          { label: "Add Designation" }
        ]}
      />
      <div className="p-6">
        <ComingSoonCard />
      </div>
    </Container>
  )
}

export default page
