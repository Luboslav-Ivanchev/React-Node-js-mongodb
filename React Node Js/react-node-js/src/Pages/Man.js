import React from "react";

function Man() {

    let string=`${window.location.href}`
    let loggedIn=string.substr(22,8)
    if(loggedIn==='loggedIn'){
        return(
            <p>dsf</p>
        )
    }else if(loggedIn!=='loggedIn'){
        return(
            <p>d</p>
        )
    }

}

export default Man;