import classes from './BanModal.module.css';
import Card from '../UI/Card/Card';
import { ModalWindowActions } from '../../store/ModalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { TimerReducerActions } from '../../store/TimerReducer';
const BanModalNext =()=> {
    const timerType = useSelector(state => state.timer.timerType)
    const nextValue = useSelector(state => state.modal.next)
    const checkedColorWithModal = useSelector(state => state.modal.checkedColorWithModal)
    const count = useSelector(state => state.timer.count)
    const longBreakInt = useSelector(state => state.timer.timeSettingData.longBreakInt)
    const longBreakInterval = parseInt(longBreakInt, 10)
    
    const dispatch = useDispatch()
    const checkOnlyWhithCheckedModal=()=> {
        if(checkedColorWithModal === 'pomodoro') {
            dispatch(TimerReducerActions.changeTimerToPomodoro())
        }else if(checkedColorWithModal === 'shortBreak') {
            dispatch(TimerReducerActions.changeTimerToShortBreak())
        } else if(checkedColorWithModal === 'longBreak') {
            dispatch(TimerReducerActions.changeTimerToLongBreak())
        }
    }
    const checkWhithTimerTypeAndNextValue=()=> {
        if(nextValue) {
            dispatch(TimerReducerActions.incrementCount())
            if( timerType === 'shortBreak') {
                dispatch(TimerReducerActions.changeTimerToPomodoro())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
            } else if(count < longBreakInterval &&  timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToShortBreak())
                dispatch((TimerReducerActions.defineTimer('shortBreak')))
            } else if(count === longBreakInterval &&  timerType === 'pomodoro') {
                dispatch(TimerReducerActions.changeTimerToLongBreak())
                dispatch((TimerReducerActions.defineTimer('longBreak')))
            } else if( timerType === 'longBreak') {
                dispatch(TimerReducerActions.newCount())
                dispatch((TimerReducerActions.defineTimer('pomodoro')))
                dispatch(TimerReducerActions.changeTimerToPomodoro())
            }
        }
    }
    const OKClickHundler=()=> {
        checkWhithTimerTypeAndNextValue()
        checkOnlyWhithCheckedModal()
        dispatch(ModalWindowActions.changeNextValue(false))
        dispatch(TimerReducerActions.changePauseValue(false))
        dispatch(TimerReducerActions.updateSeconds())
        dispatch(ModalWindowActions.clickActiveBanModal())
    }
    const CancelClickHundler=()=> {
        dispatch(ModalWindowActions.clickActiveBanModal())
    }
    return <div className={classes.boxSize}>
        <Card>
            <div className={classes.content}>
                <p>Подтвердите действие на странице <b>pomofocuse.io</b></p>
                <p>The timer is still running, are you sure you want to switch?</p>
                <div className={classes.btnBox}>
                    <button className={classes.okBtn} onClick={OKClickHundler}>OK</button>
                    <button className={classes.cancelBtn} onClick={CancelClickHundler}>Cancel</button>
                </div>
            </div>
        </Card>
    </div>
}
export default BanModalNext