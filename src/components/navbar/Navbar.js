import classes from './Navbar.module.css';
import Wrapper from '../Timer-page/Wrapper';
import { useSelector } from 'react-redux';
import TimeSetting from '../Time-Setting/TimeSetting';
import { useDispatch } from 'react-redux';
import Modal from '../UI/modal/Modal';
import { ModalWindowActions } from '../../store/ModalReducer';
import BanModalNext from '../banModalNext/BanModalNext';
import { TimerReducerActions } from '../../store/TimerReducer';
 const Navbar=()=> {
    const dispatch = useDispatch()
    const timerType = useSelector(state => state.timer.timerType)
    const activeModal = useSelector(state => state.modal.settingModal)
    const banModal = useSelector(state => state.modal.banModal)
    
    const setActiveModalWindow=()=> {
        dispatch(TimerReducerActions.changePauseValue(false))
        dispatch(ModalWindowActions.clickActiveSettingModal())
    }
    
    const changeBtnColorHundler=()=> {
        if(timerType === 'pomodoro') {
            return classes.btn+' '+ classes.red
        } else if(timerType === 'shortBreak') {
            return classes.btn+' '+ classes.seaGreen
        } else if(timerType === 'longBreak') {
            return classes.btn+' '+ classes.blue
        }
    }
     return<div>
         
         {activeModal && <Modal><TimeSetting/></Modal>}
         {banModal && <Modal><BanModalNext/></Modal>}
         <Wrapper>
             <div className={classes.box}>
                 <h1 className={classes.PomofocusTitle}>Pomofocus</h1>
                 <button onClick={setActiveModalWindow} className={changeBtnColorHundler()}>setting</button>
                 <button className={changeBtnColorHundler()}>Report</button>
             </div>
         </Wrapper>
     </div> 
 }
 export default Navbar