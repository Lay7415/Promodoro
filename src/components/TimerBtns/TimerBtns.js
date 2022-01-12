import classes from './TimerBtns.module.css';
import { ColorReducerActions } from '../../store/ColorReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const TimerBtns =()=> {
    const [color,setColor] = useState(classes.redBtn);
    const colorChangeData = useSelector(state => state.color.ChangeColorWebsiteData.blackEffect)
    const dispatch = useDispatch()

    function promodoroBtnHundler() {
        setColor(classes.redBtn)
        dispatch(ColorReducerActions.ChangeColorMenu({backgound:'red',blackEffect:'red'}))
    };
    function shortBreakBtnHundler() {
        setColor(classes.seaGreenBtn)
        dispatch(ColorReducerActions.ChangeColorMenu({backgound:'seaGreen',blackEffect:'seaGreen'}))
   }
    function longBreakBtnHundler() {
        setColor(classes.blueBtn)
        dispatch(ColorReducerActions.ChangeColorMenu({backgound:'blue',blackEffect:'blue'}))
    }
    const promodoroBtnColorHundler =()=> {
        if(colorChangeData === 'red') {
            return color+' '+classes.activebtn
        } else  {
            return color
        }

    }
    const shortBreackBtnColorHundler=()=> {
        if(colorChangeData === 'seaGreen') {
            return color+' '+classes.activebtn
        } else {
            return color
        }
    };
    const longBreakBtnColorHundler =()=> {
        if(colorChangeData === 'blue') {
            return color+' '+classes.activebtn
        } else {
            return color
        }
    }
    return <div className={classes.wrapBtns}>
        <button className={promodoroBtnColorHundler()} onClick={promodoroBtnHundler}>Pomodoro</button>
        <button className={shortBreackBtnColorHundler()} onClick={shortBreakBtnHundler}>Short Break</button>
        <button className={longBreakBtnColorHundler()} onClick={longBreakBtnHundler}>Long Break</button>
    </div>
}
export default TimerBtns