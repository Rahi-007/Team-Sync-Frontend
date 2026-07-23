"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useAddTeamMutation } from "@/service/team.service";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { ITeam } from "@/interface/team.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import GInput from "@/components/generic/GInput";
import User from "@/components/futures/User";
import toast from "react-hot-toast";

const TeamSchema = z.object({
  name: z.string().min(3, { message: "Team name must be at least 3 characters" }),
  narration: z.string().optional(),
  teamLeaderId: z.string({ message: "Team leader is required" }),
});

type TeamFormValues = z.infer<typeof TeamSchema>;

interface IProps {
  defaultValues?: ITeam;
}

const TeamForm = (props: IProps) => {
  const [addTeam] = useAddTeamMutation();

  const form = useForm<TeamFormValues>({
    resolver: zodResolver(TeamSchema),
    defaultValues: {
      name: props.defaultValues?.name,
      narration: props.defaultValues?.narration || "",
      teamLeaderId: props.defaultValues?.teamLeader?.id,
    },
  });

  const onSubmit = async (values: TeamFormValues) => {
    try {
      await addTeam(values).unwrap();
      form.reset();
      toast.success("Team added successful");
    } catch (err) {
      const error = err as FetchBaseQueryError & {
        data?: { message?: string };
      };
      toast.error(error.data?.message ?? "Something went wrong");
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold">Team Form</h2>
      </div>

      <div className="grid gap-y-1 gap-x-4 px-8 py-6 md:grid-cols-2 xl:grid-cols-3">
        <GInput.Form name="name" label="Team Name" control={form.control} placeholder="John Team" required />
        <User.Form control={form.control} name="teamLeaderId" label="Team Leader" required />
        <div className="md:col-span-2 xl:md:col-span-1">
          <GInput.Form name="narration" label="Narration" control={form.control} placeholder="Description" />
        </div>
      </div>

      <div className="flex justify-end rounded-b-2xl gap-3 border-t bg-slate-50 px-8 py-5">
        <Button variant="outline" type="reset" onClick={() => form.reset()}>
          Cancel
        </Button>

        <Button className="min-w-36 bg-[#449690] hover:bg-[#449690]/80" disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Creating..." : "Create Team"}
        </Button>
      </div>
    </form>
  );
};

export default TeamForm;
