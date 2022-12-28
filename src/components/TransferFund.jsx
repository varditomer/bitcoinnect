import React from 'react'

export function TransferFund({move, bitRate}) {
    function timeFormatter() {
        const timestamp = move.at
        const time = (new Date(timestamp)).toLocaleTimeString()
        const date = (new Date(timestamp)).toLocaleDateString()
        return `${date} , ${time}`
    }

    return (
        <section className='transfer-fund'>
            <section className="move">
                <div className="amount flex">
                    <span className="bit">&#8383; {move.amount} |</span>
                    <span className="usd">{(move.amount / bitRate).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>
                <div className="status">
                    status: <span className='type'>approve</span>
                </div>
                <div className="timestamp">{timeFormatter()}</div>
            </section>
        </section>
    )
}