import classes from './Timer.module.css';
import CardChameleon from '../UI/CardChameleon/CardChameleon';
import TimerBtns from '../TimerBtns/TimerBtns';
import TimerStartBtn from '../TimerStartBtn/TimerStartBtn';
import { TimerReducerActions } from '../../store/TimerReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ModalWindowActions } from '../../store/ModalReducer';
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
            if(autoStart && timerType === 'shortBreak') {
                dispatch(TimerReducerActions.changeTimerToPomodoro())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
                dispatch(ModalWindowActions.changeNextValue(true))
                dispatch(TimerReducerActions.incrementCount())
            } else if(count < longBreakInterval && autoBreak && timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToShortBreak())
                dispatch((TimerReducerActions.defineTimer('shortBreak')))
                dispatch(ModalWindowActions.changeNextValue(true))
            } else if(count === longBreakInterval && autoBreak && timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToLongBreak())
                dispatch((TimerReducerActions.defineTimer('longBreak')))
                dispatch(ModalWindowActions.changeNextValue(true))
            } else if(autoStart && timerType === 'longBreak') {
                dispatch(TimerReducerActions.newCount())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
                dispatch(ModalWindowActions.changeNextValue(true))
                dispatch(TimerReducerActions.changeTimerToPomodoro())
            }
        }
    }
    function checkMinutes() {
        if(minutes < 10) {
            return `0${minutes}`
        } else if(minutes > 9) {
            return minutes
        }
    }
    function checkSeconds() {
        if(seconds < 10) {
            return `0${seconds}` 
        } else if(seconds > 9 && seconds < 60) {
            return seconds
        } else if(seconds === 60) {
            return '00'
        }
    }
    useEffect(() => {
        if(pause) {   
            timerHundler();
            autoFunctionHundler();

        }
    }, [seconds,pause,minutes])

    return <div className={classes.box}>
        <CardChameleon>
            <TimerBtns/>
            <div className={classes.timer}>{checkMinutes()}:{checkSeconds()}</div>
            <TimerStartBtn/>
        </CardChameleon>
    </div>
}
export default Timer