import React from 'react'
import KegFeed from './KegFeed'

function Admin(props){
    console.log(props.updateKeg)
    return (
        <div>
            <KegFeed kegFeed={props.masterKegList} currentRouterPath={props.currentRouterPath} onDelete={props.onDelete} updateKeg={props.updateKeg}/>
        </div>
    )

}
export default Admin;