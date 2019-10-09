import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-globe"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>T.A. Geoforce</h1>
                <p>Release the power of data <br/>
                 using AI power.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a  onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a  onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
