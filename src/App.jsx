
import './App.css'
import { TwitterFollowCard } from './components/TwFollowCard.jsx'

function App() {
   const formatUserName = (userName)=> `@${userName}`
   return (
    <section className='App'>
    <TwitterFollowCard 
    formatUserName={formatUserName} 
    
    userName="sugarCookies" >
    Sugar Cookies
    </TwitterFollowCard>
    <TwitterFollowCard 
    formatUserName={formatUserName} 
  
    userName="sugarGodis" >
   Sugar Godis
   </TwitterFollowCard>
    <TwitterFollowCard 
    formatUserName={formatUserName}
     
     userName="lunaBess" >
     Maria Luna
     </TwitterFollowCard>
    <TwitterFollowCard 
    formatUserName={formatUserName}
   
     userName="bluemoon">
      Lucia Moon
      </TwitterFollowCard>
    <TwitterFollowCard 
    formatUserName={formatUserName}
   
   >
     Esteban Auri
      </TwitterFollowCard>
    </section>
  )
}

export default App
