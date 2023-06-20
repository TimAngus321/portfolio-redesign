import { useNavigate } from "react-router-dom";

const useSkills = () => {

    const navigate = useNavigate();

    return {
        navigate
    }
}

export default useSkills;