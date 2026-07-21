export default function UserTableSkeleton() {
  return (
    <div className="h-135 w-full rounded-md border p-4 shadow-sm animate-pulse bg-background space-y-4">

      <div className="flex items-center justify-between pb-2 border-b">
        <div className="h-8 w-48 bg-muted rounded-md" />
        <div className="h-8 w-24 bg-muted rounded-md" />
      </div>

      <div className="space-y-3 pt-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="h-6 w-12 bg-muted rounded" />
            <div className="h-6 flex-1 bg-muted rounded" />
            <div className="h-6 flex-1 bg-muted rounded" />
            <div className="h-6 flex-1 bg-muted rounded" />
            <div className="h-6 w-20 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}