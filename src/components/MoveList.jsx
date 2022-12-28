import React from 'react'
import { TransferFund } from './TransferFund'

export function MoveList({ bitRate, title = '♻ Move History', contact, loggedinUser }) {
    return (
        <section className='move-list'>
            <section className="move-history flex column">
                <div className="title">{title}</div>
                {loggedinUser.moves?.map((move, idx) => {
                    if (contact) {

                        if (contact._id === move.toId) {
                            return (
                                <TransferFund move={move} key={move._id} bitRate={bitRate} />
                            )

                        }
                        else {
                            return
                        }
                    } else {
                        if (idx < 3) {
                            return (
                                <TransferFund move={move} key={move._id} bitRate={bitRate} />
                            )
                        } else return


                    }

                })}
            </section>
        </section>
    )
}