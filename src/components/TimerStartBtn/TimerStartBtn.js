import classes from './TimerStartBtn.module.css';
import nextbtn from '../../images/nextbtn.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const TimerStartBtn =()=> {
    const [changeColor,seChangeColor] = useState(true)
    const colorChangeData = useSelector(state => state.color.ChangeColorWebsiteData.backgound)
    const ChangeBtnColorHundler=()=> {
        if(colorChangeData === 'red') {
            return classes.btn+' '+ classes.red
        } else if(colorChangeData === 'seaGreen') {
            return classes.btn+' '+ classes.seaGreen
        } else if(colorChangeData === 'blue') {
            return classes.btn+' '+ classes.blue
        }
    }
    const BtnStartClickHundler=()=> {
        seChangeColor(!changeColor)
    }
    const BtnStopClickHundler=()=> {
        seChangeColor(!changeColor)
    }
    const BtnNextTimerClickHundler=()=> {
        seChangeColor(!changeColor)
    }
    return <div className={classes.box}>
        {changeColor? <button onClick={BtnStartClickHundler} className={ChangeBtnColorHundler()}>START</button> : ''}
        {!changeColor? <button onClick={BtnStopClickHundler} className={ChangeBtnColorHundler()}>STOP</button> : ''}
        {!changeColor? <img onClick={BtnNextTimerClickHundler} className={classes.icon} src={nextbtn} alt='nextTimerbtn'/> : ''}
    </div>
}
export default TimerStartBtn