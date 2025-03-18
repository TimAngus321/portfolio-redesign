import strings from "app/constants/strings";
import frontendDev from "../data/frontendDev";
import shopifyDev from "../data/shopifyDev";
import mobileDev from "../data/mobileDev";
import fullstackDev from "../data/fullstackDev";
import consultation from "../data/consultation";
import uiUxDev from "../data/uiUxDev";

const buttonsData = [
    { label: strings?.consult, data: consultation },
    { label: strings?.front, data: frontendDev },
    { label: strings?.design, data: uiUxDev },
    { label: strings?.fullstack, data: fullstackDev },
    { label: strings?.mobile, data: mobileDev },
    { label: strings?.shopify, data: shopifyDev },
  ];

  export default buttonsData;