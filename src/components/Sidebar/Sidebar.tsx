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
            {
              <IconFiles />
            }
          </ActionIcon>
         
          <ActionIcon size="lg" className={classes.icon}>
            <IconFileSearch />
          </ActionIcon>
          <ActionIcon size="lg" className={classes.icon}>
            <IconGitMerge />
          </ActionIcon>
      </div>  
    </div>
    <div className={classes.configContainer}>
      <div className={classes.navSect} > 
          <ActionIcon size="lg" py="lg" className={classes.icon}>
            <IconUser />
          </ActionIcon>      
          <Settings />
      </div>
    </div>
   </>
  )
}

export default Sidebar