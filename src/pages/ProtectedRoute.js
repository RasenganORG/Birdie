import { Navigate } from "react-router-dom"

function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to='/auth' />
  }
  return children
}

export default ProtectedRoute
