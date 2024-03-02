import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Boxstyle = styled(Box)`  
    width: 1.5%;
    height: 1.5%;
    border-radius: 50%;
    margin-left: 10px;
    padding: 1.7% 1% 1.7% 1%;
`;

export default function ColorImage({curcolor}){
    const boxsty = {
        backgroundColor: curcolor
    }

    return (
        <Boxstyle style={boxsty}>
        </Boxstyle>
    )

}