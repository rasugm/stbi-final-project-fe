import { useEffect, useState } from 'react';

interface CountdownTimerProps {
	expiredDate: Date;
}

const CountdownTimer = ({ expiredDate }: CountdownTimerProps) => {

    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [timeRemaining, setTimeRemaining] = useState<{
		seconds: number;
	}>(calculateTimeRemaining(currentTime, expiredDate));

    function calculateTimeRemaining(currentTime: Date, expireTime: Date) {
        const timeDiff = Math.max(expireTime.getTime() - currentTime.getTime(), 0);
        const seconds = Math.floor((timeDiff / 1000));
        return {
            seconds,
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newCurrentTime = new Date();
            setCurrentTime(newCurrentTime);
			
            if(newCurrentTime.getTime() > expiredDate.getTime()){
                setTimeRemaining({ seconds: 0 });
                return;
            } else {
                setTimeRemaining(calculateTimeRemaining(newCurrentTime, expiredDate));
            }
            
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [expiredDate]);



    if(timeRemaining.seconds === 0){
        return 0;
    } else {
        return timeRemaining.seconds;
    }
};

export default CountdownTimer;