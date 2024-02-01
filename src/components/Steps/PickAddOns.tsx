/** @format */

import React, { useState } from "react";
import Button from "../Button";
import ContentSection from "../Title";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/utils/cn";
import { atom, useAtom } from "jotai";
import { activeAddOnsAtom, selectedPlanAtom } from "@/store/store";

type Props = {
  nextStep: () => void;
  prevStep: () => void;
};

export type pickAddonsType = {
  addOnsType: string;
  discription: string;
  monthly: number;
  yearly: number;
};

export const pickAddonsdata = [
  {
    addOnsType: "Online service",
    discription: "Access to multiplayer games",
    monthly: 1,
    yearly: 10
  },
  {
    addOnsType: "Larger storage",
    discription: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20
  },
  {
    addOnsType: "Customizable profile",
    discription: "Custom theme on your profile",
    monthly: 2,
    yearly: 20
  }
];

export default function PickAddOns({ nextStep, prevStep }: Props) {
  const [activeAddOns, setActiveAddOns] = useAtom(activeAddOnsAtom);

  return (
    <div className="flex justify-start flex-col  gap-10 h-full md:w-[400px]  ">
      <ContentSection
        title="Pick add-ons"
        para="  Add-ons help enhance your gaming experience."
      />
      {/* {renderStep()} */}
      <div className="  h-full flex flex-col justify-between ">
        <section className=" flex flex-col gap-4">
          {pickAddonsdata.map((d, i) => (
            <SinglePickAddOns
              data={d}
              activeAddOns={activeAddOns}
              setActiveAddOns={setActiveAddOns}
              addOnsType={d.addOnsType}
              discription={d.discription}
              monthly={d.monthly}
              yearly={d.yearly}
              key={i}
            />
          ))}
        </section>

        <section className="flex  mt-2 justify-between rounded-md w-full ">
          <Button variant="ghost" onClick={prevStep}>
            Go Back
          </Button>
          <Button onClick={nextStep}>Next Step</Button>
        </section>
      </div>
    </div>
  );
}

interface SinglePickAddOnsType {
  addOnsType: string;
  discription: string;
  monthly: number;
  yearly: number;
  data: pickAddonsType;
  activeAddOns: pickAddonsType[];
  setActiveAddOns: React.Dispatch<React.SetStateAction<pickAddonsType[]>>;
}

function SinglePickAddOns(props: SinglePickAddOnsType) {
  const [selectedPlan] = useAtom(selectedPlanAtom);
  const { activeAddOns, setActiveAddOns, data } = props;

  function handleOnClick() {
    // add that data
    if (!activeAddOns.includes(data)) {
      setActiveAddOns([...activeAddOns, data]);
    } else {
      // remove the existed addOns
      const updatedActiveAddOns = activeAddOns.filter((d) => d !== data);

      setActiveAddOns(updatedActiveAddOns);
    }
  }
  console.log("activeAddOns-", activeAddOns);

  //   const isChecked = true;
  const isChecked = activeAddOns.includes(data);
  return (
    <div
      onClick={handleOnClick}
      className={cn(
        "flex justify-between border p-4 rounded-lg items-center cursor-pointer",
        { "bg-magnolia border-purplish-blue": isChecked }
      )}
    >
      <section className="flex items-center gap-5">
        {/*checkbox  */}
        <div
          className={cn(
            "h-5 w-5 text-sm flex items-center justify-center text-white  rounded ",
            { "bg-purplish-blue": isChecked },
            { border: !isChecked }
          )}
        >
          {isChecked && <FaCheck />}
        </div>

        {/*title and discption  */}
        <div className="text-sm">
          <h3 className="font-bold ">{props.addOnsType}</h3>
          <p className="text-gray-400"> {props.discription} </p>
        </div>
      </section>

      {/* price */}

      <p className="text-purplish-blue/70">
        {selectedPlan === "monthly"
          ? `+${props.monthly}/mo`
          : `+${props.yearly}/yr`}
      </p>
    </div>
  );
}
