import { NavLink, withRouter } from "react-router-dom"

function _AppHeader(props) {

    function onBack() {
        props.history.goBack()
    }

    return (
        <header className='app-header'>
            <NavLink title="Home" exact to='/' className="app-title"><span className="bit">&#8383;</span>itCo<span className="coin">in</span><span className="connect">nect</span></NavLink>
            <nav className="nav-links">
                <NavLink title="Contacts" className="app-icon" to='/contact'>👫</NavLink>
                <NavLink title="Statistic" className="app-icon" exact to='/statistic'>📈</NavLink>
                {/* <button className="back" onClick={onBack}>⬅</button> */}
            </nav>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)