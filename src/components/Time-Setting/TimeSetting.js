import classes from './TimeSetting.module.css';
import Card from '../UI/Card/Card'; 
import {useDispatch} from 'react-redux'
import { TimerReducerActions } from '../../store/TimerReducer';
import { useState } from 'react';
const TimeSetting =()=> {
    const dispatch = useDispatch()
    const [promodoro,setPromodoro] = useState();
    const [shortBreak,setShortBreak] = useState();
    const [longBreak,setLongBreak] = useState();
    const [autoBreak,setAutoBreak] = useState(false);
    const [autoStart,setAutoStart] = useState(false);
    const [longBreakInt,setLongBreakInt] = useState()

    const promodoroValueChangeHundler =(event)=> {
        setPromodoro(event.target.value)
    }
    const shortBreakValueChangeHundler =(event)=> {
        setShortBreak(event.target.value)
    }
    const longBreakValueChangeHundler =(event)=> {
        setLongBreak(event.target.value)
    }
    const autoBreakValueChangeHundler =()=> {
        setAutoBreak(!autoBreak)
    }
    const autoStartValueChangeHundler =()=> {
        setAutoStart(!autoStart)
    }
    const longBreakIntervalChangeHundler =(event)=> {
        setLongBreakInt(event.target.value)
    }
    const TimeSettingFormSubmitHundler =(event)=> {
        event.preventDefault()
        const TimeSettingInfo = {
            promodoro: promodoro,
            shortBreak: shortBreak,
            longBreak: longBreak,
            autoBreak: autoBreak,
            autoStart: autoStart,
            longBreakInt: longBreakInt,
        }
        dispatch(TimerReducerActions.ConsoleLog(TimeSettingInfo))
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
                        <h4>Promodoro</h4>
                        <input onChange={promodoroValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Short break</h4>
                        <input onChange={shortBreakValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Long break</h4>
                        <input onChange={longBreakValueChangeHundler} min={0} className={classes.input} type='number'/>
                    </div>
                </div>
                <div className={classes.box}>
                    <h4>Auto start Breaks?</h4>
                    <label className={classes.switch}>
                        <input onChange={autoBreakValueChangeHundler} className={classes.check} type="checkbox"/>
                        <span className={classes.slider}></span>
                    </label>
                </div>
                <div className={classes.box}>
                    <h4>Auto start Pomodoros?</h4>
                    <label className={classes.switch}>
                        <input onChange={autoStartValueChangeHundler} className={classes.check} type="checkbox"/>
                        <span className={classes.slider}></span>
                    </label>
                </div>
                <div className={classes.box}>
                    <h4>Long Break interval</h4>
                    <input onChange={longBreakIntervalChangeHundler} min={0} className={classes.input} type='number'/>
                </div>
                <button className={classes.button}>OK</button>
            </form>
        </Card>
    </div> 
}
export default TimeSetting