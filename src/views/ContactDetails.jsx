import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { contactService } from '../services/contact.service'

export class ContactDetails extends Component {
    state = {
        contact: null
    }
    componentDidMount() {
        this.loadContact()
    }
    loadContact = async () => {
        const id = this.props.match.params.id
        const contact = await contactService.getContactById(id)
        this.setState({ contact })
    }


    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details-page flex column'>
                <header className='flex'>
                    <NavLink to='/contact' className="back">Back</NavLink>
                    <NavLink to={`/contact/edit/${contact._id}`} className="edit">Edit</NavLink>
                </header>
                <section className="contact flex column">
                    <div className="details-container flex column">
                        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                        <div className="details flex column">
                            <div className="name">{contact.name}</div>
                            <div className="phone">{contact.phone}</div>
                            <div className="email">{contact.email}</div>
                        </div>
                    </div>
                    <div className="transfer-container flex">
                        <input type="number" />
                        <button className="transfer">Transfer</button>
                    </div>
                </section>
                <section className="move-history flex column">
                    <div className="title">♻ Moves History</div>

                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>
                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>
                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>
                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>
                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>
                    <section className="move">
                        <div className="amount flex">
                            <span className="bit">&#8383; 0.72 |</span>
                            <span className="usd">{(6.048).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        </div>
                        <div className="status">
                            status: <span className='type'>approve</span>
                        </div>
                        <div className="timestamp">23.12.2017, 9:29:54</div>
                    </section>

                </section>

            </section>
        )
    }
}

