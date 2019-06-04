import React from 'react';
import Hero from '../Components/Hero'
import RegisterForm from '../Components/RegisterForm'

function registerPage () {
    return(
        <React.Fragment>
        <Hero />
        <RegisterForm />
        </React.Fragment>
    )
}

export default registerPage;