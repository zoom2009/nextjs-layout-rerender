"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { memo, useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  
  useEffect(() => {
    console.log('re render')
  }, [])

  return (
    <div>
        <div onClick={() => push('/')} className={pathname === '/' ? 'text-red-500' : ''}>home</div>
        <div onClick={() => push('/info')} className={pathname === '/info' ? 'text-red-500' : ''}>info</div>
    </div>
  )
}

export default memo(Header)
