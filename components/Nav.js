'use client'
import React from 'react'
import Image from 'next/image'
import list from '../components/List'
import { useState } from 'react'

const Nav = () => {

  const [Toggle, setToggle] = useState(false)



  return (
    <div className='nav-color'>
    <div className=' nav-color text-white py-4 px-8 flex justify-between'>

    <div>
    <hi className='fonts'>NAIJASPORT</hi>
    </div>

    {/* desktop view */}

    <div className=' flex '>
    <div className='flex max-xl:hidden '>
    {list.map( lists => {
      return <div className='list list-none flex mx-6  items-center'>
        <li><a>{lists}</a></li>
      </div>
    })}

    </div>

    <div className='hidden max-xl:flex max-lg:hidden '>
    {list.map( lists => {
      return <div className='list list-none flex mx-6  items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(0,7)}

    </div>

    <div className='hidden max-xl:hidden max-lg:flex max-md:hidden'>
    {list.map( lists => {
      return <div className='list list-none flex mx-6  items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(0,4)}
    </div>

    <div className='hidden  mx-3 max-xl:flex '>
    <Image src='./icons/menu.svg'  
    width={37} 
    height={37}
    onClick={ ()=> {
      setToggle( prevValue => {
        return !prevValue
      })
    }}
     />
    </div>
    <Image 
    src='./icons/search.svg'
     width={37} 
     height={37} 
     />
    </div>


    </div>

    {/* mobile view */}

    {Toggle? (
      <div className=' nav-color text-white px-10 pt-2 bod'>
    <div className='hidden max-xl:flex max-lg:hidden '>
    {list.map( lists => {
      return <div className='list list-none flex mr-12  items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(7,10)}

    </div>
    <div className='hidden max-xl:hidden max-lg:flex max-md:hidden'>
    {list.map( lists => {
      return <div className='list list-none flex mr-12  items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(4,10)}

    </div>

    <div className='flex justify-between pt-3'>
    <div className='hidden max-xl:hidden max-lg:hidden max-md:flex flex-col'>
    {list.map( lists => {
      return <div className='list list-none flex mr-6 pb-8  items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(0,6)}
    </div>
    <div className='hidden max-xl:hidden max-lg:hidden max-md:flex flex-col '>
    {list.map( lists => {
      return <div className='list list-none flex mr-6 pb-8 items-center'>
        <li><a>{lists}</a></li>
      </div>
    }).slice(6,10)}
    </div>
    <div className='hidden max-xl:hidden max-lg:hidden max-md:flex flex-col'>
      <Image src='./icons/menu.svg' width={30} height={30} />
    </div>

    </div>
    </div>
    ) : (
      <div></div>
    )}

    

    </div>
  )
}

export default Nav