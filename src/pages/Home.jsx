import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
        <h1 className='text-6xl font-bold card-title'>GitHub Finder App</h1>
        <p className='text-2xl mt-5 mb-10'>Made with ❤️ by Debarghya Datta</p>
        <UserSearch />
        <UserResults />
    </>
  )
}

export default Home