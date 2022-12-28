import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactHeader } from '../components/ContactHeader'
export class ContactIndex extends Component {
    state = {
        contacts: [],
        filterBy: {
            term: ''
        }
    }
    componentDidMount() {
        this.loadContacts()
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact'>
                <ContactHeader onChangeFilter={this.onChangeFilter} filterBy={filterBy} />

                <ContactList contacts={contacts} />
            </section>
        )
    }
}