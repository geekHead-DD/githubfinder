import React from 'react'
import GithubLogo from '../components/assets/githubLogo.png'

function About() {
  return (
    <>
      <div class="text-5xl font-extrabold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400">
          Github Finder
        </span>
      </div>
        <div class="text-3xl font-extrabold my-8 ">
          It uses github public api to fetch information about github user profiles and other details like repositories etc.
        </div>
    </>
    
  )
}

export default About