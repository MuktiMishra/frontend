import React from 'react';
import SignupCard from '../Components/SignupCard';
import LoginCard from '../Components/LoginCard';
import { useRecoilValue , useSetRecoilState } from 'recoil';
import authScreenAtom from '../atoms/authAtom';

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  // useSetRecoilState(authScreenAtom); // This function in recoil is replica of setValue function of a state
  return (
    <>
      {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
}

export default AuthPage;
