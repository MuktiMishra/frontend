import React from 'react';
import UserHeader from '../Components/UserHeader.jsx';
import UserPost from '../Components/UserPost..jsx';

const UserPage = () => {
    console.log('Rendering userPage');
  return (

    <>
      <UserHeader />
      <UserPost likes={1200} replies={906} postImg="/post1.png" postTitle={"Lets talk about threads"}/>
      <UserPost likes={456} replies={156} postImg="/post2.png" postTitle={"Hey , There !!"}/>
      <UserPost likes={1400} replies={456} postImg="/post3.png"postTitle={"My new post , do like.."}/>
      <UserPost likes={1400} replies={456} postTitle={"My first thread guyssss"}/>
      
    </>
  );
};

export default UserPage;
