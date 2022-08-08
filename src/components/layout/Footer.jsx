import React from 'react'
import { FaLinkedinIn,FaGithub,FaDev} from 'react-icons/fa';
function Footer() {

  const footerYear = new Date().getFullYear()

  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <img src="https://avatars.githubusercontent.com/geekHead-DD" width={80} alt="" />
        <p> &copy; Debarghya Datta {footerYear} </p>
      </div> 
      <div>
        <span class="footer-title">Connect with me</span> 
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/debarghya-datta-383b341a5/">
            <FaLinkedinIn size='50'/>
          </a>
          <a href="https://github.com/geekHead-DD/">
            <FaGithub size='50' />
          </a>
          <a href="https://dev.to/geekheaddd">
            <FaDev size='50' />
          </a>
         
        </div>
      </div>
  </footer>
  )
}

export default Footer