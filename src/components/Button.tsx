/** @format */

import { cn } from "@/utils/cn";
import React from "react";

interface ButtonType extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button(props: ButtonType) {
  return (
    <button
      {...props}
      className={cn(
        "text-white w-fit  bg-marine-blue hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center",
        {
          "bg-marine-blue": props.variant == "primary"
        },
        {
          "bg-purplish-blue": props.variant == "secondary"
        },
        {
          "bg-white text-gray-400 focus:ring-0": props.variant == "ghost"
        }
      )}
    />
  );
}
