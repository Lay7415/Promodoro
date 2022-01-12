import classes from './Timer.module.css'
import CardChameleon from '../UI/CardChameleon/CardChameleon'
import TimerBtns from '../TimerBtns/TimerBtns'
const Timer =()=> {
    return <div className={classes.box}>
        <CardChameleon>
            <TimerBtns/>
            <div></div>
        </CardChameleon>
    </div>
}
export default Timer