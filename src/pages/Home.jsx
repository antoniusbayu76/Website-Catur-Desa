import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Profil Desa</h1>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <Link to="/munduk" className="bg-blue-200 p-4 rounded shadow hover:bg-blue-300">Munduk</Link>
        <Link to="/gobleg" className="bg-green-200 p-4 rounded shadow hover:bg-green-300">Gobleg</Link>
        <Link to="/gesing" className="bg-yellow-200 p-4 rounded shadow hover:bg-yellow-300">Gesing</Link>
        <Link to="/umajero" className="bg-red-200 p-4 rounded shadow hover:bg-red-300">Umajero</Link>
      </div>
    </div>
  )
}
