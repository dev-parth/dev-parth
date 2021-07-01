import React from 'react'

import TheContent from './content'
import TheHeader from './header'
import TheFooter from './footer'


const TheLayout = () => {
    return (
        <div>
            <TheHeader />
            <TheContent />
            {/* <TheFooter /> */}
        </div>
    )
}

export default TheLayout
