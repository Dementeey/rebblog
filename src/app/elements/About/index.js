import React from 'react'
import PropTypes from 'prop-types'

const About = ({ title, text }) => (
  <div className="about__wrapper">
    <h2>{title || 'Default title'}</h2>
    <p>{text || 'Default text'}</p>
  </div>
)

About.propTypres = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default About
