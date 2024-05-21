import React, { useState } from 'react';
import Logo from '../../../public/medias/images/pancakes.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Menus', href: '#', current: false },
    { name: 'Offers', href: '#', current: false },
    { name: 'Gallery', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='bg-black text-white relative'>
            <div className='xl:pt-10 xl:px-40'>
                <nav className='flex items-center justify-between text-white text-xl'>
                    {/* Mobile menu button */}
                    <div className='flex items-center xl:hidden z-30 ml-6'>
                        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
                            {menuOpen ? (
                                <XMarkIcon className='w-8 h-8' />
                            ) : (
                                <Bars3Icon className='w-8 h-8' />
                            )}
                        </button>
                    </div>

                    {/* Left-side navigation (hidden on small screens) */}
                    <div className='hidden xl:flex space-x-20'>
                        {navigation.slice(0, 4).map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'text-yellow' : 'text-white',
                                    'text-xl font-medium hover:text-yellow'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Logo and title */}
                    <div className='flex flex-col items-center z-30 mr-6 mt-4'>
                        <img className='w-12 lg:w-16' src={Logo} alt="Logo" />
                        <h1 className='text-sm lg:text-xl'>Brunch Delice</h1>
                    </div>

                    {/* Right-side navigation (hidden on small screens) */}
                    <div className='hidden xl:flex space-x-20'>
                        {navigation.slice(4).map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'text-yellow' : 'text-white',
                                    'text-xl font-medium hover:text-yellow'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Mobile menu (visible when menuOpen is true) */}
                {menuOpen && (
                    <div className='xl:hidden fixed inset-0 bg-black bg-opacity-75 z-10 flex flex-col items-center pt-20 mt-10'>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'text-yellow' : 'text-white',
                                    'block text-xl font-medium hover:text-yellow mt-2'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}

                {/* Backdrop (visible when menuOpen is true) */}
                {menuOpen && (
                    <div
                        className='fixed inset-0 bg-gray-900 z-0'
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}
            </div>
        </header>
    );
}

export default Header;
