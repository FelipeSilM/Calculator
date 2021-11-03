import React from 'react'
import './Button.css'

export default props => {

    let classes = 'button '
    classes += props.nums ? 'nums ' : ''
    classes += props.equals ? 'equals ' : ''
    classes += props.resets ? 'resets ' : ''
    classes += props.double ? 'double' : ''

    return (
        <button
            className={classes}
            onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}