import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    navSect: {
        paddingTop: '5px', 
        paddingBottom: '10px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        backgroundColor: "#141417", 
        width: '35px', 
        marginRight: '2px'
    },
    configContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        position: 'absolute', 
        bottom: '5px'
    }, 
    icon: {
        color: 'grey',
        backgroundColor: 'transparent',
        '&:hover': {
            color: 'white'
        }
    }
    
}));