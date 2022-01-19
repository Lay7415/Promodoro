import classes from './TimerBtns.module.css';
import { TimerReducerActions } from '../../store/TimerReducer';
import { ModalWindowActions } from '../../store/ModalReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const TimerBtns =()=> {
    const timerType = useSelector(state => state.timer.timerType)
    const pause = useSelector(state => state.timer.pause)
    const dispatch = useDispatch()

    const promodoroBtnHundler=()=> {
        if(pause) {
            dispatch(ModalWindowActions.clickActiveBanModal())
            dispatch(ModalWindowActions.checkColorWithModalValue('pomodoro'))
        } else {
            dispatch((TimerReducerActions.defineTimer('pomodoro')))
            dispatch(TimerReducerActions.changeTimerToPomodoro())
            dispatch(TimerReducerActions.changePauseValue(false))
            dispatch(TimerReducerActions.updateSeconds())    
        }
    };
    const shortBreakBtnHundler=()=> {
        if(pause) {
            dispatch(ModalWindowActions.clickActiveBanModal())
            dispatch(ModalWindowActions.checkColorWithModalValue('shortBreak'))
        } else {
            dispatch((TimerReducerActions.defineTimer('shortBreak')))
            dispatch(TimerReducerActions.changeTimerToShortBreak())
            dispatch(TimerReducerActions.changePauseValue(false))
            dispatch(TimerReducerActions.updateSeconds())    
        }
   }
    const longBreakBtnHundler=()=> {
        if(pause) {
            dispatch(ModalWindowActions.clickActiveBanModal())
            dispatch(ModalWindowActions.checkColorWithModalValue('longBreak'))
        } else {
            dispatch((TimerReducerActions.defineTimer('longBreak')))
            dispatch(TimerReducerActions.changeTimerToLongBreak())
            dispatch(TimerReducerActions.changePauseValue(false))
            dispatch(TimerReducerActions.updateSeconds())    
        }
    }
    const promodoroBtnColorHundler =()=> {
        if(timerType === 'pomodoro') {
            return classes.btn+' '+classes.activebtn
        } else  {
            return classes.btn
        }

    }
    const shortBreackBtnColorHundler=()=> {
        if(timerType === 'shortBreak') {
            return classes.btn+' '+classes.activebtn
        } else {
            return classes.btn
        }
    };
    const longBreakBtnColorHundler =()=> {
        if(timerType === 'longBreak') {
            return classes.btn+' '+classes.activebtn
        } else {
            return classes.btn
        }
    }
    return <div className={classes.wrapBtns}>
        <button className={promodoroBtnColorHundler()} onClick={promodoroBtnHundler}>Pomodoro</button>
        <button className={shortBreackBtnColorHundler()} onClick={shortBreakBtnHundler}>Short Break</button>
        <button className={longBreakBtnColorHundler()} onClick={longBreakBtnHundler}>Long Break</button>
    </div>
}
export default TimerBtns