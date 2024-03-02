import React, { useRef, useState } from 'react';
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = styled(Box)`
    width: 120px;
    margin: 5px;
    user-select: none;
    background-color: #1D2125;
    color: white;
`;

const DropdownBtn = styled(Box)`
    padding: 15px 20px;
    background-color: #1D2125;
    color: white;
    font-weight: bold;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const DropdownContent = styled(Box)`
    width: 83%;
    height: 150px;
    padding: 10px;
    background-color: #1D2125;
    color: white;
    font-weight: 500;
    color: #333;
    top: 110%;
    left: 0;
    overflow: auto;
    position: relative;
`;

const DropdownItem = styled(Box)`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;
    color: white;
`;

function Dropdown1({selected1, setSelected1}) {
    const [isActive, setIsActive] = useState(false);

    const options = ["admirable", "adorable", "alluring", "angelic", "appealing",
    "beauteous", "bewitching", "captivating", "charming", "classy",
    "comely", "cute", "dazzling", "delicate", "delightful",
    "divine", "elegant", "enthralling", "enticing", "excellent",
    "exquisite", "fair", "fascinating", "fetching", "fine",
    "foxy", "good", "gorgeous", "graceful", "grand",
    "handsome", "ideal", "inviting", "lovely", "magnetic",
    "magnificent", "marvelous", "mesmeric", "nice", "pleasing",
    "pretty", "pulchritudinous", "radiant", "ravishing", "refined",
    "resplendent", "shapely", "slightly", "splendid", "statuesque",
    "stunning", "sublime", "superb", "symmetrical", "taking",
    "tantalizing", "teasing", "tempting", "winning",
    "wonderful"];

    const dropRef = useRef();
    const menuRef = useRef();
    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== dropRef.current) {
            setIsActive(false);
        }
    });

    const handleIconClick = (event) => {
        event.stopPropagation();
        setIsActive(!isActive);
    };
    
    return (
        <Dropdown>
            <DropdownBtn ref={dropRef} onClick={(e) => setIsActive(!isActive)}>
                {selected1}
                <ArrowDropDownIcon style={{color: 'white'}} onClick={handleIconClick}/>
            </DropdownBtn>
            {isActive && (
                <DropdownContent ref={menuRef} >
                    {options.map((option) => (
                        <DropdownItem onClick={(e) => {
                            setSelected1(option);
                            setIsActive(false);
                        }}>
                            {option}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            )}  
        </Dropdown>
    );
}

export default Dropdown1;