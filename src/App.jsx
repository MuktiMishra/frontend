import { Center, Container } from '@chakra-ui/react'
import { Navigate ,Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/userAtom.js';
import LogoutButton from './Components/LogoutButton.jsx';
import Header from './Components/Header.jsx'
import HomePage from './Pages/HomePage.jsx'
import UserPage from './Pages/UserPage.jsx'
import PostPage from './Pages/PostPage.jsx'
import AuthPage from './Pages/AuthPage.jsx'

const App = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        {/* pid is post id */}
      </Routes>
      {user && <LogoutButton />}
    </Container>
  )
}

export default App
