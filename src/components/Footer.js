import React from 'react'
import PropTypes from 'prop-types'

let date = new Date();
let year = date.getFullYear();

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {year}. T.A. Geoforce PC - All Right Reserved.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
