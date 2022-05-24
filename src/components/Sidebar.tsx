import {Navbar, ActionIcon} from '@mantine/core'
import { IconFiles, IconFileSearch, IconGitMerge, IconUser } from '@tabler/icons';
import styles from '../styles/Sidebar.module.css'
import Settings from './Settings'

const Sidebar = () => {
  return (
      <div>
        <Navbar fixed width={{ base: 50 }} height={'100%'} p="xs">
            <Navbar.Section className={styles.NavSect}>
                <ActionIcon variant="transparent">
                    <IconFiles size={40} />
                </ActionIcon>                
            </Navbar.Section>
              
            <Navbar.Section className={styles.NavSect}>
                <ActionIcon variant="transparent">
                    <IconFileSearch size={40}/>
                </ActionIcon>              
            </Navbar.Section>
              
            <Navbar.Section grow className={styles.NavSect}>
                  <ActionIcon variant="transparent">
                    <IconGitMerge size={40}/>
                  </ActionIcon>
            </Navbar.Section>
        
            <Navbar.Section className={styles.NavSect}>
              <ActionIcon variant="transparent">
                <IconUser size={40}/>
              </ActionIcon>
            </Navbar.Section>
        
            <Navbar.Section className={styles.NavSect}>
             <Settings />
            </Navbar.Section>

      </Navbar>
    </div>
  )
}

export default Sidebar