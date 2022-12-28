import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { NavLink } from 'react-router-dom'



export class ContactEdit extends Component {
    state = {
        contact: contactService.getEmptyContact()
    }

    componentDidMount() {
        const contactId = this.props.match.params.id
        if (!contactId) return
        this.loadContact()
    }

    loadContact = async () => {
        const id = this.props.match.params.id
        const contact = await contactService.getContactById(id)
        this.setState({ contact })
    }

    submitContact = async (ev) => {
        ev.preventDefault()
        const { contact } = this.state
        try {
            await contactService.saveContact({ ...contact })
            const backUrl = contact._id ? `/contact/${contact._id}` : '/contact'
            this.props.history.push(backUrl)
        } catch (err) {
            console.log('err:', err)
        }
    }

    handleChange = ({ target }) => {
        const { name: field, value } = target
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    deleteContact = async () => {
        try {
            await contactService.deleteContact(this.state.contact._id)
            this.props.history.push('/contact')
        } catch (err) {
            console.log('error deleting contact:', err)
        }
    }

    render() {
        const { contact } = this.state
        return (

            <section className='contact-edit flex column'>
                <header className='flex'>
                    <NavLink to='/contact' className="back">Back</NavLink>
                    <NavLink to='/contact' className="Remove">Remove</NavLink>
                </header>
                <section className="contact flex column">
                    <h2>{contact._id ? 'Edit Contact' : 'Add Contact'}</h2>
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                    <form onSubmit={this.submitContact} className='flex column'>
                        <input onChange={this.handleChange} value={contact.name} type='text' name='name' />
                        <input onChange={this.handleChange} value={contact.email} type='email' name='email' />
                        <input onChange={this.handleChange} value={contact.phone} type='phone' name='phone' />
                        <button>Save</button>
                    </form>
                </section>
            </section>

        )
    }
}