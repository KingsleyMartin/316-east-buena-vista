/**
 * Helper Functions for 316 East Buena Vista Street Website
 * Contains all interactive functionality for various pages
 */

// ================================================================
// HISTORY PAGE FUNCTIONS
// ================================================================

/**
 * Scrolls to a specific era section in the timeline
 * @param {string} eraId - The ID of the era section to scroll to
 */
function scrollToEra(eraId) {
    const element = document.getElementById(eraId);
    if (element) {
        // Smooth scroll to element with offset for fixed header
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Update active button
        document.querySelectorAll('.timeline-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

// ================================================================
// DOCUMENTS PAGE FUNCTIONS
// ================================================================

/**
 * Performs a search on documents
 */
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // Reset all documents to visible
        document.querySelectorAll('.document-card').forEach(card => {
            card.style.display = '';
        });
        return;
    }

    // Search through all document cards
    document.querySelectorAll('.document-card').forEach(card => {
        const title = card.querySelector('.document-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.document-description')?.textContent.toLowerCase() || '';
        const meta = card.querySelector('.document-meta')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || meta.includes(searchTerm)) {
            card.style.display = '';
            // Highlight the search term
            highlightSearchTerm(card, searchTerm);
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Highlights search terms in a card
 * @param {HTMLElement} card - The card element
 * @param {string} term - The search term to highlight
 */
function highlightSearchTerm(card, term) {
    // Simple implementation - could be enhanced with mark.js library
    // For now, this is a placeholder for future enhancement
}

/**
 * Filters documents by category
 * @param {string} category - The category to filter by
 */
function filterDocuments(category) {
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Show/hide document sections
    const sections = document.querySelectorAll('.category-section');
    
    if (category === 'all') {
        sections.forEach(section => {
            section.style.display = '';
        });
    } else {
        sections.forEach(section => {
            if (section.dataset.category === category) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Clear search when filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
}

/**
 * Selects and displays connections for a document node
 * @param {string} nodeId - The ID of the node
 */
function selectNode(nodeId) {
    const node = event.currentTarget;
    const connections = node.dataset.connections?.split(',') || [];
    
    // Remove previous selection
    document.querySelectorAll('.relationship-node').forEach(n => {
        n.classList.remove('selected');
    });
    
    // Mark selected node
    node.classList.add('selected');
    
    // Display connection information
    const connectionInfo = document.getElementById('connectionInfo');
    const connectionDetails = document.getElementById('connectionDetails');
    
    if (connectionInfo && connectionDetails) {
        connectionInfo.style.display = 'block';
        
        const nodeName = node.querySelector('.node-title').textContent;
        const connectionsText = connections.length > 0 
            ? `This document references: ${connections.join(', ')}` 
            : 'No connections documented';
        
        connectionDetails.textContent = `${nodeName} - ${connectionsText}`;
    }
}

/**
 * Previews a document in a modal or separate view
 * @param {string} documentId - The ID of the document to preview
 */
function previewDocument(documentId) {
    // Placeholder for document preview functionality
    // In a full implementation, this would:
    // 1. Fetch document details
    // 2. Open a modal or sidebar with document preview
    // 3. Display document metadata and content
    
    console.log(`Preview document: ${documentId}`);
    alert(`Document preview functionality coming soon for: ${documentId}`);
}

/**
 * Downloads a document
 * @param {string} documentId - The ID of the document to download
 */
function downloadDocument(documentId) {
    // Placeholder for download functionality
    console.log(`Download document: ${documentId}`);
    alert(`Download functionality coming soon for: ${documentId}`);
}

/**
 * Shares a document via various methods
 * @param {string} documentId - The ID of the document to share
 */
function shareDocument(documentId) {
    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'Document from 316 East Buena Vista',
            text: 'Check out this historical document',
            url: window.location.href + '#' + documentId
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy link to clipboard
        const url = window.location.href + '#' + documentId;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.log('Error copying:', err);
        });
    }
}

// ================================================================
// PHOTO COMPARISON SLIDER
// ================================================================

/**
 * Initializes photo comparison slider
 */
function initPhotoComparison() {
    const slider = document.getElementById('comparisonSlider');
    const after = document.getElementById('comparisonAfter');
    const container = document.getElementById('comparisonContainer');
    
    if (!slider || !after || !container) return;
    
    let isDragging = false;
    
    function updateSliderPosition(x) {
        const containerRect = container.getBoundingClientRect();
        const position = ((x - containerRect.left) / containerRect.width) * 100;
        const boundedPosition = Math.max(0, Math.min(100, position));
        
        slider.style.left = boundedPosition + '%';
        after.style.clipPath = `inset(0 0 0 ${boundedPosition}%)`;
    }
    
    // Mouse events
    slider.addEventListener('mousedown', () => {
        isDragging = true;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Touch events
    slider.addEventListener('touchstart', () => {
        isDragging = true;
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// ================================================================
// PHOTO GALLERY & ZOOM
// ================================================================

/**
 * Opens photo in zoom view
 * @param {string} imageSrc - The source of the image to zoom
 */
function zoomPhoto(imageSrc) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'photo-zoom-modal';
    modal.innerHTML = `
        <div class="zoom-overlay" onclick="closePhotoZoom()"></div>
        <div class="zoom-content">
            <img src="${imageSrc}" alt="Zoomed photo">
            <button class="zoom-close" onclick="closePhotoZoom()">&times;</button>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

/**
 * Closes photo zoom modal
 */
function closePhotoZoom() {
    const modal = document.querySelector('.photo-zoom-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// ================================================================
// INITIALIZATION
// ================================================================

/**
 * Initialize all interactive features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize photo comparison slider if present
    initPhotoComparison();
    
    // Setup search on Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Add CSS for photo zoom if not already present
    if (!document.getElementById('helper-styles')) {
        const style = document.createElement('style');
        style.id = 'helper-styles';
        style.textContent = `
            .relationship-node.selected {
                background: var(--color-gold);
                color: white;
                transform: scale(1.05);
            }
            
            .photo-zoom-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .zoom-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
            }
            
            .zoom-content {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
                z-index: 10001;
            }
            
            .zoom-content img {
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
            }
            
            .zoom-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: transparent;
                border: none;
                color: white;
                font-size: 40px;
                cursor: pointer;
                padding: 0 10px;
            }
        `;
        document.head.appendChild(style);
    }
});

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToEra,
        performSearch,
        filterDocuments,
        selectNode,
        previewDocument,
        downloadDocument,
        shareDocument,
        initPhotoComparison,
        zoomPhoto,
        closePhotoZoom
    };
}
