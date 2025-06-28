import { useParams } from "react-router-dom"

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userid

  return (
    <>
     <h3>User Details - {userId}</h3>
    
    </>
  )
}