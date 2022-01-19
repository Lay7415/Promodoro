import classes from './Wrapper.module.css';
import { useSelector } from 'react-redux';
const Wrapper =(props)=> {
    const timerType = useSelector(state => state.timer.timerType)

    const ChangeColorWebsiteHundler =()=> {
        if(timerType === 'pomodoro') {
            return classes.box +' '+classes.redMenu
        } else if(timerType === 'shortBreak') {
            return classes.box +' '+ classes.seaGreenMenu
        } else if(timerType === 'longBreak') {
            return classes.box +' '+ classes.blueMenu
        }
    }
    return<div className={ChangeColorWebsiteHundler()}>{props.children}</div>
}
export default Wrapper