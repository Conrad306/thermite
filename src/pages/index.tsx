import { AppShell } from '@mantine/core'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Sidebar  />}
      styles={(theme) => ({ main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }, })}
      >

      <Editor />

    </AppShell>
    
  )
}

export default Home
