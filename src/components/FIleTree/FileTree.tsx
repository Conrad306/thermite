import useStyles from "./FileTree.styles";


export default function FileTree() {
    const { classes } = useStyles(); 
    return (
        <div className={classes.container}>
            <p>Files go here</p>
        </div>
    )
}