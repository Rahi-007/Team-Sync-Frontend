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

const ProjectSchema = z.object({
  name: z.string({ message: "Project name is Required" }),
  businessUnit: z.nativeEnum(BusinessUnit),
  client: z.number({ message: "Client is Required" }),
  briefCode: z.string({ message: "brief code is Required" }),
  workType: z.nativeEnum(WorkType),
  subType: z.nativeEnum(SubType),
  quantity: z.number({ message: "Enter the quantity" }),
  submitDate: z.date({ message: "Enter the submit date" }),
  submitCode: z.string({ message: "Enter the submit code" }),
  status: z.nativeEnum(ProjectStatus),
  assign: z.number({ message: "Assign a user" }),
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
      client: props.defaultValues?.client?.id,
      briefCode: props.defaultValues?.briefCode,
      workType: props.defaultValues?.workType,
      subType: props.defaultValues?.subType,
      quantity: props.defaultValues?.quantity,
      submitDate: props.defaultValues?.submitDate,
      submitCode: props.defaultValues?.submitCode,
      status: props.defaultValues?.status,
      assign: props.defaultValues?.assign?.id,
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

      <div className="grid  gap-y-1 gap-x-4 p-8 md:grid-cols-2 xl:grid-cols-3">
        <GInput.Form name="name" label="Project Name" control={form.control} placeholder="Alpha one" />

        <GSelect.Form
          control={form.control}
          name="businessUnit"
          label="Business Unit"
          placeholder="Select Business Unit"
          options={enumToOptions(BusinessUnit)}
        />

        <GSelect.Form control={form.control} name="client" label="Client" options={clientOptions} />

        <GInput.Form name="briefCode" label="Brief Code" control={form.control} placeholder="Brief Code" />

        <GSelect.Form control={form.control} name="workType" label="Work Type" options={enumToOptions(WorkType)} />

        <GSelect.Form control={form.control} name="subType" label="Sub Type" options={enumToOptions(SubType)} />

        <GInput.Form name="quantity" label="Quantity" type="number" control={form.control} placeholder="Quantity" />

        <GInput.Form name="submitCode" label="Submit Code" control={form.control} placeholder="Submit Code" />

        <GSelect.Form control={form.control} name="status" label="Status" options={enumToOptions(ProjectStatus)} />

        <GSelect.Form control={form.control} name="assign" label="Assign User" options={userOptions} />

        <GInput.Form name="link" label="MPRO Link" control={form.control} placeholder="MPRO Link" />
      </div>

      <div className="flex justify-end rounded-b-2xl gap-3 border-t bg-slate-50 px-8 py-5">
        <Button variant="outline" type="button">
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
