import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserBar from '../Components/UserBar';
import UserDashboard from '../Components/UserDashboard';
import UserMessage from '../Components/UserMessage';
import { MessagesProvider } from '../Utils/Context/Messages';

export default function Home() {
  
 
  return (
    <MessagesProvider>
      <div className={styles.container}>
        <Head>
          <title>ChatBot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="d-flex justify-content-center text-white">
          Welcome !
      </h1>

        <div className="globalContainer">
          <div className="botContainer">
            <div className="userBar">
              <UserBar />
            </div>
            <div className="userDash">
              <UserDashboard />
            </div>
            <div className="userMessage">
              <UserMessage />
            </div>
          </div>
        </div>
      </div>
    </MessagesProvider>
  )
}
