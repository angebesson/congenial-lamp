
import './App.css'
import { TwitterFollowCard } from './components/TwFollowCard.jsx'

const users =[
  {
    userName:'sugarCookies',
    name:'Sugar Cookies',
    isFollowing: true,
  },
  {
    userName:'sugarGodis',
    name:'Sugar Godis',
    isFollowing: false,
  },
  {
    userName:'lunaBess',
    name:' Maria Luna',
    isFollowing: true,
  },
  {
    userName:'bluemoon',
    name:' Lucia Moon',
    isFollowing: true,
  },
  {
    username:'',
    name:'Esteban Auri',
    isFollowing: true,
  }
]

function App() {
     return (
    <section className='App'>{
      users.map(user =>{
        const{userName, name, isFollowing}=user
        return(
          <TwitterFollowCard
          userName={userName}
          initialIsFollowing = {isFollowing}
          key={userName}
          >
            {name}
          </TwitterFollowCard>
          
        )

      })
    }

    </section>
  )
}

export default App
