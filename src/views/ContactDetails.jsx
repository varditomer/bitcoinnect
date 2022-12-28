import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { MoveList } from '../components/MoveList'
import { bitcoinService } from '../services/bitcoin.service'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'

export class ContactDetails extends Component {
    state = {
        contact: null,
        bitRate: null,
        loggedinUser: userService.getUser(),
    }

    getBitRate = async () => {
        const bitRate = await bitcoinService.getRate()
        this.setState({ bitRate })
    }

    componentDidMount() {
        this.loadContact()
        this.getBitRate()

    }
    loadContact = async () => {
        const id = this.props.match.params.id
        const contact = await contactService.getContactById(id)
        this.setState({ contact })
    }
    makeTransfer = (ev) => {
        ev.preventDefault()
        const amount = +ev.target[0].value
        userService.addMove(this.state.contact, amount)
        this.setState({ loggedinUser: userService.getUser() })
    }
    getInitials() {
        const { name } = this.state.contact
        return name.split(' ').reduce((initials, word, idx) => {
            if (idx > 1) return initials
            return initials += word[0]
        }, '')
    }


    render() {
        const { contact, bitRate, loggedinUser } = this.state
        if (!contact || !loggedinUser || !bitRate) return <div>Loading...</div>
        return (
            <section className='contact-details-page flex column'>
                <header className='flex'>
                    <NavLink to='/contact' className="back">Back</NavLink>
                    <NavLink to={`/contact/edit/${contact._id}`} className="edit">Edit</NavLink>
                </header>
                <section className="contact flex column">
                    <div className="details-container flex column">
                        <div className="initials">{this.getInitials()}</div>
                        <div className="details flex column">
                            <div className="name">{contact.name}</div>
                            <div className="phone">{contact.phone}</div>
                            <div className="email">{contact.email}</div>
                        </div>
                    </div>
                    <form className="transfer-container flex" onSubmit={this.makeTransfer}>
                        <input type="number" />
                        <button className="transfer" type="submit">Transfer</button>
                    </form>
                </section>
                <MoveList loggedinUser={loggedinUser} contact={contact} bitRate={bitRate} />

            </section>
        )
    }
}

