import { useState } from "react";
export const useApi = () => {
    const [ data, setdata ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);
    const getData = async (url) => {
        try {
            let result = await fetch(url);
            if(!result.ok) {
                throw {
                    err:true,
                    status:result.status,
                    statusText:!result.statusText ? "Ocurrio un error" : result.statusText
                }
            }
            let dataJson = await result.json();
            setError({ err:false });
            setdata(dataJson);
            setIsPending(false);
        } catch (err) {
            setError({ err:err });
            setIsPending(true);
        }
    }
    return { data, isPending, error, getData };
}