import React, { useRef, useState } from 'react';
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = styled(Box)`
    width: 120px;
    margin: 5px 0px 5px 5px;
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

function Dropdown3({selected3, setSelected3}) {
    const [isActive, setIsActive] = useState(false);

    const options = ["dog", "cow", "cat", "horse",
        "donkey", "tiger", "lion", "panther",
        "leopard", "cheetah", "bear", "elephant", "turtle", "tortoise", "crocodile",
        "rabbit", "porcupine", "hare", "hen",
        "pigeon", "albatross", "crow", "fish",
        "dolphin", "frog", "whale", "alligator",
        "eagle", "squirrel", "ostrich", "fox",
        "goat", "jackal", "emu", "armadillo",
        "eel", "goose", "wolf",
        "beagle", "gorilla", "chimpanzee", "monkey",
        "beaver", "orangutan", "antelope", "bat",
        "badger", "giraffe", "crab", "giant panda",
        "hamster", "cobra", "shark", "camel",
        "hawk", "deer", "chameleon", "hippopotamus",
        "jaguar", "chihuahua", "ibex",
        "lizard", "koala", "kangaroo", "iguana",
        "llama", "chinchillas", "dodo", "jellyfish",
        "rhinoceros", "hedgehog", "zebra", "possum",
        "wombat", "bison", "bull", "buffalo",
        "sheep", "meerkat", "mouse", "otter",
        "sloth", "owl", "vulture", "flamingo",
        "racoon", "mole", "duck", "swan",
        "lynx", "elk", "boar",
        "lemur", "mule", "baboon", "mammoth", "rat", "snake", "peacock"];

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
                {selected3}
                <ArrowDropDownIcon style={{color: 'white'}} onClick={handleIconClick}/>
            </DropdownBtn>
            {isActive && (
                <DropdownContent ref={menuRef}>
                    {options.map((option) => (
                        <DropdownItem onClick={(e) => {
                            setSelected3(option);
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

export default Dropdown3;