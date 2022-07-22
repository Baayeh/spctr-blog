import axios from "axios";
import { useState, useEffect } from "react";

const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        axios.get(url, {signal: abortCont.signal })
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })

        return () => abortCont.abort();
    }, [url]);

    return {data, isLoading, error}
}

export default useGet;