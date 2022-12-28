import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { Chart } from '../components/Chart'

export class Home extends Component {
    state = {
        user: null,
        bitRate: null,
        marketPrice: null
    }
    async componentDidMount() {
        const user = await userService.getUser()
        const bitRate = await bitcoinService.getRate()
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ user, bitRate, marketPrice })
    }
    render() {
        const { user, bitRate, marketPrice } = this.state
        if (!user || !bitRate || !marketPrice) return <div>Loading...</div>

        return (
            <section className='home flex column'>

                <header className='main-header flex'>
                    <h1>Hi, {user.name}</h1>
                </header>

                <section className="details flex">
                    <div className="balance flex column">
                        <span className='title'>CURRENT BALANCE:</span>
                        <div>BIT: <span className='bit'> &#8383; {(user.coins).toLocaleString()} </span></div>
                        <div>USD: <span className='usd'> {(user.coins / bitRate).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </span></div>
                    </div>
                    <div className="rate flex column">
                        <div className="title">CURRENT BTC USD <span className='live'>live</span></div>
                        <span className='curr-rate'>{(1 / bitRate).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>

                    </div>
                </section>

                <section className="chart">
                    <Chart data={marketPrice} />
                </section>



            </section>
        )
    }
}