import { Outlet, useSearchParams } from "react-router-dom";

export const User = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active"
  return (
    <>
     <h3>User 1</h3>
     <h3>User 2</h3>
     <h3>User 3</h3>
     <Outlet/>
     <div>
      <button onClick={() => setSearchParams({filter: "active"})}>Active Users</button>
      <button onClick={() => setSearchParams()}>Reset Filter</button>
     </div>
      {
        showActiveUsers ? <h3>Show Active Users</h3> : <h3>Show All Users</h3>
      }
    </>
  )
}