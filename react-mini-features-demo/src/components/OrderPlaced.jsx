import { useNavigate } from "react-router-dom"

export const OrderPlaced = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      Order placed successfully
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}