/** @format */
"use client";
import React, { useState } from "react";
import ContentSection from "../Title";
import Button from "../Button";
import { SetStateAction, useAtom } from "jotai";
import {
  activeAddOnsAtom,
  billingPlanAtom,
  selectedPlanAtom
} from "@/store/store";
import ThankYou from "./ThankYou";

type Props = {
  prevStep: () => void;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
};

export default function FinishingUp({ prevStep, setActiveStep }: Props) {
  const [confirm, setConfirm] = useState(false);
  const [selectedPlan] = useAtom(selectedPlanAtom);

  const [billingPlan] = useAtom(billingPlanAtom);
  const [activeAddOns] = useAtom(activeAddOnsAtom);

  const totalPerYear =
    activeAddOns.reduce(
      (accumulator, currentValue) => accumulator + currentValue.yearly,
      0
    ) + billingPlan.yearlyPrice;
  const totalPerMonth =
    activeAddOns.reduce(
      (accumulator, currentValue) => accumulator + currentValue.monthly,
      0
    ) + billingPlan.monthlyPrice;

  return (
    <>
      {confirm ? (
        <ThankYou />
      ) : (
        <div className="flex justify-start flex-col  gap-10 h-full md:w-[400px]  ">
          <ContentSection
            title="Finishing up"
            para="Double-check everything looks OK before confirming."
          />
          {/* {renderStep()} */}
          <div className="  h-full flex flex-col justify-between ">
            <div className="flex flex-col gap-6">
              <section className="bg-magnolia rounded-lg p-5 flex flex-col gap-4">
                {/* select pan */}
                <div className="flex justify-between">
                  {/*  left*/}
                  <div className=" flex flex-col items-start">
                    <h3 className="font-semibold text-marine-blue">
                      <span className="capitalize">{billingPlan.planType}</span>
                      <span className="capitalize">( {selectedPlan})</span>
                    </h3>
                    <button
                      onClick={() => setActiveStep(2)}
                      className="text-gray-400 text-sm underline hover:opacity-80"
                    >
                      Change
                    </button>
                  </div>
                  {/* price */}
                  <p className="font-bold text-marine-blue">
                    {selectedPlan === "monthly"
                      ? `$${billingPlan.monthlyPrice}/mo}`
                      : `$${billingPlan.yearlyPrice}/yo}`}
                  </p>
                </div>

                {/* divider */}
                <hr />

                <section className="text-sm flex-col flex gap-3">
                  {activeAddOns.map((d, i) => (
                    <div key={i} className="flex justify-between ">
                      <p className="text-gray-400">{d.addOnsType}</p>
                      <p className="text-marine-blue">
                        {selectedPlan === "monthly"
                          ? `$${d.monthly}/mo`
                          : `$${d.yearly}/yo`}
                      </p>
                    </div>
                  ))}
                </section>
              </section>

              {/* total price */}
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">
                  Total
                  {selectedPlan === "monthly" ? " (per month)" : "(per year)"}
                </p>
                <p className=" text-purplish-blue font-bold">
                  {selectedPlan === "monthly"
                    ? `$${totalPerMonth}/mo`
                    : `$${totalPerYear}/yo`}
                </p>
              </div>
            </div>

            <section className="flex  mt-2 justify-between rounded-md w-full ">
              <Button variant="ghost" onClick={prevStep}>
                Go Back
              </Button>
              <Button variant="secondary" onClick={() => setConfirm(true)}>
                Confirm
              </Button>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
