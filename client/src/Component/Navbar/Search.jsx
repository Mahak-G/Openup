import { useState, useEffect } from 'react';
import { InputBase,List,ListItem,Box,styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';

const SearchContainer=styled(Box)`
    background: #f2f2f2;
    width: 38%;
    border-radius: 2px;
    margin-left:10px;
    display:flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: black;
`;

const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: white;
  background: black;
  margin-top: 36px;
  width: 35rem;
`;

const Search = () =>{
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)
    const getText = (text) => {
        setText(text);
        setOpen(false)
    }
    const getPost = useSelector(state => state.getPosts)
    const {posts} = getPost;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

return(
    <SearchContainer>
        <InputSearchBase 
            placeholder="Search for tags"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {
              text && 
              <ListWrapper hidden={open}>
                {
                  posts.filter(post => post.posttext.toLowerCase().includes(text.toLowerCase())).map(post => (
                    <ListItem>
                      <Link 
                        to={`/postdetail/${post.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {post.posttext}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </SearchContainer>
)
}

export default Search;