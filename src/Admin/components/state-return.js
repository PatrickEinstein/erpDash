import React from "react";
import { useSelector } from "react-redux";


export const StateReturn = () => {

  const FindUserInfo = useSelector((state) => state.result.selecteduser);
  console.log(FindUserInfo)
  const {
    firstName,
    Products,
    lastName,
    phone,
    email,
    pdf,
    companyName,
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12,
    cat13,
    cat14,
    cat15,
    totalAveragePercentage,
    totalResult,
  } = FindUserInfo;
  return {
    firstName,
    Products,
    lastName,
    phone,
    email,
    pdf,
    companyName,
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12,
    cat13,
    cat14,
    cat15,
    totalAveragePercentage,
    totalResult,
  };
};


