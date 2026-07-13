import { Search } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F5FFFC] overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        {/* Search Animation */}
        <div className="relative h-20 w-52 overflow-hidden rounded-full border border-border bg-muted/30">
          <Search size={42} strokeWidth={2.5} className="absolute top-1/2 text-primary search-loader" />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold">Searching...</h2>
          <p className="text-sm text-muted-foreground">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
