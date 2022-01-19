import classes from './TimeSetting.module.css';
import Card from '../UI/Card/Card'; 
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TimerReducerActions } from '../../store/TimerReducer';
import { ModalWindowActions } from '../../store/ModalReducer';

const TimeSetting =()=> {
    const [pomodoro,setPomodoro] = useState(1);
    const [shortBreak,setShortBreak] = useState(1);
    const [longBreak,setLongBreak] = useState(1);
    const [longBreakInt,setLongBreakInt] = useState(2);
    const [autoStart,setAutoStart] = useState(false)
    const [autoBreak,setautoBreak] = useState(false)
    const timerType = useSelector(state => state.timer.timerType)
    const dispatch = useDispatch()


    const pomodoroValueChangeHundler =(event)=> {
        setPomodoro(event.target.value)
    }
    const shortBreakValueChangeHundler =(event)=> {
        setShortBreak(event.target.value)
    }
    const longBreakValueChangeHundler =(event)=> {
        setLongBreak(event.target.value)
    }
    const longBreakIntervalChangeHundler =(event)=> {
        setLongBreakInt(event.target.value)
    }
    const autoStartChangeHundler=(event)=> {
        setAutoStart(!autoStart)
    }
    const autoBreakChangeHundler=(event)=> {
        setautoBreak(!autoBreak)
    }
    const TimeSettingFormSubmitHundler =(event)=> {
        event.preventDefault()
        const TimeSettingInfo = {
            pomodoro: pomodoro,
            shortBreak: shortBreak,
            longBreak: longBreak,
            longBreakInt: longBreakInt,
            autoStart: autoStart,
            autoBreak:autoBreak,
        }
        dispatch(TimerReducerActions.changeTimeSetting({timeSettingData:TimeSettingInfo}))
        dispatch(TimerReducerActions.updateSeconds())
        dispatch(TimerReducerActions.newCount())
        dispatch(ModalWindowActions.clickActiveSettingModal())
        dispatch(TimerReducerActions.updateFirstClick())
        if(timerType === 'pomodoro') {
            dispatch(TimerReducerActions.changeTimerToPomodoro())
        }else if(timerType === 'shortBreak') {
            dispatch(TimerReducerActions.changeTimerToShortBreak())
        } else if(timerType === 'longBreak') {
            dispatch(TimerReducerActions.changeTimerToLongBreak())
        }
    }
    return <div className={classes.box}>
            <Card>
            <form onSubmit={TimeSettingFormSubmitHundler} className={classes.form}>
                <div>
                    <h2>TIME SETTING</h2>
                </div>
                <h3>Time(minutes)</h3>
                <div className={classes.box}>
                    <div>
                        <h4>Pomodoro</h4>
                        <input value={pomodoro} onChange={pomodoroValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Short break</h4>
                        <input value={shortBreak} onChange={shortBreakValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Long break</h4>
                        <input value={longBreak} onChange={longBreakValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                </div>
                <div className={classes.box}>
                    <h4>Auto start Breaks?</h4>
                    <label className={classes.switch}>
                        <input onChange={autoBreakChangeHundler} className={classes.check} type="checkbox"/>
                        <span className={classes.slider}></span>
                    </label>
                </div>
                <div className={classes.box}>
                    <h4>Auto start Pomodoros?</h4>
                    <label className={classes.switch}>
                        <input onChange={autoStartChangeHundler} className={classes.check} type="checkbox"/>
                        <span className={classes.slider}></span>
                    </label>
                </div>
                <div className={classes.box}>
                    <h4>Long Break interval</h4>
                    <input value={longBreakInt} onChange={longBreakIntervalChangeHundler} min={0} className={classes.input} type='number'/>
                </div>
                <button className={classes.button}>OK</button>
            </form>
        </Card>
    </div> 
}
export default TimeSetting