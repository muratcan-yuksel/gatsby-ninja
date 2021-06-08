import React from 'react'
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
            {/* this is so that the content in index.js will be seen */}
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Murat Can Yüksel</p>
            </footer>
        </div>
    )
}
