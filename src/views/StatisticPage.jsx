import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { Chart } from '../components/Chart'


export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null
    }
    async componentDidMount() {
        const marketPrice = await bitcoinService.getMarketPrice()
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice, confirmedTransactions })

    }
    render() {
        const { marketPrice, confirmedTransactions } = this.state
        if (!marketPrice || !confirmedTransactions) return <div>Loading...</div>
        return (
            <section className='statistic'>
                <Chart data={marketPrice} />
                <Chart data={confirmedTransactions} />
            </section>
        )
    }
}