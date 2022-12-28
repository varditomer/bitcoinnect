import { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class ContactHeader extends Component {
    state = {
        filterBy: null
    }
    componentDidMount() {
        const { filterBy } = this.props
        this.setState({ filterBy: { ...filterBy } })
    }
    handleRef = (elInput) => {
        elInput?.focus()
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(
            prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onChangeFilter({ ...this.state.filterBy })
        )

    }

    render() {
        const { filterBy } = this.state
        if (!filterBy) return <div>Loading...</div>

        const { term } = filterBy
        return (
            <section className='contact-header'>
                <form className='contact-filter'>
                    <input ref={this.handleRef} onChange={this.handleChange} value={term} type="text" name="term" placeholder='Search' />
                </form>
                <NavLink to="/contact/edit" className="add">Add Contact</NavLink>
            </section>
        )
    }
}