import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@material-ui/core";
import Header from "./Header"



const NotFound = () => {
    return (
        <div style={{  paddingBottom: '34px' }}>
        <Header/>
            {/*<SearchBar/>*/}
            <Box sx={{display: "flex"}}>
            <h1 style={{ marginLeft:'25%'}}>The item you are searching for is not found, <br/>please contact our customer service department <br/>at 207-6428 or leave us a private message on our <br/> Facebook page at <Link>https://www.facebook.com/SASOLIDWASTE</Link> </h1>
            </Box>
            <div>
                <Button variant={"contained"} component={Link} to='/' style={{ marginBlockStart: '3em', marginLeft: '40%'}}>
                    Back to Search
                </Button>

            </div>
        </div>
    );
};

export default NotFound;
