import {Navbar, ActionIcon, Tooltip } from '@mantine/core'
import { IconFiles, IconFileSearch, IconGitMerge, IconUser } from '@tabler/icons';
import Settings from '../Settings/Settings'
import { useState } from 'react';
import useStyles from './Sidebar.styles'


const Sidebar = () => {
  const [active, setActive] = useState(false);
  const { classes } = useStyles();
  return (
   <>
    <div className={classes.container}>
      <div className={classes.navSect}>
          <ActionIcon size="lg" className={classes.icon}>
            <IconFiles width={25}/>
          </ActionIcon>
         
          <ActionIcon size="lg" className={classes.icon}>
            <IconFileSearch width={25}/>
          </ActionIcon>
          <ActionIcon size="lg" className={classes.icon}>
            <IconGitMerge width={25}/>
          </ActionIcon>
      </div>  
    </div>
    <div className={classes.configContainer}>
      <div className={classes.navSect} > 
          <ActionIcon size="lg" py="lg" className={classes.icon}>
            <IconUser width={25}/>
          </ActionIcon>      
          <Settings />
      </div>
    </div>
   </>
  )
}

export default Sidebar