import classes from './CardChameleon.module.css';
import { useSelector } from 'react-redux';
const CardChameleon =(props)=> {
    const colorChangeData = useSelector(state => state.color.ChangeColorWebsiteData.backgound)
    const ChangeCardColorHundler=()=> {
        if(colorChangeData === 'red') {
            return classes.redMenu
        } else if(colorChangeData === 'seaGreen') {
            return classes.seaGreenMenu
        } else if(colorChangeData === 'blue') {
            return classes.blueMenu
        }
    }
    return <div className={ChangeCardColorHundler()}>{props.children}</div>
}
export default CardChameleon