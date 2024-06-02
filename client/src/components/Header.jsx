

import { AppBar , Toolbar ,styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { routhPath } from '../routes/route';


const StyledAppBar =styled(AppBar)({
    backgroundColor: 'white',
    height: 64,
    color: 'black',
    '&> div > *' : {
        padding: 10,
        TextDecoration: 'none',
        color: 'inherit',
        marginRight: 20,
        fontSize: 15,
        fontWeight: 'bold',

    }
})

const Header = () => {
    const logo ="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routhPath.home}>
                <img src ={logo} alt ="logo" style={{ width: 95, margineBottom: 6 }} />
                </Link>
                <Link to={routhPath.create}> Post a job </Link>
                <Link to={routhPath.posts}> Find Jobs  </Link>
                   
                    
                   
            </Toolbar>
        </StyledAppBar>
    )
}
  export default Header ;