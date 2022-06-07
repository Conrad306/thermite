import useStyles from "./Welcome.styles";


const Welcome = () => {
    const { classes } = useStyles(); 
    return (
        <div className={classes.container}>
            <div className={classes.brand}>
                <h1>Thermite</h1>
                <h3>Blazing Fast Code Editor</h3>
            </div>
            <div className={classes.ActionTitle}>
                <h3>Actions</h3>                     
                <h5>Action 1</h5>
                <h5>Action 2</h5>    
            </div>                
        </div>
    )
}

export default Welcome