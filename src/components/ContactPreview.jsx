import React from 'react'
import { NavLink } from 'react-router-dom'

export function ContactPreview({ contact }) {
    function getInitials() {
        const { name } = contact
        return name.split(' ').reduce((initials, word, idx) => {
            if (idx > 1) return initials
            return initials += word[0]
        }, '')
    }
    return (
        <NavLink to={`/contact/${contact._id}`}>
            <section className='contact-preview'>
                <div className="img-container">
                    <div className="initials">{getInitials()}</div>
                    {/* <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" /> */}
                </div>
                <div className="contact-details">
                    <span className='name'>{contact.name}</span>
                    <span className='phone'>{contact.phone}</span>
                </div>
            </section>
        </NavLink>
    )
}