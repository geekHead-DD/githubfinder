import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
        <nav className="navbar mb-12 shadow lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-4 text-6xl'/>
                    <Link to='/' className='font-bold text-xl  align-middle'>
                        {title}
                    </Link>
                </div>

                <div className="flex-1 px- mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className='btn  text-xl btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn text-xl btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar