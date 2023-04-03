import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useAuthentication = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('code') === undefined || localStorage.getItem('code') === null) {
            navigate('/')
        }
    }, [])
}
export default useAuthentication;