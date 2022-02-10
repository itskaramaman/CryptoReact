import { useContext } from 'react';
import CryptoContext from './CryptoContext';

function Home() {

    const { cryptoData } = useContext(CryptoContext);
    console.log(cryptoData);

    const foramatDecimals = (number) => {
        return Number(number).toFixed(6);
    }

    return (

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Symbol</th>
                <th scope="col">Price (USD)</th>
                <th scope="col">Change Percent 24Hr</th>
                <th scope="col">Market Cap (USD)</th>
                <th scope="col">Volume 24Hr (USD)</th>
                </tr>
        </thead>
        <tbody>
            {cryptoData.map(eachCrypto=>(
                <tr>
                <th scope="row">{eachCrypto.rank}</th>
                <td>{eachCrypto.name}</td>
                <td>{eachCrypto.symbol}</td>
                <td>${foramatDecimals(eachCrypto.priceUsd)}</td>
                <td className={eachCrypto.changePercent24Hr >0 ? 'text-success':'text-danger'}>{foramatDecimals(eachCrypto.changePercent24Hr)}</td>
                <td>{foramatDecimals(eachCrypto.marketCapUsd)}</td>
                <td>{foramatDecimals(eachCrypto.vwap24Hr)}</td>
            </tr>
            ))}
            
        </tbody>
    </table> 
    
    )
}

export default Home;

/*
"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin",
"supply":"18952550.0000000000000000","maxSupply":"21000000.0000000000000000",
"marketCapUsd":"840088573489.5856706739223150","volumeUsd24Hr":"18910111101.0103614668788039",
"priceUsd":"44325.8861466971816813","changePercent24Hr":"0.7959689515914257",
"vwap24Hr":"44068.9537451395927510","explorer":"https://blockchain.info/ 


website:
https://docs.coincap.io/

API
https://api.coincap.io/v2/assets
*/