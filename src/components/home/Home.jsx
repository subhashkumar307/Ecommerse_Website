
import { Box, makeStyles } from '@material-ui/core';


//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#f2f2f2'
    },
    rightWrapper: {
        background: '#ffffff',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%'
    }
})


const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '83%'}}>
                       <Slide 
                            timer={true}
                            title="Deal of the Day"
                       />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src ={adURL} style={{width: 230, height: 'auto'}} />
                    </Box>
                </Box>
                <MidSection />
                <Slide
                    timer={false}
                    title="Discounts for You"
                />
                 <Slide
                    timer={false}
                    title="Suggested Items"
                />
                 <Slide
                    timer={false}
                    title="Top Selection"
                />
                 <Slide
                    timer={false}
                    title="Recommended Items"
                />
                 <Slide
                    timer={false}
                    title="BestSellers"
                />
            </Box>
        </div>
    )
}

export default Home;