import { ChevronRight, House } from "lucide-react";
import UserForm from "./UserForm";

const Page = () => {
  return (
    <div className="min-h-[92.5vh] bg-[#F6FBFA]">

      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 py-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <House className="h-4 w-4" />
            <span>Dashboard</span>
            <ChevronRight className="h-4 w-4" />
            <span>User</span>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-[#449690]">
              Add User
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Add New User
              </h1>
              <p className="mt-2 text-slate-500">
                Create a new employee account and assign permissions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-6">
        <UserForm />
      </div>
    </div>
  );
};

export default Page;