import React from "react";
import './styles.scss'
import prepareDate from "utils/prepareDate";


interface IDateViewParams {
    value:string
}
const DateView : React. FC <IDateViewParams>=({value})=>{

    const {day,month} = prepareDate(value)
    return(
        <p className='dateView'>
            <span className='day'>{day}</span> / 
            <span className='month'>{month}</span>
        </p>
    )
}
export default DateView