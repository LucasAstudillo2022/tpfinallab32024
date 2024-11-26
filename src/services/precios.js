import axios from "axios";

const precios = axios.create({
	baseURL: "https://criptoya.com/api",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    
});

export default{
    getbitcoin(){
        return precios.get('satoshitango/BTC/ARS/0.5')
    },
    getbnb(){
        return precios.get('binance/BNB/ARS/0.5')
    },
    getxrp(){
        return precios.get('satoshitango/XRP/ARS/0.5')
    }

    
}