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

function Dropdown2({selected2, setSelected2}) {
    const [isActive, setIsActive] = useState(false);
    
    const options = ["dawn", "shiny", "shy", "ending", "bubbly", "beauty", "potion", "lived", "revelation", "forever", "heavenly", "happiness", "joy", "luxury", "happiness", "peaceful", "glowing", "flammable", "crush", "maze", "lake", "flexible", "affection", "song", "glow", "poetic", "sadness", "melodic", "amazing", "evil", "enemy", "wealth", "calm", "scenic", "abundance", "nearness", "essence", "colorful", "rebirth", "wave", "spark", "tree", "luck", "hissing", "outline", "resonant", "luxurious", "secretive", "alignment", "peacefulness", "parasol", "travel", "means", "peak", "light", "vivid", "bashful", "conclusion", "energetic", "grace", "pleasure", "delight", "cheerful", "serene", "radiant", "fiery", "emotion", "amusement", "contentment", "tranquil", "gleaming", "fiery", "passion", "enmity", "prosperity", "serene", "profusion", "closeness", "spirit", "colorful", "renewal", "undulation", "glint", "branch", "fortune", "quietude", "shade", "journey", "way", "zenith"];

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
                {selected2}
                <ArrowDropDownIcon style={{color: 'white'}} onClick={handleIconClick}/>
            </DropdownBtn>
            {isActive && (
                <DropdownContent ref={menuRef}>
                    {options.map((option) => (
                        <DropdownItem onClick={(e) => {
                            setSelected2(option);
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

export default Dropdown2;