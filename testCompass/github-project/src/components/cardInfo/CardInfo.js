import { CardInfoStyle } from "./CardInfoStyle";
import {LargeTypography, MediumTypography} from '../typography/Typography'

function CardInfo(props: props){
return(
    <>
    <CardInfoStyle>
    <LargeTypography>{props.number}</LargeTypography>
    <MediumTypography>{props.word}</MediumTypography>
    </CardInfoStyle>
    </>
)

}

export default CardInfo