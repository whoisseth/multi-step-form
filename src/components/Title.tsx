/** @format */

import React from "react";

type Props = {
  title: string;
  para: string;
};

export default function ContentSection(props: Props) {
  return (
    <div className="flex gap-2 flex-col">
      <h2 className="font-bold text-3xl text-marine-blue"> {props.title} </h2>
      <p className="text-gray-400">{props.para}</p>
    </div>
  );
}
