import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AveragePercentageLogic, RecommendationsImplication } from "../recommendations/recommendationImplicationLogic";

export const Implications1 = () => {
  const isresult = useSelector((state) => state.result);
  const cat1 = isresult.cat1;
  return (
    <RecommendationsImplication
      // Positioning
      cat={cat1}
      r1="Low score In positioning is an indication that the product is not well received in the local market."
      r2="Low score In positioning is an indication that the product is not well received in the local market."
      r3="Low score In positioning is an indication that the product is not well received in the local market."
      r4="Low score In positioning is an indication that the product is not well received in the local market."
      r5="The company is well positioned for export business"
    />
  );
};

export const Implications2 = () => {
  const isresult = useSelector((state) => state.result);
  const cat2 = isresult.cat2;
  return (
    // Promoters
    <RecommendationsImplication
      cat={cat2}
      r1="Low score in promoter is an indication that the business owner is inexperience and unwilling to commit resources to support export.  "
      r2="Low score in promoter is an indication that the business owner is inexperience and unwilling to commit resources to support export.  "
      r3="Low score in promoter is an indication that the business owner is inexperience and unwilling to commit resources to support export.  "
      r4=" Low score in promoter is an indication that the business owner is inexperience and unwilling to commit resources to support export. "
      r5="The promoters of the company are committed to export business"
    />
  );
};
export const Implications3 = () => {
  const isresult = useSelector((state) => state.result);
  const cat3 = isresult.cat3;
  return (
    // Products
    <RecommendationsImplication
      cat={cat3}
      r1="Low score in product is an indication that the product is not unique, low quality, easy to replicate and wrong packaging. "
      r2="Low score in product is an indication that the product is not unique, low quality, easy to replicate and wrong packaging. "
      r3="Low score in product is an indication that the product is not unique, low quality, easy to replicate and wrong packaging. "
      r4="Low score in product is an indication that the product is not unique, low quality, easy to replicate and wrong packaging. "
      r5="The products are ready for the export market"
    />
  );
};
export const Implications4 = () => {
  const isresult = useSelector((state) => state.result);
  const cat4 = isresult.cat4;
  return (
    // Pricing
    <RecommendationsImplication
      cat={cat4}
      r1="Low score in pricing is a sign of lack of competitiveness. "
      r2="Low score in pricing is a sign of lack of competitiveness. "
      r3="Low score in pricing is a sign of lack of competitiveness. "
      r4="Low score in pricing is a sign of lack of competitiveness. "
      r5="The pricing of the products are competitive in the export market"
    />
  );
};

export const Implications5 = () => {
  const isresult = useSelector((state) => state.result);
  const cat5 = isresult.cat5;
  return (
    // Disposition
    <RecommendationsImplication
      cat={cat5}
      r1="Low score in predisposition is an indication of lack of foreign orientation among staff "
      r2="Low score in predisposition is an indication of lack of foreign orientation among staff "
      r3="Low score in predisposition is an indication of lack of foreign orientation among staff "
      r4="Low score in predisposition is an indication of lack of foreign orientation among staff "
      r5="The company's staff have good predisposition to exportation"
    />
  );
};

export const Implications6 = () => {
  const isresult = useSelector((state) => state.result);
  const cat6 = isresult.cat6;
  return (
    //Purpose
    <RecommendationsImplication
      cat={cat6}
      r1="Low score in purpose is an indication that the purpose for export business is not strong. "
      r2="Low score in purpose is an indication that the purpose for export business is not strong. "
      r3="Low score in purpose is an indication that the purpose for export business is not strong. "
      r4="Low score in purpose is an indication that the purpose for export business is not strong. "
      r5="The company has a strong purpose to be successful in the export market"
    />
  );
};
export const Implications7 = () => {
  const isresult = useSelector((state) => state.result);
  const cat7 = isresult.cat7;
  return (
    //Payment
    <RecommendationsImplication
      cat={cat7}
      r1="Low score in payment is an indication that exporter cannot source funds to do  export business  and also unable to mitigate payment risk"
      r2="Low score in payment is an indication that exporter cannot source funds to do  export business  and also unable to mitigate payment risk"
      r3="Low score in payment is an indication that exporter cannot source funds to do  export business  and also unable to mitigate payment risk"
      r4="Low score in payment is an indication that exporter cannot source funds to do  export business  and also unable to mitigate payment risk"
      r5="The company has an excellent understanding of how to raise funds and mitigate payment risks"
    />
  );
};
export const Implications8 = () => {
  const isresult = useSelector((state) => state.result);
  const cat8 = isresult.cat8;
  return (
    //Production
    <RecommendationsImplication
      cat={cat8}
      r1="Low score in production is an indication of inability to meet a surge in demad from buyers abroad"
      r2="Low score in production is an indication of inability to meet a surge in demad from buyers abroad"
      r3="Low score in production is an indication of inability to meet a surge in demad from buyers abroad"
      r4="Low score in production is an indication of inability to meet a surge in demad from buyers abroad"
      r5="The has an excellent structure to meet the new demands in the export market"
    />
  );
};
export const Implications9 = () => {
  const isresult = useSelector((state) => state.result);
  const cat9 = isresult.cat9;
  return (
    //Proficiency
    <RecommendationsImplication
      cat={cat9}
      r1="Low score in proficiency is an indication of lack of competence in export business management"
      r2="Low score in proficiency is an indication of lack of competence in export business management"
      r3="Low score in proficiency is an indication of lack of competence in export business management"
      r4="Low score in proficiency is an indication of lack of competence in export business management"
      r5="The company has a very competent team to successfully run the export business "
    />
  );
};
export const Implications10 = () => {
  const isresult = useSelector((state) => state.result);
  const cat10 = isresult.cat10;
  return (
    //People
    <RecommendationsImplication
      cat={cat10}
      r1="Low score in people is an indication of lack of understanding of the consumers in the export market"
      r2="Low score in people is an indication of lack of understanding of the consumers in the export market"
      r3="Low score in people is an indication of lack of understanding of the consumers in the export market"
      r4="Low score in people is an indication of lack of understanding of the consumers in the export market"
      r5="Management have an excellent understanding of the consumers in the export market"
    />
  );
};
export const Implications11 = () => {
  const isresult = useSelector((state) => state.result);
  const cat11 = isresult.cat11;
  return (
    //Paperwork
    <RecommendationsImplication
      cat={cat11}
      r1="Low score in paperwork is an indication of lack of understanding of the documentation involve in the home and  export market"
      r2="Low score in paperwork is an indication of lack of understanding of the documentation involve in the home and  export market"
      r3="Low score in paperwork is an indication of lack of understanding of the documentation involve in the home and  export market"
      r4="Low score in paperwork is an indication of lack of understanding of the documentation involve in the home and  export market"
      r5="The company has an excellent understanding of  documentation involve in the home and  export market"
    />
  );
};
export const Implications12 = () => {
  const isresult = useSelector((state) => state.result);
  const cat12 = isresult.cat12;
  return (
    //Potentials
    <RecommendationsImplication
      cat={cat12}
      r1="Low score in potential is an indication of lack of understanding of the export market opportunities"
      r2="Low score in potential is an indication of lack of understanding of the export market opportunities"
      r3="Low score in potential is an indication of lack of understanding of the export market opportunities"
      r4="Low score in potential is an indication of lack of understanding of the export market opportunities"
      rs="The management of the company has an excellent understanding of the export market opportunities"
    />
  );
};
export const Implications13 = () => {
  const isresult = useSelector((state) => state.result);
  const cat13 = isresult.cat13;
  return (
    //Promotion
    <RecommendationsImplication
      cat={cat13}
      r1="Low score in promotion is an indication of lack of capacity or  understanding of how to reach potential buyers in the export market "
      r2="Low score in promotion is an indication of lack of capacity or  understanding of how to reach potential buyers in the export market "
      r3="Low score in promotion is an indication of lack of capacity or  understanding of how to reach potential buyers in the export market "
      r4="Low score in promotion is an indication of lack of capacity or  understanding of how to reach potential buyers in the export market "
      r5="The company has an excellent understanding on how to reach the buyers abroad"
    />
  );
};
export const Implications14 = () => {
  const isresult = useSelector((state) => state.result);
  const cat14 = isresult.cat14;
  return (
    //Purchasers
    <RecommendationsImplication
      cat={cat14}
      r1="Low score in purchasers is an indication of lack of understanding of how to identify and work with distribution channel operators in the export market"
      r2="Low score in purchasers is an indication of lack of understanding of how to identify and work with distribution channel operators in the export market"
      r3="Low score in purchasers is an indication of lack of understanding of how to identify and work with distribution channel operators in the export market"
      r4="Low score in purchasers is an indication of lack of understanding of how to identify and work with distribution channel operators in the export market"
      r5="The company has an excellent understanding of how to identify and work with distribution channel operators in the export market"
    />
  );
};
export const Implications15 = () => {
  const isresult = useSelector((state) => state.result);
  const cat15 = isresult.cat15;
  return (
    // Partnership
    <RecommendationsImplication
      cat={cat15}
      r1="Low score in partnership is an indication of lack of understanding of how to identify and work with service providers in the export market"
      r2="Low score in partnership is an indication of lack of understanding of how to identify and work with service providers in the export market"
      r3="Low score in partnership is an indication of lack of understanding of how to identify and work with service providers in the export market"
      r4="Low score in partnership is an indication of lack of understanding of how to identify and work with service providers in the export market"
      r5="The company has an excellent understanding of how to identify and work with service providers in the export market"
    />
  );
};
export const ImplicationsAveragePercentage = () => {
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
