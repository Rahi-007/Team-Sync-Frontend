"use client";

import { useSelectTeamsQuery } from "@/service/team.service";
import { Control, FieldValues, Path } from "react-hook-form";
import GSelect from "../generic/GSelect";

type TeamFormProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
};

function TeamSelect<T extends FieldValues>({
    control,
    name,
    label = "Team",
    placeholder = "Select Team",
    disabled,
    required,
}: TeamFormProps<T>) {
    const { data: teams = [], isLoading } = useSelectTeamsQuery();

    const options = teams.map((team) => ({
        label: team.name,
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

const Team = {
    Form: TeamSelect,
};

export default Team;