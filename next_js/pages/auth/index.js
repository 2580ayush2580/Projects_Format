import React from 'react';
import User from '../../components/user'

const authIndexPage = (props) => {

    authIndexPage.getInitialProps = context => {
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({appName:'Next.js (Auth)'})
            },1000)
        })
        return promise;
    }
    
    return(
        <div>
        <h1>The Auth Index Page {props.appName}</h1>
        <User name="Ayush" age="18" />
    </div>
    )
   
};

export default authIndexPage;
 