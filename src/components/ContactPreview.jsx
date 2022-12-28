import React from 'react'
import { NavLink } from 'react-router-dom'

export function ContactPreview({ contact }) {
    return (
        <NavLink to={`/contact/${contact._id}`}>
            <section className='contact-preview'>
                <div className="img-container">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                </div>
                <div className="contact-details">
                    <span className='name'>{contact.name}</span>
                    <span className='phone'>{contact.phone}</span>
                </div>
            </section>
        </NavLink>
    )
}