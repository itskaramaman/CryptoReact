import { createContext, useState, useEffect } from "react";

const CryptoContext = createContext();

export const CryptoProvider = ({children}) => {

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(()=>{
        fetchCryptoData();
    }, [])

    const fetchCryptoData = async () => {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        // data comes inside an object with key data
        setCryptoData(data.data);
    }


    return <CryptoContext.Provider value={{cryptoData}}>{children}</CryptoContext.Provider>
} 

export default CryptoContext;