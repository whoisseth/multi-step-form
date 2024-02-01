/** @format */
"use client";

import PersonalInfo from "@/components/Steps/PersonalInfo";
import Sidebar, { MobileSidebar } from "@/components/Sidebar";
import SelectPan from "@/components/Steps/SelectPan";
import { useState } from "react";
import PickAddOns from "@/components/Steps/PickAddOns";
import FinishingUp from "@/components/Steps/FinishingUp";
import ThankYou from "@/components/Steps/ThankYou";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  function nextStep() {
    setActiveStep(activeStep + 1);
  }

  function prevStep() {
    setActiveStep(activeStep - 1);
  }

  function RenderStep() {
    switch (activeStep) {
      case 1:
        return <PersonalInfo nextStep={nextStep} />;
      // Render other steps here
      case 2:
        return <SelectPan nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PickAddOns nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return (
          <FinishingUp setActiveStep={setActiveStep} prevStep={prevStep} />
        );
      default:
        return null;
    }
  }
  return (
    <div className="flex min-h-screen w-full bg-light-blue items-center justify-center ">
      <MobileSidebar activeStep={activeStep} />
      <main className="bg-white h-auto z-20 w-full max-w-[900px] flex gap-10  p-4 rounded-2xl flex-col md:flex-row   ">
        <Sidebar activeStep={activeStep} />
        <div className=" pt-10    ">
          <RenderStep />
        </div>
      </main>
    </div>
  );
}
