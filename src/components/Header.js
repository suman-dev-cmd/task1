import React from 'react'
import PropTypes from 'prop-types'


const Header=({title})=> {
    return (
        <>
            <h1 style={headingStyle}>{title}</h1>
        </>
    )
}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title:PropTypes.string
}
const headingStyle = {
    color:'red',
    backgroundColor:'black'
}
export default Header
