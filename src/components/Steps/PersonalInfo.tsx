/** @format */
"use client";

import React, { useState } from "react";
import ContentSection from "../Title";
import Button from "../Button";

import { useForm, SubmitHandler } from "react-hook-form";
type Props = {
  nextStep: () => void;
};

type Inputs = {
  name: string;
  email: string;
  phoneNo: number;
};

export default function PersonalInfo({ nextStep }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    nextStep();
  };

  console.log("errors", errors);

  return (
    <div className="flex justify-start flex-col  gap-10 h-full">
      <ContentSection
        title=" Personal info"
        para="  Please provide your name, email address, and phone number."
      />
      {/* {renderStep()} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  h-full flex flex-col justify-between "
      >
        <section>
          <div className="mb-5">
            {errors.name && <span>This field is required</span>}
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              // type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Email Address
            </label>
            {errors.email && <span>This field is required</span>}
            <input
              {...register("email", {
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
              })}
              // type="email"
              id="email"
              placeholder="Enter you email address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-normal text-gray-900 ">
              Phone Number
            </label>
            <input
              {...register("phoneNo", { required: true })}
              // type="tel"
              type="number"
              id="phonenumber"
              placeholder="Enter you phone number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
        </section>

        <div className="flex justify-end">
          {/* <button
          
            type="button"
            className="text-white w-fit  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
          >
           
          </button> */}
          <Button>Next Step</Button>
        </div>
      </form>
    </div>
  );
}
