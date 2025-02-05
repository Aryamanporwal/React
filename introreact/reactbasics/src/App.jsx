import UserCard from "./components/UserCard"


function App() {

  return (
    <div className = "container">
    
      <UserCard name = "Love Rana" desc = "hiii" style={{"border-radius":"10px"}}/>
      <UserCard name = "Maha" desc = "hii baby" style={{"border-radius":"10px"}}/>
      <UserCard name = "shalu" desc = "lelo naa" style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
