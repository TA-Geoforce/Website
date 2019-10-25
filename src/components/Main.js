import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Main = (props) => (
//class Main extends React.Component {

<StaticQuery
    query={graphql`
    query {
      pic01: file(relativePath: { eq: "pic01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  
      pic02: file(relativePath: { eq: "pic02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  
      pic03: file(relativePath: { eq: "pic03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}

    render={data => {

    let close = (
      <div
        className="close"
        onClick={() => {
          props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={props.setWrapperRef}
        id="main"
        style={props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${props.article === 'intro' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <Img fluid={data.pic01.childImageSharp.fluid} />
          </span>

          <p>
            We help companies implement the right technology to enhance their
            operations, uncover new insights and strengthen their business.
          </p>
          <p>
            Big data, machine learning and predictive analysis has already
            evolved from being just a new exotic product to an essential
            mainstream instrument for many verticals & market sectors. T.A.
            Geoforce's dedicated team of data scientists, data analysts and
            developers is ready to execute a complete project of any scale —
            from initial data analysis & consulting to target models & software
            development, including integration into an existing IT landscape.
          </p>

          <p>
            T.A. Geoforce has been developing complete and integrated software
            featuring the tools professionals need for remote sensing, digital
            photogrammetry, image analysis, map production, mosaicking and more.
            Our strength lies in our uncompromising dedication to being second
            to none in the imagery processing pillars that are at the foundation
            of the geospatial world.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${props.article === 'work' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <Img fluid={data.pic01.childImageSharp.fluid} />
          </span>
          <h3>Natural Disasters Loss</h3>
          <p>
            <b>Natural Disasters</b> provides AI services for predicting the
            impact of natural disasters to the local economy. Direct losses
            result from the destruction of assets from the initial impact of the
            natural disasters and include the loss of human lives, roads, power
            and phone lines, crops, factories, homes, and natural resources.
            <br />
            While costs are harder to estimate than direct losses, indirect
            losses that occur from the destruction of physical assets can be
            quite significant. These losses include lost production and sales,
            incomes and labor time, increased commute times and transportation
            costs from goods having to be rerouted, decreased tourist activity,
            and utility disruptions. The decreased economic activity also
            results in lost taxable receipts and uses up federal disaster relief
            funds in order to help clean-up, repair, and replace lost assets.
            <br />
            <b>Natural Disasters Loss</b> is a AI tool that can be used from
            local goverments to private sector (insurance, construction etc.).
            <br />
            <a
              href="https://naturaldisastersloss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ...more info
            </a>
          </p>

          <h3>Solar Power Estimator</h3>
          <p>
            <b>Solar Power Estimator</b> is a WebGIS application for calculating
            the potential of electrical production installing photovoltaic
            panels. Also, provides AI analytics for predicting the cost of PV
            construction, the electric production and the changes of need to
            electrical power for the next years.
            <br />
            <a
              href="mailto:info@tageoforce.com?Subject=Solar%20Power%20Estimator"
              target="_top"
            >
              ...more info
            </a>
          </p>
          <br />
          <form method="get" action="/brochure/TA_Geoforce.pdf">
            <button type="submit">Download Brochure</button>
          </form>
          {close}
        </article>

        <article
          id="about"
          className={`${props.article === 'about' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <Img fluid={data.pic03.childImageSharp.fluid} />
          </span>
          <h3>Company Location</h3>
          <p>
            {' '}
            Saggariou 8th Str. Nea Ionia, <br />
            Attica, Greece 14231
            <br />
            <i className="fa fa-phone" /> +30 2114136007
            <br />
            <a
              href="mailto:info@tageoforce.com?Subject=Contact"
              target="_top"
            >
              <i className="fa fa-envelope-o" /> info@tageoforce.com
            </a>
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/TAGeoforce"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tageoforce"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/t-a-geoforce"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TA-Geoforce"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }}
/>
)

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
