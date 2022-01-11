import { CardProfileStyle } from "./CardProfileStyle";
import {MediumTypography} from "../typography/Typography"
import {FlexContainer} from '../flexContainer/FlexContainer'
import CardInfo from "../cardInfo/CardInfo"


function CardProfile(){
return(
<CardProfileStyle>
    <div class="foto">foto</div>
    <MediumTypography>Nome </MediumTypography>
    <FlexContainer>
    <CardInfo></CardInfo>
    <CardInfo></CardInfo>   
    <CardInfo></CardInfo>           
    </FlexContainer>
</CardProfileStyle>
)
}

export default CardProfile