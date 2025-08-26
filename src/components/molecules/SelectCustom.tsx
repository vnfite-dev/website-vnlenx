"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SelectCustomProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  options: { id: string | number; title: string }[];
  placeholder?: string;
  className?: string;
  error?: string;
};

export default function SelectCustom({
  label,
  value,
  onChange,
  options,
  placeholder,
  className,
  error,
}: SelectCustomProps) {
  const selectedOption = options.find((option) => option.id === value);

  return (
    <div className={cn("relative w-full", className)} >
      <p className="absolute bg-white text-sm font-bold -top-2.5 left-4">
        {label} <span className="text-main-color">*</span>
      </p>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full h-auto border border-gray-300" style={{height:42,width:'100%'}}>
          <SelectValue placeholder={placeholder}>
            {selectedOption ? selectedOption.title : placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id} value={option.id.toString()}>
              {option.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Display error if exists */}
    </div>
  );
}
