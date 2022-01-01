import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


function Header( { title } ) {
    const onClick = () => {
        console.log("Clicked Props")
    }


    return (
        <div >
            <h1 className="head"> { title } </h1>
            <Button text="Add" color="lightblue" onClick={onClick}  /> 
        </div>
    )
}

Header.defaultProps = {
    title: 'Enter Props in parent Component',
}   


Header.propTypes = {
    title: PropTypes.string.isRequired,
    
}
export default Header
