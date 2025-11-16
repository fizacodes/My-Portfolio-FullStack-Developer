import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" flex justify-between p-6 bg-[#2E424D] text-white m-2 sm:m-5">
      <Link to="/" className="font-bold text-xl tracking-wider">Fiza</Link>
      <div className="flex justify-between sm:gap-6 gap-3">
       <Link to="/about">About</Link>
       <Link to="/projects">Projects</Link>
       <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
