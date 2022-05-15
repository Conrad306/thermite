import {Navbar, ActionIcon} from '@mantine/core'
import { IconFiles, IconFileSearch, IconGitMerge } from '@tabler/icons';
import styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
  return (
      <div>
        <Navbar width={{ base: 50 }} height={600} p="xs">
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
              
            <Navbar.Section className={styles.NavSect}>
                  <ActionIcon variant="transparent">
                    <IconGitMerge size={40}/>
                  </ActionIcon>
            </Navbar.Section>

      </Navbar>
    </div>
  )
}

export default Sidebar