/** @format */

import React from "react";

type Props = {};
import Image from "next/image";

import thankYouImg from "@/assets/images/icon-thank-you.svg";

export default function ThankYou({}: Props) {
  return (
    <div className="flex text-center items-center justify-center flex-col gap-4 max-w-[450px] h-full p-5 md:p-0">
      <Image src={thankYouImg} alt="thank-you-img" />
      <h3 className="text-marine-blue">Thank you!</h3>
      <p className="text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
