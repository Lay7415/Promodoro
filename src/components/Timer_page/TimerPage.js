import classes from './TimerPage.module.css';
import { useSelector } from 'react-redux';
const TimerPage =(props)=> {
    const colorChangeData = useSelector(state => state.color.ChangeColorWebsiteData.backgound)
    console.log(colorChangeData)
    const ChangeColorWebsiteHundler =()=> {
        if(colorChangeData === 'red') {
            return classes.box +' '+classes.redMenu
        } else if(colorChangeData === 'seaGreen') {
            return classes.box +' '+ classes.seaGreenMenu
        } else if(colorChangeData === 'blue') {
            return classes.box +' '+ classes.blueMenu
        }
    }
    return<div className={ChangeColorWebsiteHundler()}>{props.children}</div>
}
export default TimerPage