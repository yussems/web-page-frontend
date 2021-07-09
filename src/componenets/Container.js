import React from 'react'
import './Container.scss'
import Content from './Content'

function Container() {
    
    return (
        <div className='big-Box'>
            <input type="checkbox"   id='check' />
            <div className="title">
                <h3>Choose your plan</h3>
                <label  htmlFor='check'  >
                    <span>Monthly</span>
                    <span>Yearly</span>
                </label>
            </div>
            <div className='packages-box'>
            <Content />
            </div>
        </div>
    )
}

export default Container
