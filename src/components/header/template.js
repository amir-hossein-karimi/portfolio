export const headerTemplate = `
    <nav class="navbar">
        <div class="px-4">
            <div>
                <div class="flex justify-between">
                    <div class="flex space-x-7">
                        <a href="#" class="flex items-center py-4 px-2">
                        <img src="../assets/images/JavaScript-logo.png" alt="Logo" class="h-8 w-8 mr-2">
                        <span class="font-semibold text-gray-500 text-lg">
                            Navigation
                        </span>
                        </a>
                    </div>
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="" class="nav-link">
                        Home
                        </a>
                        <a href="" class="py-4 px-2 text-gray-500 font-semibold">
                        Services
                        </a>
                        <a href="/about" class="py-4 px-2 text-gray-500 font-semibold">
                        About
                        </a>
                        <a href="" class="py-4 px-2 text-gray-500 font-semibold">
                        Contact Us
                        </a>
                    </div>
            
                    <div class="md:hidden flex items-center">
                        <button class="outline-none menu-button">
                        <svg class="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 00 24 24" stroke="currentColor">
                            <path d="m4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        </button>
                    </div>
                </div>

                <div class="overflow-hidden scale-y-0 max-h-0 transition-all duration-300 mobile-menu">
                    <ul>
                        <li class="overflow-hidden">
                        <a class="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold">
                            Home
                        </li>
                        <li class="services">
                        <a href="#services" class="block text-sm px-2 py-4 hover:text-white hover:bg-purple-500 font-semibold">
                            Services
                        </a>
                        </li>
                        <li>
                        <a href="#About" class="block text-sm px-2 py-4 hover:text-white hover:bg-purple-500 font-semibold">
                            About
                        </a>
                        </li>
                        <li>
                        <a href="#Contact Us" class="block text-sm px-2 py-4 hover:text-white hover:bg-purple-500 font-semibold">
                            Contact Us
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
`;
