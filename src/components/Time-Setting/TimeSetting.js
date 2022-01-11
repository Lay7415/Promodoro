import classes from './TimeSetting.module.css';
import Card from '../UI/Card/Card';
const TimeSetting =()=> {
    return <div className={classes.box}>
            <Card>
            <form className={classes.form}>
                <div>
                    <h2>TIME SETTING</h2>
                </div>
                <h3>Time(minutes)</h3>
                <div className={classes.box}>
                    <div>
                        <h4>Promodoro</h4>
                        <input min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Short break</h4>
                        <input min={0} className={classes.input} type='number'/>
                    </div>
                    <div>
                        <h4>Long break</h4>
                        <input min={0} className={classes.input} type='number'/>
                    </div>
                </div>
                <div className={classes.box}>
                <h4>Auto start Breaks?</h4>
                <label className={classes.switch}>
                <input className={classes.check} type="checkbox"/>
                <span className={classes.slider}></span>
                </label>
                </div>
                <div className={classes.box}>
                <h4>Auto start Pomodoros?</h4>
                <label className={classes.switch}>
                <input className={classes.check} type="checkbox"/>
                <span className={classes.slider}></span>
                </label>
                </div>
                <div className={classes.box}>
                    <h4>Long Break interval</h4>
                    <input min={0} className={classes.input} type='number'/>
                </div>
                <button className={classes.button}>OK</button>
            </form>
        </Card>
    </div> 
}
export default TimeSetting