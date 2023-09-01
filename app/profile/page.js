'use client'

import React from 'react';
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const page = () => {

const isUserLoggedIn = true;

const [providers, setProviders] = useState(null);

useEffect( () => {
    const setProvider =  async () => {
        const response = await getProviders();
        
        setProviders(response);  
    }

    setProviders();
},[])

  return (
    <div>
        <section className='mx-6 my-12 flex justify-center h-screen'>
            {isUserLoggedIn? 
            <>
                <div>
                    <h1>wellcome User</h1>
                </div>
            </>: 
            <>
            {providers && Object.values(providers).map((provider)=> (
                <div>
                    <button 
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='nav-color text-white px-8 py-4 rounded-lg'>
                        SignIn
                    </button>
                </div>
            ))}
            </>
            }
        </section>
    </div>
  )
}

export default page