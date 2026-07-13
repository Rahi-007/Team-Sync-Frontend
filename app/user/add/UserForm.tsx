"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender } from "@/config/enum";
import { useAddUserMutation } from "@/service/user.service";
import { Button } from "@/components/ui/button";
import GInput from "@/components/generic/GInput";
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
  rfId: z.number().optional(),
  gender: z.nativeEnum(Gender).default(Gender.Male).optional(),
  dateOfBirth: z.date().optional(),
  role: z.number({ message: "Role is Required" }),
  avatar: z.string().optional(),
  address: z.string().optional(),
});

type UserFormValues = z.infer<typeof UserSchema>;

const UserForm = () => {
  const [addUser] = useAddUserMutation();
  const [showPass, setShowPass] = useState(false);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      rfId: undefined,
      gender: Gender.Male,
      dateOfBirth: undefined,
      role: undefined,
      avatar: "",
      address: "",
    },
  });

  const onSubmit = async (values: UserFormValues) => {
    try {
      const res = await addUser(values).unwrap();
      const {} = res;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold">User Form</h2>
        {/* <p className="mt-1 text-sm text-muted-foreground">
                    Create a new user account for your organization.
                </p> */}
      </div>

      <div className="grid gap-5 p-8 md:grid-cols-2 xl:grid-cols-3">
        <GInput.Form name="firstName" label="First Name" control={form.control} placeholder="John" />

        <GInput.Form name="lastName" label="Last Name" control={form.control} placeholder="Doe" />

        <GInput.Form type={showPass ? "text" : "password"} name="password" label="Password" control={form.control} placeholder="••••••••" />

        <GInput.Form name="phone" label="Phone Number" control={form.control} placeholder="017xxxxxxxx" />

        <GInput.Form name="rfId" label="RFID" control={form.control} placeholder="Employee Id" />

        <GInput.Form name="address" label="Address" control={form.control} placeholder="Present Address" />

        <GSelect.Form
          control={form.control}
          name="gender"
          label="Gender"
          placeholder="Select Gender"
          options={[
            { label: "Male", value: Gender.Male },
            { label: "Female", value: Gender.Female },
          ]}
        />
        <GSelect.Form
          control={form.control}
          name="role"
          label="Designation"
          placeholder="Select Designation"
          options={[
            { label: "Admin", value: "Admin" },
            { label: "Designer", value: "Designer" },
            { label: "User", value: "user" },
          ]}
        />

        {/* <GDatePicker.Form
                    control={form.control}
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="Select date"
                /> */}
      </div>

      <div className="flex justify-end rounded-b-2xl gap-3 border-t bg-slate-50 px-8 py-5">
        <Button variant="outline" type="button">
          Cancel
        </Button>

        <Button className="min-w-36" disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Creating..." : "Create User"}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
