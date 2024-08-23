import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
      <Link href="#" className="flex items-center justify-center">
        <span className="font-bold ml-2 text-xl text-green-800">ST INNOVATIVES</span>
      </Link>
      <button
        className="ml-auto lg:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row lg:ml-auto lg:gap-4 absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent lg:p-0 p-4 shadow-lg lg:shadow-none`}
      >
        {["About", "Ventures", "Awards", "Our Team", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
            className="text-sm font-medium text-black transition-colors hover:text-green-600 py-2 lg:py-0"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
