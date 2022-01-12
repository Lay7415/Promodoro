import classes from './TimerPage.module.css';
import { useSelector } from 'react-redux';
const TimerPage =(props)=> {
    const colorChangeData = useSelector(state => state.color.ChangeColorWebsiteData.websiteColor)
    console.log(colorChangeData)
    const ChangeColorWebsite =()=> {
        if(colorChangeData === 'red') {
            return classes.redMenu
        } else if(colorChangeData === 'seaGreen') {
            return classes.seaGreenMenu
        } else if(colorChangeData === 'blue') {
            return classes.blueMenu
        }
    }
    return<div className={ChangeColorWebsite()}>{props.children}</div>
}
export default TimerPage