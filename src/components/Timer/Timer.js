import classes from './Timer.module.css';
import CardChameleon from '../UI/CardChameleon/CardChameleon';
import TimerBtns from '../TimerBtns/TimerBtns';
import TimerStartBtn from '../TimerStartBtn/TimerStartBtn';
const Timer =()=> {
    return <div className={classes.box}>
        <CardChameleon>
            <TimerBtns/>
            <div className={classes.Timer}></div>
            <TimerStartBtn/>
        </CardChameleon>
    </div>
}
export default Timer