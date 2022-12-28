import axios from 'axios'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(dollars = 1) {
    const BITCOIN_URL = `https://blockchain.info/tobtc?currency=USD&value=${dollars}`
    try {
        const res = await axios.get(BITCOIN_URL)
        return res.data
    } catch (err) {
        console.log(`error on getting bitcoin rate:`, err)
    }

}

async function getMarketPrice(time = 'months', count = 5) {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        return res.data
    } catch (err) {
        console.log('Couldnt get market price:', err)
        throw (err)
    }
}

async function getConfirmedTransactions(time = 'months', count = 5) {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=${count}${time}&format=json&cors=true`)
        console.log(`res.data:`, res.data)
        return res.data
    } catch (err) {
        console.log('Couldnt get confirmed transactions:', err)
        throw (err)
    }
}
