import { createStyles } from "@mantine/core";


export default createStyles((theme) =>({
    container: {
        width: 'auto',
        padding: '4px 4px 0px 4px',
        height: '30px', 
        display: 'flex', 
        backgroundColor: '#282f42',
        position: 'absolute', 
        left: '21.5vh',
        top: '0vh',
        borderBottom: '2px solid #232730',
        borderRight: '3px solid #232730',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#282c3d', 
            cursor: 'pointer'
        }
    }
}))