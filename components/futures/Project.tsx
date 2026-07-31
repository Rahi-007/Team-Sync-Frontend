"use client";

import { useSelectProjectsQuery } from "@/service/project.service";
import { Control, FieldValues, Path } from "react-hook-form";
import GSelect from "../generic/GSelect";

type ProjectFormProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
};

function ProjectSelect<T extends FieldValues>({
    control,
    name,
    label = "Project",
    placeholder = "Select Project",
    disabled,
    required,
}: ProjectFormProps<T>) {
    const { data: projects = [], isLoading } = useSelectProjectsQuery();

    const options = projects.map((project) => ({
        label: project.name,
        value: project.id,
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

const Project = {
    Form: ProjectSelect,
};

export default Project;