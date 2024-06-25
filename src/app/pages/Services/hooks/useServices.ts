import { useState } from "react"
import { stagger, useAnimate, usePresence, useAnimation } from "framer-motion";

const useServices = () => {

const [highlightSkillset, setHighlightSkillset] = useState<string>("");

return {
    highlightSkillset
}

}

export default useServices;