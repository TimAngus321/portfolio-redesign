import { useNavigate } from "react-router-dom";

const useAbout = () => {

    const navigate = useNavigate();

    return {
        navigate
    }
}

export default useAbout;