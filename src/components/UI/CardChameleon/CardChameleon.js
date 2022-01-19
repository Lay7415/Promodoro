import classes from './CardChameleon.module.css';
import { useSelector } from 'react-redux';
const CardChameleon =(props)=> {
    const timerType = useSelector(state => state.timer.timerType)
    const ChangeCardColorHundler=()=> {
        if(timerType === 'pomodoro') {
            return classes.redMenu
        } else if(timerType === 'shortBreak') {
            return classes.seaGreenMenu
        } else if(timerType === 'longBreak') {
            return classes.blueMenu
        }
    }
    return <div className={ChangeCardColorHundler()}>{props.children}</div>
}
export default CardChameleon