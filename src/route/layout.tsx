import Footer from '@/components/layout/Footer'
import { Facebook, Instagram, Linkedin } from 'lucide-react'


import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (

        <div className='min-h-screen w-full relative'>
            <Outlet />
            <Footer />
            <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Facebook color='blue' />
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Instagram color='red' />
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Linkedin color='blue' />
                </div>
            </div>
        </div>




    )
}
