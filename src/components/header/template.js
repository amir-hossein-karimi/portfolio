export const headerTemplate = `
    <nav class="navbar">
        <div class="px-4">
            <div>
                <div class="flex justify-between flex-row-reverse">
                    <div class="flex space-x-7">
                        <a href="#" class="flex items-center py-4 px-2">
                            <span class="font-semibold text-gray-500 text-lg">
                                Portfolio
                            </span>
                        </a>
                    </div>

                    <div class="links-container" id='linksContainer'></div>
            
                    <div class="md:hidden flex items-center">
                        <button class="outline-none menu-button">
                        <svg class="burger-menu-svg" x-show="! showMenu" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 00 24 24" stroke="currentColor">
                            <path d="m4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        </button>
                    </div>
                </div>

                <div class="mobile-menu hide">
                    <ul id="mobileLinksContainer" class="pb-4"></ul>
                </div>
            </div>
        </div>
    </nav>
`;
