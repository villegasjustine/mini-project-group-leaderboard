import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import BasicCard from "./BasicCard";

export default function Quote() {
    const apiResponse = useData("/quoteapi");
    // console.log(apiResponse)
 
  if (!apiResponse || !apiResponse.data) {
    return "";
  }
  //write a map function here to fetch multiple data
  return (
    <>
    <BasicCard main={apiResponse[49].q}></BasicCard>
    </>
  );
}
