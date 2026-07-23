"use client";

import { useGetAllUsersQuery } from "@/service/user.service";
import { Control, FieldValues, Path } from "react-hook-form";
import GSelect from "../generic/GSelect";

type UserFormProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
};

function UserSelect<T extends FieldValues>({
    control,
    name,
    label = "User",
    placeholder = "Select User",
    disabled,
    required,
}: UserFormProps<T>) {
    const { data: users = [], isLoading } = useGetAllUsersQuery();

    const options = users.map((user) => ({
        label: `${user.firstName} ${user.lastName ?? ""}`,
        value: user.id,
    }));

    return (
        <GSelect.Form
            control={control}
            name={name}
            label={label}
            placeholder={placeholder}
            options={options}
            disabled={disabled}
            required={required}
            isLoading={isLoading}
        />
    );
}

const User = {
    Form: UserSelect,
};

export default User;