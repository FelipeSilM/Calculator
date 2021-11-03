import React from 'react'
import './ThemeBar.css'

export default props => {
    return (
        <div className="container-theme">
            <p>Tema</p>
            <div className="container-alternator" >
                <div className="container-text">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                </div>
                <div className="container-selector f-start" onClick={e => props.click && props.click('.container-selector')}>
                    <div className="selector"></div>
                </div>
            </div>
        </div>
    )
}