

import Header from "../components/Header";
import { Box, Typography ,Button , styled} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";

const Componenet =styled(Box)({
   display: 'flex',
   height: '100vh',
   alignItems: 'center',
   margin: '0 110px',
   '&> div':{
    width:'50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    '&> p':{
        fontSize: 56,
        lineHeight: 1.25,
        laterSpacing: -1,
    },
    ' & > button': {
        width: 220,
        height: 60,
        background: 'rgb(37,87,167)',
        textTransform: 'none',
        fontSize: 16,
        fontWeight:700,
        marginTop:48
    }
   }
})

const Home =() => {
    const navigate = useNavigate();


    const animatedImage="https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-300x169.jpg ";
    return (
        <div>
             <Header/>
             <Componenet>
                <Box>
                      <Typography>let's make your next <br/> great hire. Fast </Typography>
                      <Button variant="contained" onClick={() => navigate(routhPath.create)} >Post a Job</Button>
                </Box>
                <Box>
                        <img src={animatedImage} alt= "home" style={{width: 600}} />
                 </Box>
                
             </Componenet>

        </div>
       
    )
}
 export default Home;