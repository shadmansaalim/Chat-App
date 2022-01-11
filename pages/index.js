import Head from 'next/head';
import Login from '../components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="container">
      <Login></Login>
    </div>
  )
}

