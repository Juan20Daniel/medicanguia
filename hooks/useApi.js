import { useState } from "react";
export const useApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);
    const [ err, setErr ] = useState(false);

    const requestHTTP = (type, url, data) => {
        setIsLoading(true);
        const options = {
            method:type,
            body:JSON.stringify(data) || false,
            headers: {
                "Content-Type":"application/json"
            }
        }
        if(!options.body) delete options.body;
        fetch(url, options).then(res => {
            if(res.ok) {
                res.json().then(data => {
                    setErr(false);
                    setResponse(data);
                    setIsLoading(false);
                })
                return true;
            }
            res.json().then(data => {
                setErr(true);
                setResponse(data);
                setIsLoading(false);
            })
        });
    }

    return { requestHTTP, response, isLoading, err }
}