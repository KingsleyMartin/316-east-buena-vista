/**
 * Navigation Component for 316 East Buena Vista Street
 * 
 * Usage: Include this script in your HTML, then call loadNavigation()
 * The script will automatically detect the current page and set the active state.
 */

const navConfig = {
    logo: '316 East Buena Vista',
    items: [
        { href: 'index.html', label: 'Overview' },
        { href: 'history.html', label: 'History' },
        { href: 'restoration.html', label: 'Restoration' },
        { href: 'house.html', label: 'House' },
        { href: 'featured.html', label: 'Featured' },
        { 
            href: 'gardens.html', 
            label: 'Gardens',
            submenu: [
                { href: 'garden-history.html', label: 'Garden History & Evolution' },
                { href: 'plant-inventory.html', label: 'Plant Inventory & Assessment' },
                { href: 'water-systems.html', label: 'Well & Water Rights' },
                { href: 'flowering-calendar.html', label: 'Flowering Calendar' },
                { href: 'garden-plan (no install costs).html', label: 'Garden Plan' }
            ]
        },
        { href: 'sales.html', label: 'Sales History' },
        { href: 'documents.html', label: 'Documents' }
    ]
};

/**
 * Determines the current page from the URL
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    // Handle empty string (root path) as index.html
    return page === '' ? 'index.html' : page;
}

/**
 * Checks if current page is in a submenu
 */
function isInSubmenu(item, currentPage) {
    if (!item.submenu) return false;
    return item.submenu.some(subItem => subItem.href === currentPage);
}

/**
 * Generates the navigation HTML
 */
function generateNavHTML(currentPage) {
    const navLinks = navConfig.items
        .map(item => {
            const isActive = currentPage === item.href || isInSubmenu(item, currentPage);
            
            if (item.submenu) {
                const submenuHTML = item.submenu
                    .map(subItem => {
                        const isSubActive = currentPage === subItem.href;
                        return `<a href="${subItem.href}" class="submenu-item${isSubActive ? ' active' : ''}">${subItem.label}</a>`;
                    })
                    .join('\n                    ');
                
                return `<div class="nav-item-with-submenu">
                    <a href="${item.href}"${isActive ? ' class="active"' : ''}>${item.label}</a>
                    <div class="submenu">
                        ${submenuHTML}
                    </div>
                </div>`;
            }
            
            return `<a href="${item.href}"${isActive ? ' class="active"' : ''}>${item.label}</a>`;
        })
        .join('\n                ');

    return `
    <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav-container">
            <div class="nav-logo">${navConfig.logo}</div>
            <button class="hamburger" onclick="toggleMenu()" aria-label="Toggle navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="nav-links" id="navLinks" role="menubar">
                ${navLinks}
            </div>
        </div>
    </nav>`;
}

/**
 * Toggles the mobile menu visibility
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
    
    // Toggle hamburger animation and aria-expanded
    if (hamburger) {
        hamburger.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    }
}

/**
 * Closes mobile menu when clicking outside
 */
function setupClickOutside() {
    document.addEventListener('click', function(event) {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks && navLinks.classList.contains('active')) {
            // Check if click is outside nav
            if (!event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
                navLinks.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        }
    });
}

/**
 * Closes mobile menu on window resize (if switching to desktop)
 */
function setupResizeHandler() {
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });
}

/**
 * Main function to load navigation into the page
 * Call this after DOM is ready, or place script at end of body
 */
function loadNavigation() {
    const currentPage = getCurrentPage();
    const navHTML = generateNavHTML(currentPage);
    
    // Find the placeholder or insert at beginning of body
    const placeholder = document.getElementById('nav-placeholder');
    
    if (placeholder) {
        placeholder.outerHTML = navHTML;
    } else {
        // Insert as first child of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
    
    // Setup event handlers
    setupClickOutside();
    setupResizeHandler();
}

/**
 * Auto-initialize when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    // DOM already loaded
    loadNavigation();
}