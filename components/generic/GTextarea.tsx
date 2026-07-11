"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type IFormTextareaProps<T extends FieldValues> =
  React.ComponentProps<typeof Textarea> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
  };

function FormTextarea<T extends FieldValues>({
  control,
  name,
  label,
  disabled,
  readonly,
  required,
  ...rest
}: IFormTextareaProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="grid gap-0.5 mb-2">
          {label && (
            <Label htmlFor={name}>
              {label}
              {required && <span className="text-red-500"> *</span>}
            </Label>
          )}

          <Textarea
            {...field}
            {...rest}
            id={name}
            disabled={disabled}
            readOnly={readonly || disabled}
            value={field.value ?? ""}
          />

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

const GTextarea = {
  Form: FormTextarea,
};

export default GTextarea;