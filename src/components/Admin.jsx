import React from 'react'
import KegFeed from './KegFeed'

function Admin(props){
    console.log(props.onDelete)
    return (
        <div>
            <KegFeed kegFeed={props.masterKegList} currentRouterPath={props.currentRouterPath} onDelete={props.onDelete}/>
        </div>
    )

}
export default Admin;