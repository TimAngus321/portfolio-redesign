import strings from "app/constants/strings";
import backendSkillSet from "../data/backend-skills";
import developingSkills from "../data/developing-skills";
import frontendSkillSet from "../data/front-end-skills";
import hostingUsed from "../data/hosting-used";
import languages from "../data/languages";
import miscSkills from "../data/misc-tools";
import mobileSkillset from "../data/mobile-skills";
import projectSkills from "../data/project-skills";
import shopifySkillSet from "../data/shopify-skills";
import testingSkills from "../data/testing-skills";

const sliderButtonsData = [
    { label: strings?.front, data: frontendSkillSet },
    { label: strings?.lang, data: languages },
    { label: strings?.mobile, data: mobileSkillset },
    { label: strings?.back, data: backendSkillSet },
    { label: strings?.host, data: hostingUsed },
    { label: strings?.shopify, data: shopifySkillSet },
    { label: strings?.test, data: testingSkills },
    { label: strings?.design, data: projectSkills },
    { label: strings?.tools, data: miscSkills },
    { label: strings?.learning, data: developingSkills },
  ];

  export default sliderButtonsData;