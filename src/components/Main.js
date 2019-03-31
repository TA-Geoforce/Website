import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>

          <p>We help companies implement the right technology to enhance their operations, uncover new insights and strengthen their business.</p>
          <p>Big data, machine learning and predictive analysis has already evolved from being just a new exotic product to an essential mainstream instrument for many verticals & market sectors. T.A. Geoforce's dedicated team of data scientists, data analysts and developers is ready to execute a complete project of any scale — from initial data analysis & consulting to target models & software development, including integration into an existing IT landscape.</p>

          <p>T.A. Geoforce has been developing complete and integrated software featuring the tools professionals need for remote sensing, digital photogrammetry, image analysis, map production, mosaicking and more. Our strength lies in our uncompromising dedication to being second to none in the imagery processing pillars that are at the foundation of the geospatial world.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Tornadoes Loss</h3>
          <p><b>Tornadoes Loss</b> provides AI services for predicting the impact of tornadoes to the local economy. Direct losses result from the destruction of assets from the initial impact of the tornado and include the loss of human lives, roads, power and phone lines, crops, factories, homes, and natural resources.<br></br>
          While costs are harder to estimate than direct losses, indirect losses that occur from the destruction of physical assets can be quite significant. These losses include lost production and sales, incomes and labor time, increased commute times and transportation costs from goods having to be rerouted, decreased tourist activity, and utility disruptions. The decreased economic activity also results in lost taxable receipts and uses up federal disaster relief funds in order to help clean-up, repair, and replace lost assets.<br></br>
          <b>Tornadoes Loss</b> is a AI tool that can be used from local goverments to private sector (insurance, construction etc.).
          <br></br>
          <a href="https://tornadoesloss.z6.web.core.windows.net/" target="_blank" rel="noopener noreferrer" >...more info</a></p>

          <h3>Solar Power Estimator</h3>
          <p><b>Solar Power Estimator</b> is a WebGIS application for calculating the potential of electrical production installing photovoltaic panels. Also, provides AI analytics for predicting the cost of PV construction, the electric production and the changes of need to electrical power for the next years.
          <br></br>
          <a href="mailto:t.a.geoforce@gmail.com?Subject=Solar%20Power%20Estimator" target="_top">...more info</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h3>Company Location</h3>
          <p> Solonos 11th Str. Nea Ionia, <br></br>
              Attica, Greece 14231<br></br>
          <i class="fa fa-phone"></i> +30 2102718811<br></br>
          <a href="mailto:t.a.geoforce@gmail.com?Subject=Contact" target="_top"><i class="fa fa-envelope-o"></i> t.a.geoforce@gmail.com</a></p>
           <ul className="icons">
            <li><a href="https://twitter.com/TAGeoforce" target="_blank"  rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/company/t-a-geoforce" target="_blank"  rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/TA-Geoforce" target="_blank"  rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main