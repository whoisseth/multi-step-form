/** @format */

"use client";

import checkmarkImge from "@/assets/images/icon-advanced.svg";

import React, { useState } from "react";
import { IStep } from "@/@types";
import Image from "next/image";
import { bilingPlans, billingPlanType } from "@/constants";
import ToggleBtn from "../ToggleBtn";
import ContentSection from "../Title";
import { cn } from "@/utils/cn";
import Button from "../Button";
import { useAtom } from "jotai";
import { billingPlanAtom, selectedPlanAtom } from "@/store/store";

type IPlan = {
  imageURl: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selectedPlan: "monthly" | "yearly";
  setBillingPan: React.Dispatch<React.SetStateAction<billingPlanType>>;
  data: billingPlanType;
  billingPlan: billingPlanType;
};

type SelectPanType = {
  nextStep: () => void;
  prevStep: () => void;
};

export default function SelectPan({ nextStep, prevStep }: SelectPanType) {
  // const [openTab, setOpenTab] = React.useState(1);
  const [billingPlan, setBillingPan] = useAtom(billingPlanAtom);

  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);

  function handleSlectedPlan() {
    if (selectedPlan === "monthly") {
      setSelectedPlan("yearly");
    }
    if (selectedPlan === "yearly") {
      setSelectedPlan("monthly");
    }
  }

  return (
    <main className="flex gap-6 flex-col h-full ">
      <ContentSection
        title=" Select your plan"
        para=" You have the option of monthly or yearly billing."
      />
      <div className=" h-full flex flex-col justify-between ">
        <section className="flex flex-col gap-6">
          <div className=" flex flex-col md:flex-row  justify-between gap-4 ">
            {bilingPlans.map((d, i) => (
              <Plan
                billingPlan={billingPlan}
                data={d}
                setBillingPan={setBillingPan}
                title={d.planType}
                selectedPlan={selectedPlan}
                key={i}
                monthlyPrice={d.monthlyPrice}
                yearlyPrice={d.yearlyPrice}
                imageURl={d.imgurl}
              />
            ))}
          </div>

          {/* toggle btns */}
          <div className="flex p-4 w-full gap-5 text-sm items-center font-semibold   justify-center rounded-md bg-magnolia">
            <p
              className={cn("text-gray-400", {
                "text-marine-blue": selectedPlan == "monthly"
              })}
            >
              Monthly
            </p>
            <ToggleBtn
              onClick={handleSlectedPlan}
              selectedPlan={selectedPlan}
            />
            <p
              className={cn("text-gray-400", {
                "text-marine-blue": selectedPlan == "yearly"
              })}
            >
              Yearly
            </p>
          </div>
        </section>
        {/* step btns */}
        <section className="flex  mt-2 justify-between rounded-md w-full ">
          <Button variant="ghost" onClick={prevStep}>
            Go Back
          </Button>
          <Button onClick={nextStep}>Next Step</Button>
        </section>
      </div>
    </main>
  );
}

function Plan({
  imageURl,
  title,
  monthlyPrice,
  yearlyPrice,
  selectedPlan,
  setBillingPan,
  data,
  billingPlan
}: IPlan) {
  return (
    <div
      onClick={() => setBillingPan(data)}
      className={cn(
        "flex p-2  border  md:flex-col rounded-md gap-7 md:w-[140px] cursor-pointer w-full ",
        {
          "border-purplish-blue bg-magnolia ":
            data.planType === billingPlan.planType
        }
      )}
    >
      <Image
        width={100}
        height={100}
        className="h-12 w-12  "
        // src="/images/icon-arcade.svg"
        src={imageURl}
        alt="notfound"
      />
      <div className="flex p-2  flex-col ">
        <p className="font-medium text-marine-blue capitalize ">{title}</p>
        <p className="font-light text-gray-400 text-sm">
          ${" "}
          {selectedPlan == "monthly"
            ? `${monthlyPrice}/mo`
            : `${yearlyPrice}/yr`}
        </p>
        {selectedPlan === "yearly" && (
          <p className="text-marine-blue text-sm">2 months free</p>
        )}
      </div>
    </div>
  );
}
