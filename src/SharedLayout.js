import { Link, Outlet } from "react-router-dom";

const SharedLayout = () =>{
    return (
        <div>
            <Link to='/' style={{marginRight:'70%',position:'relative',left:'20%',fontSize:'larger'}}>New User</Link>
            <Link to='/users' style={{marginRight:'5%',position:'relative',right:'15%',fontSize:'larger'}}>Users</Link>
            <Outlet/>
        </div>
    )

}

export default SharedLayout;