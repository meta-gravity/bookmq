import React from "react"
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { ColorChange } from "./Color-Change"


const Navbar = () => {

    return (
        <nav className="sticky inset-x-0 h-14 top-0 w-full z-30 border-b border-zinc-200 bg-white-900 dark:border-gray-800 dark:bg-white-300/75 backdrop-blur-lg dark:backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex items-center border-b h-14 justify-between border-zinc-200  dark:border-gray-800">
                    
                    
                 <ColorChange />
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar