import { AppShell } from '@mantine/core'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Editor from '../components/Editor/Editor'
import FileTree from '../components/FIleTree/FileTree'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <FileTree />
      <Editor />
    </div>
  )
}

export default Home
