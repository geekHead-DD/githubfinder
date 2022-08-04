// import logo from '../assets/load.gif'

function Footer() {
    const footerYear = new Date().getFullYear()
  
    return (
      <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
        <p>&copy; {footerYear} Debarghya Datta</p>
        </div>
      </footer>
    )
  }
  
  export default Footer