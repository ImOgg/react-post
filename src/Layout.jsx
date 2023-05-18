import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>首頁</Link></li>
                <li><Link to='/register'>註冊/登入</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout