import { CardSearchStyle } from "./cardSearchStyle";
import { LargeTypographyWhite} from "../typography/Typography";
import { InputStyle } from "../input/InputStyle";
import  Submit  from '../submit/Submit'
import { FlexContainer } from "../flexContainer/FlexContainer";

function CardSearch(){
    return(
<CardSearchStyle>
        <LargeTypographyWhite>Search a Profile
        </LargeTypographyWhite>
        <FlexContainer>
            <div/>
            <InputStyle type="text"></InputStyle>
            <Submit ></Submit>
        </FlexContainer>
    
      </CardSearchStyle>  
)
}


export default CardSearch;
