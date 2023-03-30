import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
      <Outlet/>
      For guest users only
    </div>
  )
}