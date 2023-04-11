import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AveragePercentageLogic,
  RecommendationsImplication,
  GradingLogic,
} from "./recommendationImplicationLogic";

export const Recommends1 = () => {
  const isresult = useSelector((state) => state.result);
  const cat1 = isresult.cat1;
  return (
    //POSITION
    <RecommendationsImplication
      cat={cat1}
      r1=" The business needs a good management team to establish the business in the local market"
      r2=" The business needs a good management team to establish the business in the local market"
      r3=" The business needs a good management team to establish the business in the local market"
      r4=" The business needs a good management team to establish the business in the local market"
      r5="Good to go"
    />
  );
};

export const Recommends2 = () => {
  const isresult = useSelector((state) => state.result);
  const cat2 = isresult.cat2;
  return (
    //Promoters
    <RecommendationsImplication
      cat={cat2}
      r1="Owners need exposure to export market potentials to stimulate interest to "
      r2="Owners need exposure to export market potentials to stimulate interest to "
      r3="Owners need exposure to export market potentials to stimulate interest to "
      r4="Owners need exposure to export market potentials to stimulate interest to "
      r5="Good to go"
    />
  );
};
export const Recommends3 = () => {
  const isresult = useSelector((state) => state.result);
  const cat3 = isresult.cat3;
  return (
    //Products
    <RecommendationsImplication
      cat={cat3}
      r1="Exporter need to upgrage product quality, labelling  and packaging "
      r2="Exporter need to upgrage product quality, labelling  and packaging "
      r3="Exporter need to upgrage product quality, labelling  and packaging "
      r4="Exporter need to upgrage product quality, labelling  and packaging "
      r5="Good to go"
    />
  );
};
export const Recommends4 = () => {
  const isresult = useSelector((state) => state.result);
  const cat4 = isresult.cat4;
  return (
    //Pricing
    <RecommendationsImplication
      cat={cat4}
      r1="Exporter needs to deploy different startegies in order to reduce production cost "
      r2="Exporter needs to deploy different startegies in order to reduce production cost "
      r3="Exporter needs to deploy different startegies in order to reduce production cost "
      r4="Exporter needs to deploy different startegies in order to reduce production cost "
      r5="Good to go"
    />
  );
};

export const Recommends5 = () => {
  const isresult = useSelector((state) => state.result);
  const cat5 = isresult.cat5;
  return (
    //Predisposition
    <RecommendationsImplication
      cat={cat5}
      r1="Exporter needs to organise seminar to boost foreign orientation of its staff"
      r2="Exporter needs to organise seminar to boost foreign orientation of its staff"
      r3="Exporter needs to organise seminar to boost foreign orientation of its staff"
      r4="Exporter needs to organise seminar to boost foreign orientation of its staff"
      r5="Good to go"
    />
  );
};

export const Recommends6 = () => {
  const isresult = useSelector((state) => state.result);
  const cat6 = isresult.cat6;
  return (
    //Purpose
    <RecommendationsImplication
      cat={cat6}
      r1="Exporter need to find   a strong reason to export through exposure to export information "
      r2="Exporter need to find   a strong reason to export through exposure to export information "
      r3="Exporter need to find   a strong reason to export through exposure to export information "
      r4="Exporter need to find   a strong reason to export through exposure to export information "
      r5="Good to go"
    />
  );
};
export const Recommends7 = () => {
  const isresult = useSelector((state) => state.result);
  const cat7 = isresult.cat7;
  return (
    //Payment
    <RecommendationsImplication
      cat={cat7}
      r1="Exporter needs to learn alternative source of funding and payment risk mitigation"
      r2="Exporter needs to learn alternative source of funding and payment risk mitigation"
      r3="Exporter needs to learn alternative source of funding and payment risk mitigation"
      r4="Exporter needs to learn alternative source of funding and payment risk mitigation"
      r5="Good to go"
    />
  );
};
export const Recommends8 = () => {
  const isresult = useSelector((state) => state.result);
  const cat8 = isresult.cat8;
  return (
    //Production
    <RecommendationsImplication
      cat={cat8}
      r1="Exporter need to either boost capacity or form synergy to meet a surge in demand"
      r2="Exporter need to either boost capacity or form synergy to meet a surge in demand"
      r3="Exporter need to either boost capacity or form synergy to meet a surge in demand"
      r4="Exporter need to either boost capacity or form synergy to meet a surge in demand"
      r5="Exporter need to either boost capacity or form synergy to meet a surge in demand"
    />
  );
};
export const Recommends15 = () => {
  const isresult = useSelector((state) => state.result);
  const cat15 = isresult.cat15;
  return (
    //Partnership
    <RecommendationsImplication
      cat={cat15}
      r1="Exporter needs to visit the export market and hire a representatitive or form a joint veture or set up an oversea branch "
      r2="Exporter needs to visit the export market and hire a representatitive or form a joint veture or set up an oversea branch "
      r3="Exporter needs to visit the export market and hire a representatitive or form a joint veture or set up an oversea branch "
      r4="Exporter needs to visit the export market and hire a representatitive or form a joint veture or set up an oversea branch "
      r5="Good to go"
    />
  );
};
export const Recommends9 = () => {
  const isresult = useSelector((state) => state.result);
  const cat9 = isresult.cat9;
  return (
    //Proficiency
    <RecommendationsImplication
      cat={cat9}
      r1="Exporter needs to do export business capacity building programme for staff"
      r2="Exporter needs to do export business capacity building programme for staff"
      r3="Exporter needs to do export business capacity building programme for staff"
      r4="Exporter needs to do export business capacity building programme for staff"
      r5="Good to go"
    />
  );
};
export const Recommends10 = () => {
  const isresult = useSelector((state) => state.result);
  const cat10 = isresult.cat10;
  return (
    //People
    <RecommendationsImplication
      cat={cat10}
      r1="Exporter need to learn about the characteristics of a typical consumer in export market"
      r2="Exporter need to learn about the characteristics of a typical consumer in export market"
      r3="Exporter need to learn about the characteristics of a typical consumer in export market"
      r4="Exporter need to learn about the characteristics of a typical consumer in export market"
      r5="Good to go"
    />
  );
};
export const Recommends11 = () => {
  const isresult = useSelector((state) => state.result);
  const cat11 = isresult.cat11;
  return (
    //Paperwork
    <RecommendationsImplication
      cat={cat11}
      r1="Exporter need to learn the documenation requirement in the home and export markets"
      r2="Exporter need to learn the documenation requirement in the home and export markets"
      r3="Exporter need to learn the documenation requirement in the home and export markets"
      r4="Exporter need to learn the documenation requirement in the home and export markets"
      r5="Good to go"
    />
  );
};
export const Recommends12 = () => {
  const isresult = useSelector((state) => state.result);
  const cat12 = isresult.cat12;
  return (
    //Potentials
    <RecommendationsImplication
      cat={cat12}
      r1="Exporter need to do an online research to know the market potential and viable export market"
      r2="Exporter need to do an online research to know the market potential and viable export market"
      r3="Exporter need to do an online research to know the market potential and viable export market"
      r4="Exporter need to do an online research to know the market potential and viable export market"
      r5="Good to go"
    />
  );
};
export const Recommends13 = () => {
  const isresult = useSelector((state) => state.result);
  const cat13 = isresult.cat13;
  return (
    //Promotion
    <RecommendationsImplication
      cat={cat13}
      r1="Exporter need to raise funds to attend trade fair and promote product in the export market"
      r2="Exporter need to raise funds to attend trade fair and promote product in the export market"
      r3="Exporter need to raise funds to attend trade fair and promote product in the export market"
      r4="Exporter need to raise funds to attend trade fair and promote product in the export market"
      r5="Good to go"
    />
  );
};
export const Recommends14 = () => {
  const isresult = useSelector((state) => state.result);
  const cat14 = isresult.cat14;
  return (
    //Purchasers
    <RecommendationsImplication
      cat={cat14}
      r1="Exporter needs to visit the export market or appoint an agent to reach distribution channel operators"
      r2="Exporter needs to visit the export market or appoint an agent to reach distribution channel operators"
      r3="Exporter needs to visit the export market or appoint an agent to reach distribution channel operators"
      r4="Exporter needs to visit the export market or appoint an agent to reach distribution channel operators"
      r5="Good to go"
    />
  );
};
export const RecommendsAveragePercentage = () => {
  const isresult = useSelector((state) => state.result);
  const istotalAveragePercentage = isresult.totalAveragePercentage;
  return (
    <AveragePercentageLogic
      cat={istotalAveragePercentage}
      r1="Getting ready to start the journey to exportation-  focus on overcoming the teething problem of business setup"
      r2="Just starting the journey to export business -needs to concentrate local business development and less on export readiness  "
      r3="Midway to positioning for sustainable export business – have a long way to go, should not start export but focus on export readiness"
      r4="Almost positioned for sustainable export business- can start export, but needs to fix few areas readiness to be sustainable"
      r5="Positioned for sustainable export business – can start exporting immediately"
    />
  );
};

export const Grading = () => {
  const isresult = useSelector((state) => state.result);
  const istotalAveragePercentage = isresult.totalAveragePercentage;
  return (
    <GradingLogic
      cat={istotalAveragePercentage}
      r1="E"
      r2="D"
      r3="C"
      r4="B"
      r5="A"
    />
  );
};
