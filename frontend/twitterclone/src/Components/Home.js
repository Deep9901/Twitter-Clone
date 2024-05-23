import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Feed from './Feed'


const Home = () => {
    return (
        <>
            <LeftSidebar />
            <Feed/>
            <RightSidebar />

        </>
    )
}

export default Home