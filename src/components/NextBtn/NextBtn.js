import classes from './NextBtn.module.css';
import nextbtn from '../../../src/accets/images/nextbtn.png'
import { useDispatch } from 'react-redux';
import { ModalWindowActions } from '../../store/ModalReducer';
import { TimerReducerActions } from '../../store/TimerReducer';
const NextBtn =()=> {
    const dispatch = useDispatch()
    const nextBtnHundler=()=> {
        dispatch(TimerReducerActions.changePauseValue(false))
        dispatch(ModalWindowActions.clickActiveBanModal())
        dispatch(ModalWindowActions.changeNextValue(true))
    }
    return <img onClick={nextBtnHundler} className={classes.nextBtn} src={nextbtn} alt='next_button' />
}
export default NextBtn