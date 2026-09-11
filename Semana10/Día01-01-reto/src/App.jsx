import Profile from "./components/profile"

const App = () => {
  return (
    <div>
      
      <Profile nombre="Nicolás" role="Frontend" />
      <Profile nombre="Diego" role="UX/UI" />
      <Profile nombre="Kirby" role="Backend" />
      <Profile nombre="Freddy" role="Fullstack" />

    </div>
  )
}

export default App