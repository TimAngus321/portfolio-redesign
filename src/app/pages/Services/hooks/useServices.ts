import { useNavigate } from "react-router-dom";

const useServices = () => {

    const navigate = useNavigate();

    return {
        navigate
    }
}

export default useServices;