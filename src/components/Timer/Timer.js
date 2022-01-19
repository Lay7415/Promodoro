import classes from './Timer.module.css';
import CardChameleon from '../UI/CardChameleon/CardChameleon';
import TimerBtns from '../TimerBtns/TimerBtns';
import TimerStartBtn from '../TimerStartBtn/TimerStartBtn';
import { TimerReducerActions } from '../../store/TimerReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Timer =()=> {
    const dispatch = useDispatch()
    const minutes = useSelector(state => state.timer.minutes)
    const seconds = useSelector(state => state.timer.seconds)
    const pause = useSelector(state => state.timer.pause)
    const timerType = useSelector(state => state.timer.timerType)
    const autoStart = useSelector(state => state.timer.timeSettingData.autoStart)
    const autoBreak = useSelector(state => state.timer.timeSettingData.autoBreak)
    const count = useSelector(state => state.timer.count)
    const longBreakInt = useSelector(state => state.timer.timeSettingData.longBreakInt)
    const [withZero, setWithZero] = useState(false)
    const [doubleZero, setShowDoubleZero] = useState(false)
    const longBreakInterval = parseInt(longBreakInt, 10)

    function timerHundler() {
        if(seconds > 0) {
            setTimeout(() => {
                dispatch(TimerReducerActions.decrementSeconds())
            }, 100)
        }else if(minutes > 0 && seconds === 0) {
            dispatch(TimerReducerActions.decrementMinutes())
            dispatch(TimerReducerActions.updateSeconds())
        }
    }
    function autoFunctionHundler() {
        if(seconds === 0 && minutes === 0) {
            dispatch(TimerReducerActions.incrementCount())
            if(autoBreak && timerType === 'shortBreak') {
                dispatch(TimerReducerActions.changeTimerToPomodoro())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
            } else if(count < longBreakInterval && autoBreak && timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToShortBreak())
                dispatch((TimerReducerActions.defineTimer('shortBreak')))
            } else if(count === longBreakInterval && autoBreak && timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToLongBreak())
                dispatch((TimerReducerActions.defineTimer('longBreak')))
            } else if(autoStart && timerType === 'longBreak') {
                dispatch(TimerReducerActions.newCount())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
                dispatch(TimerReducerActions.changeTimerToPomodoro())
            }
        }
    }
    useEffect(() => {
        if(seconds < 10) {
            setWithZero(true)
        } else if(seconds > 10) {
            setWithZero(false)
        }

        if(pause) {   
            timerHundler();
            autoFunctionHundler();

        }
    }, [seconds,pause,minutes])

    return <div className={classes.box}>
        <CardChameleon>
            <TimerBtns/>
            <div className={classes.timer}>{minutes}:{withZero? 0 : ''}{doubleZero? 0 : seconds }</div>
            <TimerStartBtn/>
        </CardChameleon>
    </div>
}
export default Timer