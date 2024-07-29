import { Center, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import HomePage from './Pages/HomePage.jsx'
import UserPage from './Pages/UserPage.jsx'
import PostPage from './Pages/PostPage.jsx'

const App = () => {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        {/* pid is post id */}
      </Routes>
    </Container>
  )
}

export default App
