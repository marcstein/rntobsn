// RN to BSN Programs Directory - Main JavaScript

// Search and Filter Functionality
class ProgramSearch {
    constructor() {
        this.programs = [];
        this.filteredPrograms = [];
        this.filters = {
            state: 'all',
            delivery: 'all',
            accreditation: 'all',
            searchTerm: ''
        };
    }

    async loadPrograms() {
        try {
            const response = await fetch('/data/programs.json');
            this.programs = await response.json();
            this.filteredPrograms = this.programs;
            return this.programs;
        } catch (error) {
            console.error('Error loading programs:', error);
            return [];
        }
    }

    filterPrograms() {
        this.filteredPrograms = this.programs.filter(program => {
            // State filter
            if (this.filters.state !== 'all' && program.state !== this.filters.state) {
                return false;
            }

            // Delivery method filter
            if (this.filters.delivery !== 'all' && program.delivery !== this.filters.delivery) {
                return false;
            }

            // Accreditation filter
            if (this.filters.accreditation !== 'all' && program.accreditation !== this.filters.accreditation) {
                return false;
            }

            // Search term filter
            if (this.filters.searchTerm) {
                const searchLower = this.filters.searchTerm.toLowerCase();
                return (
                    program.school.toLowerCase().includes(searchLower) ||
                    program.city.toLowerCase().includes(searchLower) ||
                    program.state.toLowerCase().includes(searchLower)
                );
            }

            return true;
        });

        return this.filteredPrograms;
    }

    setFilter(filterType, value) {
        this.filters[filterType] = value;
        return this.filterPrograms();
    }

    search(term) {
        this.filters.searchTerm = term;
        return this.filterPrograms();
    }

    sortPrograms(sortBy) {
        switch(sortBy) {
            case 'name':
                this.filteredPrograms.sort((a, b) => a.school.localeCompare(b.school));
                break;
            case 'state':
                this.filteredPrograms.sort((a, b) => a.state.localeCompare(b.state));
                break;
            case 'cost-low':
                this.filteredPrograms.sort((a, b) => a.costPerCredit - b.costPerCredit);
                break;
            case 'cost-high':
                this.filteredPrograms.sort((a, b) => b.costPerCredit - a.costPerCredit);
                break;
        }
        return this.filteredPrograms;
    }
}

// Initialize search instance
const programSearch = new ProgramSearch();

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    highlightActiveNav();
});

// Navigation
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
}

// Search Initialization
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            performSearch(e.target.value);
        }, 300));
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (searchInput) {
                performSearch(searchInput.value);
            }
        });
    }
}

// Filter Initialization
function initializeFilters() {
    const stateFilter = document.getElementById('stateFilter');
    const deliveryFilter = document.getElementById('deliveryFilter');
    const accreditationFilter = document.getElementById('accreditationFilter');

    if (stateFilter) {
        stateFilter.addEventListener('change', function(e) {
            programSearch.setFilter('state', e.target.value);
            displayResults(programSearch.filteredPrograms);
        });
    }

    if (deliveryFilter) {
        deliveryFilter.addEventListener('change', function(e) {
            programSearch.setFilter('delivery', e.target.value);
            displayResults(programSearch.filteredPrograms);
        });
    }

    if (accreditationFilter) {
        accreditationFilter.addEventListener('change', function(e) {
            programSearch.setFilter('accreditation', e.target.value);
            displayResults(programSearch.filteredPrograms);
        });
    }

    // Filter chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            this.classList.toggle('active');
            updateChipFilters();
        });
    });
}

// Perform Search
function performSearch(term) {
    const results = programSearch.search(term);
    displayResults(results);
}

// Display Search Results
function displayResults(programs) {
    const resultsContainer = document.getElementById('resultsContainer');

    if (!resultsContainer) return;

    if (programs.length === 0) {
        resultsContainer.innerHTML = `
            <div class="alert alert-info">
                <p>No programs found matching your criteria. Try adjusting your filters.</p>
            </div>
        `;
        return;
    }

    const html = programs.map(program => createProgramCard(program)).join('');
    resultsContainer.innerHTML = html;
}

// Create Program Card HTML
function createProgramCard(program) {
    return `
        <div class="card">
            <h3><a href="/schools/${program.slug}.html">${program.school}</a></h3>
            <p><strong>Location:</strong> ${program.city}, ${program.state}</p>
            <p><strong>Delivery:</strong> ${program.delivery}</p>
            <p><strong>Cost per Credit:</strong> $${program.costPerCredit}</p>
            ${program.delivery === 'Online' ? '<span class="badge online">Online Available</span>' : ''}
            ${program.delivery === 'Campus' ? '<span class="badge campus">Campus</span>' : ''}
            ${program.delivery === 'Hybrid' ? '<span class="badge hybrid">Hybrid</span>' : ''}
            <p style="margin-top: 1rem;">
                <a href="/schools/${program.slug}.html" class="btn btn-primary">View Details</a>
            </p>
        </div>
    `;
}

// Update Chip Filters
function updateChipFilters() {
    const activeChips = document.querySelectorAll('.chip.active');
    const filters = Array.from(activeChips).map(chip => chip.dataset.filter);

    // Apply chip filters to search
    // Implementation depends on chip filter types
}

// Highlight Active Navigation
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Utility: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Cost Calculator
function calculateTotalCost(creditsRequired, costPerCredit, fees = 0) {
    return (creditsRequired * costPerCredit) + fees;
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(amount);
}

// Compare Programs
function comparePrograms(programIds) {
    const programs = programIds.map(id =>
        programSearch.programs.find(p => p.id === id)
    ).filter(p => p !== undefined);

    return programs;
}

// Export functions for use in other scripts
window.ProgramSearch = ProgramSearch;
window.programSearch = programSearch;
window.formatCurrency = formatCurrency;
window.calculateTotalCost = calculateTotalCost;
window.comparePrograms = comparePrograms;
