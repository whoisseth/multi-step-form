/** @format */

import clsx from "clsx";
import React from "react";

type PrcingType = {
  selectedPlan: "monthly" | "yearly";
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ToggleBtn({ selectedPlan, onClick }: PrcingType) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-6  rounded-full flex items-center p-1
    bg-marine-blue
    "
    >
      <div
        className={clsx("h-4 w-4 bg-white rounded-full transition-all ", {
          "translate-x-[calc(100%+6px)]": selectedPlan === "yearly"
        })}
      />
      {/* translate-x-[calc(100%+6px)] */}
    </button>
  );
}
