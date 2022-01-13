import Head from 'next/head';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


export default function Home() {
  return (
    <div className="container">
      <PrivateRoute>
        <h1>Hello Logged In</h1>
      </PrivateRoute>
    </div>
  )
}

