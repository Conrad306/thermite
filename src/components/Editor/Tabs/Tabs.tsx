import useStyles from "./Tabs.styles"
import { IconFile } from "@tabler/icons";
export interface TabProps {
    count: number; 
    tabName: string; 
    isSaved: boolean;
}

export default function Tab({count, tabName, isSaved}: TabProps) {
    const { classes } = useStyles()

    return(
        <div className={classes.container}>
            {tabName}
        </div>
    )
}