import React from 'react'


//boa prática
export default props => (
    <div>
        { React.cloneElement(props.children, {...props})}
    </div>

)