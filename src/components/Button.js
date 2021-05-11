import React from 'react'
import PropTypes from 'prop-types'

const Button=({color,name,onShow})=> {
    return <button style={{backgroundColor:color,float:'right'}} onClick={onShow} className="btn">{name}</button>
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    name:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
