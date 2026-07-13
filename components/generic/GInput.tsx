"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type IFormProps<T extends FieldValues> = React.ComponentProps<typeof Input> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
};

function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  disabled,
  readonly,
  required,
  type = "text",
  ...rest
}: IFormProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="grid gap-0.5 relative mb-2">
          {label && (
            <Label htmlFor={name}>
              {label}
              {required && <span className="text-red-500"> *</span>}
            </Label>
          )}

          <Input
            {...field}
            {...rest}
            id={name}
            type={type}
            disabled={disabled}
            readOnly={readonly || disabled}
            value={field.value ?? ""}
            className="bg-[#f6fbfa] rounded-t-xs"
          />

          {fieldState.error && (
            <p className="absolute bottom-0 text-xs text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

const GInput = {
  Form: FormInput,
};

export default GInput;