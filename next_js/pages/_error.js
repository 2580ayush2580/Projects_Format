import React from 'react';
import Link from 'next/link'

const errorPage = (props) => (
    <div>
        <h1>Oops, Page Not Found</h1>
        <p>Go back <Link href="/" ><a>Home</a></Link> </p>
    </div>
);

export default errorPage;
