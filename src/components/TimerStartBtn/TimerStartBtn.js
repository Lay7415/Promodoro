import classes from './TimerStartBtn.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TimerReducerActions } from '../../store/TimerReducer';
import NextBtn from '../NextBtn/NextBtn';
const TimerStartBtn =()=> {
    const pause = useSelector(state => state.timer.pause)
    const firstClick = useSelector(state => state.timer.firstClick)
    const timerType = useSelector(state => state.timer.timerType)
    const dispatch = useDispatch()
    
    const changeBtnStartColorHundler=()=> {
        if(timerType === 'pomodoro') {
            return classes.startBtn+' '+ classes.red
        } else if(timerType === 'shortBreak') {
            return classes.startBtn+' '+ classes.seaGreen
        } else if(timerType === 'longBreak') {
            return classes.startBtn+' '+ classes.blue
        }
    }
    const changeBtnStopColorHundler=()=> {
        if(timerType === 'pomodoro') {
            return classes.stopBtn+' '+ classes.red
        } else if(timerType === 'shortBreak') {
            return classes.stopBtn+' '+ classes.seaGreen
        } else if(timerType === 'longBreak') {
            return classes.stopBtn+' '+ classes.blue
        }
    }
    const bunOnClick=()=> {
        if(pause) {
            return classes.box
        } else {
            return classes.box
        }
    }
    
    const btnClickHundler=()=> {
        dispatch(TimerReducerActions.changePauseValue(!pause))
        if(firstClick === 0){
            dispatch(TimerReducerActions.decrementMinutes())
            dispatch(TimerReducerActions.decrementFirstClick())
        }
    }
    
    return <div className={bunOnClick()}>
        {!pause? <button onClick={btnClickHundler} className={changeBtnStartColorHundler()}>START</button> : ''}
        {pause? <button onClick={btnClickHundler} className={changeBtnStopColorHundler()}>STOP</button> : ''}
        {pause? <NextBtn/> : ''}
    </div>
}
export default TimerStartBtn