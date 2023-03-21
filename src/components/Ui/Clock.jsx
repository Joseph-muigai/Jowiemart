import React, { useEffect, useState } from 'react'
import '../../styles/clock.css'
const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
     
    let interval;
    const countdown = () => {
        const countDate = new Date('may 5, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        if (gap < 0) {
            clearInterval(interval.current);
        }
        setDays(textDay);
        setHours(textHour);
        setMinutes(textMinute);
        setSeconds(textSecond);
    }
    useEffect(() => {
        countdown();
        interval = setInterval(countdown, 1000);
        return () => clearInterval(interval);
    }, [])
  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className='text-white fs-3 mb-2'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>                
            </div>
            <span className='text-white fs-3 mb-2'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                <h5 className='text-white fs-6'>hours</h5>                
            </div>
            <span className='text-white fs-3 mb-2'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                <h5 className='text-white fs-6'>minutes</h5>                
            </div>
            <span className='text-white fs-3 mb-2'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className='text-white fs-3 mb-2'>{seconds}</h1>
                <h5 className='text-white fs-6'>seconds</h5>                
            </div>
            
        </div>
    </div>
  )
}

export default Clock