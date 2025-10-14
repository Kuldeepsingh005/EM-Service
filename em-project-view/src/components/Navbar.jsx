import React from 'react'

const Navbar = () => {
  return (
     <div className="bg-slate-800 h-12 px-10 item-center flex">
      <h1 className="text-3xl font-bold text-red-500">🧑‍💻EM Service</h1>
      <div className="space-x-4 ml-auto text-white item-center flex">
        <a className="hover:text-blue-400"  href="/">Home</a>
        <a className="hover:text-blue-400"href="/profile">Profile</a>
        <a className="hover:text-blue-400"href="/logout">LogOut</a>
      </div>
     </div>
  )
}

export default Navbar