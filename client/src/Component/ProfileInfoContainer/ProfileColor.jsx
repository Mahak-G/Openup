import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Boxstyle = styled(Box)`  
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
    padding: 1.7% 1% 1.7% 1%;
`;

export default function ProfileColor({curcolor}){
    const boxsty = {
        backgroundColor: curcolor
    }

    return (
        <Boxstyle style={boxsty}>
        </Boxstyle>
    )

}