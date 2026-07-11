"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

import { cn } from "@/lib/utils";

type IFormDatePickerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

function FormDatePicker<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Pick a date",
  required,
  disabled,
}: IFormDatePickerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="grid gap-0.5 mb-2">
          {label && (
            <Label htmlFor={name}>
              {label}
              {required && <span className="text-red-500">*</span>}
            </Label>
          )}

          <Popover>
            <PopoverTrigger>
              <Button
                id={name}
                type="button"
                variant="outline"
                disabled={disabled}
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value
                  ? format(new Date(field.value), "PPP")
                  : placeholder}

                <CalendarIcon className="h-4 w-4 opacity-60" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={field.onChange}
                // initialFocus
              />
            </PopoverContent>
          </Popover>

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

const GDatePicker = {
  Form: FormDatePicker,
};

export default GDatePicker;