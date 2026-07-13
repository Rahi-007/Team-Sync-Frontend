"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BusinessUnit, ProjectStatus, SubType, WorkType } from "@/config/enum";
import { useAddUserMutation } from "@/service/user.service";
import { Button } from "@/components/ui/button";
import { IProject } from "@/interface/project";
import GInput from "@/components/generic/GInput";
import GSelect from "@/components/generic/GSelect";
import { enumToOptions } from "@/lib/utils";
import { clientOptions, userOptions } from "@/config/demo";
import GDatePicker from "@/components/generic/GDatePicker";
import GAmount from "@/components/generic/GAmount";

const ProjectSchema = z.object({
  name: z.string({ message: "Project name is Required" }),
  businessUnit: z.nativeEnum(BusinessUnit, {
    message: "Business Unit is Required",
  }),
  client: z.string({ message: "Client is Required" }),
  briefCode: z.string({ message: "brief code is Required" }),
  workType: z.nativeEnum(WorkType, {
    message: "Work type Unit is Required",
  }),
  subType: z.nativeEnum(SubType, {
    message: "Sub type is Required",
  }),
  quantity: z.number({ message: "Enter the quantity" }),
  submitDate: z.date({ message: "Enter the submit date" }),
  submitCode: z.string({ message: "Enter the submit code" }),
  status: z.nativeEnum(ProjectStatus, {
    message: "Status is Required",
  }),
  assign: z.string({ message: "Assign a user" }),
  link: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof ProjectSchema>;

interface Props {
  defaultValues?: IProject;
}

const ProjectForm = (props: Props) => {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      name: props.defaultValues?.name,
      businessUnit: props.defaultValues?.businessUnit,
      client: props.defaultValues?.client?.name,
      briefCode: props.defaultValues?.briefCode,
      workType: props.defaultValues?.workType,
      subType: props.defaultValues?.subType,
      quantity: props.defaultValues?.quantity,
      submitDate: props.defaultValues?.submitDate,
      submitCode: props.defaultValues?.submitCode,
      status: props.defaultValues?.status,
      assign: props.defaultValues?.assign?.name,
      link: props.defaultValues?.link || "",
    },
  });

  const onSubmit = async (values: ProjectFormValues) => {
    try {
      console.error(values);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold">Project Form</h2>
        {/* <p className="mt-1 text-sm text-muted-foreground">
                    Create a new user account for your organization.
                </p> */}
      </div>

      <div className="grid gap-y-1 gap-x-4 px-8 py-6 md:grid-cols-2 xl:grid-cols-3">
        <GInput.Form name="name" label="Project Name" control={form.control} placeholder="Alpha one" required />

        <GSelect.Form
          required
          control={form.control}
          name="businessUnit"
          label="Business Unit"
          placeholder="Select Business Unit"
          options={enumToOptions(BusinessUnit)}
        />

        <GSelect.Form control={form.control} name="client" label="Client" options={clientOptions} required />

        <GInput.Form name="briefCode" label="Brief Code" control={form.control} placeholder="Brief Code" required />

        <GSelect.Form control={form.control} name="workType" label="Work Type" options={enumToOptions(WorkType)} required />

        <GSelect.Form control={form.control} name="subType" label="Sub Type" options={enumToOptions(SubType)} required />

        <GAmount.Form name="quantity" label="Quantity" type="number" control={form.control} placeholder="Quantity" required />

        <GDatePicker.Form name="submitDate" label="Submit Date" control={form.control} placeholder="Submit Date" required />

        <GInput.Form name="submitCode" label="Submit Code" control={form.control} placeholder="Submit Code" required />

        <GSelect.Form control={form.control} name="status" label="Status" options={enumToOptions(ProjectStatus)} required />

        <GSelect.Form control={form.control} name="assign" label="Assign User" options={userOptions} required />

        <GInput.Form name="link" label="Link" control={form.control} placeholder="Link" />
      </div>

      <div className="flex justify-end rounded-b-2xl gap-3 border-t bg-slate-50 px-8 py-5">
        <Button variant="outline" type="reset" onClick={() => form.reset()}>
          Cancel
        </Button>

        <Button className="min-w-36" disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Creating..." : "Create Project"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
