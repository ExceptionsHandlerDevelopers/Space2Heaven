"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const SelectService = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<"buyProperty" | "interiorDesign" | "">("");

  const handleSelectChange = (value: "buyProperty" | "interiorDesign") => {
    setSelectedService(value); // Update the state with the selected value

    if (value === "buyProperty") {
      router.push("/properties");
    } else if (value === "interiorDesign") {
      router.push("/properties/interior");
    }
  };

  return (
    <Select onValueChange={handleSelectChange} value={selectedService}>
      <SelectTrigger className="text-white w-[180px] border-grey-1 glassmorphism2">
        <SelectValue placeholder="Select Service" />
      </SelectTrigger>
      <SelectContent className="glassmorphism">
        <SelectItem value="buyProperty">Buy A Property</SelectItem>
        <SelectItem value="interiorDesign">Interior Design</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectService;
