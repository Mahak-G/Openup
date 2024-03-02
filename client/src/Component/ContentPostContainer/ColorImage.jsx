import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Boxstyle = styled(Box)`  
    width: 40px;
    height: 20px;
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