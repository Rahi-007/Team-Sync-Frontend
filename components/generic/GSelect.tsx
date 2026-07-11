"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectOption = {
  label: string;
  value: string;
};

type IFormSelectProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  required?: boolean;
};

function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Select an option",
  options,
  disabled,
  required,
}: IFormSelectProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="relative mb-2 grid gap-0.5">
          {label && (
            <Label htmlFor={name}>
              {label}
              {required && <span className="text-red-500"> *</span>}
            </Label>
          )}

          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState.error && (
            <p className="text-xs text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

const GSelect = {
  Form: FormSelect,
};

export default GSelect;