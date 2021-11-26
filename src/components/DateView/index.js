import React from "react";
import './styles.scss'
import prepareDate from "utils/prepareDate";

const DateView =(props)=>{
    const {day,month} = prepareDate(props.value)
    return(
        <p className='dateView'>
            <span className='day'>{day}</span> / 
            <span className='month'>{month}</span>
        </p>
    )
}
export default DateView