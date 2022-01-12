import classes from './TimerPage.module.css';
const TimerPage =()=> {
    const ChangeColorWebsite =()=> {
        if('somedata' === 'red') {
            return classes.redMenu
        } else if('somedata' === 'seaGreen') {
            return classes.seaGreenMenu
        } else if('somedata' === 'blue') {
            return classes.blueMenu
        }
    }
    return<div className={ChangeColorWebsite()}></div>
}
export default TimerPage