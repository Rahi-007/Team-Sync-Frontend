"use client";

import { useSelectClientsQuery } from "@/service/client.service";
import { Control, FieldValues, Path } from "react-hook-form";
import GSelect from "../generic/GSelect";

type ClientFormProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
};

function ClientSelect<T extends FieldValues>({
    control,
    name,
    label = "Client",
    placeholder = "Select Client",
    disabled,
    required,
}: ClientFormProps<T>) {
    const { data: clients = [], isLoading } = useSelectClientsQuery();

    const options = clients.map((team) => ({
        label: `${team.name} ~ ${team.phone}`,
        value: team.id,
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

const Client = {
    Form: ClientSelect,
};

export default Client;