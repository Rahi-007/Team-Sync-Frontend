"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddUserMutation } from "@/service/user.service";
import type { IUser } from "@/interface/user.interface";
import { Button } from "@/components/ui/button";
import { enumToOptions } from "@/lib/utils";
import { Gender } from "@/config/enum";
import GInput from "@/components/generic/GInput";
import GDatePicker from "@/components/generic/GDatePicker";
import GSelect from "@/components/generic/GSelect";

const UserSchema = z.object({
  firstName: z.string().min(3, { message: "First name must be at least 3 characters" }),
  lastName: z.string().optional(),
  phone: z
    .string()
    .trim()
    .regex(/^01[3-9]\d{8}$/, {
      message: "Enter a valid Bangladeshi phone number",
    }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rfId: z.string().optional(),
  gender: z.number().optional(),
  dateOfBirth: z.date().optional(),
  // role: z.number({ message: "Role is Required" }),
  // avatar: z.string().optional(),
  address: z.string().optional(),
});

type UserFormValues = z.infer<typeof UserSchema>;

interface IProps {
  defaultValues?: IUser;
}

const UserForm = (props: IProps) => {
  const [addUser] = useAddUserMutation();
  const [showPass, setShowPass] = useState(false);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      firstName: props.defaultValues?.firstName,
      lastName: props.defaultValues?.lastName || "",
      phone: props.defaultValues?.phone,
      password: "",
      rfId: props.defaultValues?.rfId || "",
      gender: props.defaultValues?.gender,
      dateOfBirth: props.defaultValues?.dateOfBirth || undefined,
      // role: undefined,
      // avatar: "",
      address: props.defaultValues?.address || "",
    },
  });

  const onSubmit = async (values: UserFormValues) => {
    try {
      const res = await addUser(values).unwrap();
      console.error(res);


    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold">User Form</h2>
      </div>

      <div className="grid gap-y-1 gap-x-4 px-8 py-6 md:grid-cols-2 xl:grid-cols-3">
        <GInput.Form name="firstName" label="First Name" control={form.control} placeholder="John" />
        <GInput.Form name="lastName" label="Last Name" control={form.control} placeholder="Doe" />
        <GInput.Form name="rfId" label="RFID" control={form.control} placeholder="Employee Id" />

        <GInput.Form name="phone" label="Phone Number" control={form.control} placeholder="017xxxxxxxx" />
        <GInput.Form type={showPass ? "text" : "password"} name="password" label="Password" control={form.control} placeholder="••••••••" />
        <GDatePicker.Form control={form.control} name="dateOfBirth" label="Date of Birth" placeholder="Select date" />

        <GSelect.Form
          control={form.control}
          name="gender"
          label="Gender"
          placeholder="Select Gender"
          options={enumToOptions(Gender)}
        />
        <div className="xl:col-span-2">
          <GInput.Form name="address" label="Address" control={form.control} placeholder="Present Address" />
        </div>
      </div>

      <div className="flex justify-end rounded-b-2xl gap-3 border-t bg-slate-50 px-8 py-5">
        <Button variant="outline" type="reset" onClick={() => form.reset()}>
          Cancel
        </Button>

        <Button className="min-w-36 bg-[#449690] hover:bg-[#449690]/80" disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Creating..." : "Create User"}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
