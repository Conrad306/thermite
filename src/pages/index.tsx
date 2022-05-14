import { AppShell, Paper, Text, Navbar, Header } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { IconFiles, IconFileSearch } from '@tabler/icons';

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={
      <Navbar width={{ base: 50 }} height={600} p="xs">
        <Navbar.Section>
          <IconFiles />
        </Navbar.Section>
        <Navbar.Section>
          <IconFileSearch />
        </Navbar.Section>
      </Navbar>
      }
      
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >

      Application goes here 
      
    </AppShell>
    
  )
}

export default Home
