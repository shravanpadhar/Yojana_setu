/**
 * ============================================
 * YOJANA SETU — Government Scheme Eligibility Checker
 * Core Application Logic (Vanilla JavaScript)
 * ============================================
 */

// ============================================
// 1. SCHEME DATABASE (2026 Data)
// ============================================

const schemeDatabase = [
    // ---- CENTRAL GOVERNMENT SCHEMES ----
    {
        name: "PM-Kisan Samman Nidhi Yojana",
        provider: "Central",
        minAge: 18,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 200000,
        occupation: ["Farmer"],
        description: "Financial benefit of ₹6,000 per year in three equal installments to small and marginal farmer families having combined land holding up to 2 hectares."
    },
    {
        name: "Ayushman Bharat — PM Jan Arogya Yojana (PMJAY)",
        provider: "Central",
        minAge: 0,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 250000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Health insurance cover of ₹5 lakh per family per year for secondary and tertiary hospitalization. Targeted at EWS and BPL families."
    },
    {
        name: "PM Awas Yojana — Gramin / Urban",
        provider: "Central",
        minAge: 18,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 300000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Affordable housing for the rural and urban poor. Subsidy of up to ₹2.67 lakh for construction/enhancement of pucca houses for eligible EWS/LIG beneficiaries."
    },
    {
        name: "PM Awas Yojana — MIG-I Category",
        provider: "Central",
        minAge: 18,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 600000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Credit-linked subsidy for Middle Income Group-I (income ₹3-6 lakh) for purchase or construction of houses up to 160 sq.m carpet area."
    },
    {
        name: "PM Awas Yojana — MIG-II Category",
        provider: "Central",
        minAge: 18,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 800000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Credit-linked subsidy for Middle Income Group-II (income ₹6-12 lakh) for purchase or construction of houses up to 200 sq.m carpet area."
    },
    {
        name: "Atal Pension Yojana (APY)",
        provider: "Central",
        minAge: 18,
        maxAge: 40,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: Infinity,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after 60 years of age. Government co-contributes 50% for eligible subscribers."
    },
    {
        name: "PM Matritva Vandana Yojana (PMMVY)",
        provider: "Central",
        minAge: 19,
        maxAge: 45,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "Female",
        maxIncome: Infinity,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Cash incentive of ₹11,000 (under PM-PMMVY 2.0) for pregnant women and lactating mothers for the first and second child to improve health-seeking behaviour."
    },

    // ---- MAHARASHTRA STATE SCHEMES ----
    {
        name: "Majhi Ladki Bahin Yojana",
        provider: "Maharashtra",
        minAge: 21,
        maxAge: 65,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "Female",
        maxIncome: 250000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Monthly financial assistance of ₹1,500 to eligible women of Maharashtra. Aimed at empowering women's economic independence and social security."
    },
    {
        name: "Mukhyamantri Yuva Karya Prashikshan Yojana",
        provider: "Maharashtra",
        minAge: 18,
        maxAge: 35,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: Infinity,
        occupation: ["Student", "Unemployed"],
        description: "Skill training and apprenticeship programme for 12th pass graduates and unemployed youth. Monthly stipend of ₹6,000-₹10,000 during training period."
    },
    {
        name: "Namo Shetkari Maha Sanman Nidhi",
        provider: "Maharashtra",
        minAge: 18,
        maxAge: 120,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: Infinity,
        occupation: ["Farmer"],
        description: "Additional ₹6,000 per year to farmers on top of PM-Kisan, making the total benefit ₹12,000 per year. Exclusively for Maharashtra-domiciled farmers."
    },
    {
        name: "Post-Matric Scholarship (Maharashtra)",
        provider: "Maharashtra",
        minAge: 16,
        maxAge: 35,
        caste: ["OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "All",
        maxIncome: 800000,
        occupation: ["Student"],
        description: "Full tuition fee reimbursement and maintenance allowance for post-matric students from VJNT, SC, ST, OBC, and SBC categories studying in recognized institutions."
    },
    {
        name: "Indira Gandhi National Widow Pension Scheme (Maharashtra)",
        provider: "Maharashtra",
        minAge: 40,
        maxAge: 79,
        caste: ["General", "OBC", "SC", "ST", "VJNT", "SBC"],
        gender: "Female",
        maxIncome: 250000,
        occupation: ["Student", "Farmer", "Unemployed", "Other"],
        description: "Monthly pension of ₹1,000 for widows aged 40-79 years from BPL families. After 80 years, the amount increases to ₹1,500 under the Indira Gandhi National Old Age Pension."
    }
];


// ============================================
// 2. DOM REFERENCES
// ============================================

const form = document.getElementById('scheme-form');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const resultsSection = document.getElementById('results-section');
const resultsContainer = document.getElementById('results-container');
const noResultsDiv = document.getElementById('no-results');
const resultsSummary = document.getElementById('results-summary');
const filterTabs = document.getElementById('filter-tabs');

// Input references
const ageInput = document.getElementById('user-age');
const casteInput = document.getElementById('user-caste');
const incomeInput = document.getElementById('user-income');
const occupationInput = document.getElementById('user-occupation');


// ============================================
// 3. UTILITY FUNCTIONS
// ============================================

/**
 * Get the selected gender from radio buttons
 */
function getSelectedGender() {
    const selected = document.querySelector('input[name="gender"]:checked');
    return selected ? selected.value : null;
}

/**
 * Parse the income dropdown value to a usable number
 * The dropdown stores the UPPER bound of each slot.
 */
function getIncomeValue() {
    return incomeInput.value ? parseInt(incomeInput.value) : null;
}

/**
 * Validate form and return errors
 */
function validateForm() {
    const errors = [];
    const age = parseInt(ageInput.value);
    const caste = casteInput.value;
    const gender = getSelectedGender();
    const income = getIncomeValue();
    const occupation = occupationInput.value;

    // Remove previous error states
    document.querySelectorAll('.form-group.error').forEach(el => el.classList.remove('error'));

    if (!age || age < 1 || age > 120) {
        errors.push({ field: 'age-group', message: 'Please enter a valid age (1-120).' });
    }
    if (!caste) {
        errors.push({ field: 'caste-group', message: 'Please select your caste category.' });
    }
    if (!gender) {
        errors.push({ field: 'gender-group', message: 'Please select your gender.' });
    }
    if (!income) {
        errors.push({ field: 'income-group', message: 'Please select your income level.' });
    }
    if (!occupation) {
        errors.push({ field: 'occupation-group', message: 'Please select your occupation.' });
    }

    return errors;
}

/**
 * Format currency amount in Indian notation
 */
function formatIndianCurrency(num) {
    if (num === Infinity) return 'No Limit';
    if (num >= 100000) return '₹' + (num / 100000).toFixed(num % 100000 === 0 ? 0 : 1) + ' Lakh';
    if (num >= 1000) return '₹' + (num / 1000).toFixed(0) + 'K';
    return '₹' + num;
}


// ============================================
// 4. CORE FILTERING LOGIC
// ============================================

/**
 * Filter schemes based on user inputs.
 * A user is eligible if they meet ALL criteria for a scheme.
 */
function filterSchemes(age, caste, gender, income, occupation) {
    return schemeDatabase.filter(scheme => {
        // Age check
        const ageMatch = age >= scheme.minAge && age <= scheme.maxAge;

        // Caste check — user's caste must be in the scheme's allowed list
        const casteMatch = scheme.caste.includes(caste);

        // Gender check — scheme allows "All" or matches user's gender
        const genderMatch = scheme.gender === "All" || scheme.gender === gender;

        // Income check — user's income must be at or below scheme's max
        const incomeMatch = income <= scheme.maxIncome;

        // Occupation check — user's occupation must be in scheme's list
        const occupationMatch = scheme.occupation.includes(occupation);

        return ageMatch && casteMatch && genderMatch && incomeMatch && occupationMatch;
    });
}


// ============================================
// 5. UI RENDERING
// ============================================

/**
 * Create a single scheme card HTML
 */
function createSchemeCard(scheme, index) {
    const providerClass = scheme.provider === 'Central' ? 'central' : 'maharashtra';

    const card = document.createElement('div');
    card.className = `scheme-card ${providerClass}`;
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-provider', scheme.provider);

    card.innerHTML = `
        <div class="card-provider ${providerClass}">
            <span class="card-provider-dot"></span>
            ${scheme.provider === 'Central' ? '🇮🇳 Central Government' : '🏛️ Maharashtra State'}
        </div>
        <h3 class="card-title">${scheme.name}</h3>
        <p class="card-description">${scheme.description}</p>
        <div class="card-criteria">
            <span class="criteria-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Age: ${scheme.minAge}–${scheme.maxAge === 120 ? 'No limit' : scheme.maxAge}
            </span>
            <span class="criteria-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                ${scheme.gender}
            </span>
            <span class="criteria-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Income: ${formatIndianCurrency(scheme.maxIncome)}
            </span>
        </div>
    `;

    return card;
}

/**
 * Render the filtered results into the DOM
 */
function renderResults(schemes) {
    // Clear previous results
    resultsContainer.innerHTML = '';
    noResultsDiv.classList.add('hidden');
    resultsSection.classList.remove('results-hidden');

    if (schemes.length === 0) {
        noResultsDiv.classList.remove('hidden');
        resultsSummary.textContent = 'No matching schemes found for your criteria.';
        filterTabs.style.display = 'none';
        return;
    }

    // Update summary
    const centralCount = schemes.filter(s => s.provider === 'Central').length;
    const stateCount = schemes.filter(s => s.provider === 'Maharashtra').length;
    resultsSummary.textContent = `Found ${schemes.length} scheme${schemes.length > 1 ? 's' : ''} — ${centralCount} Central, ${stateCount} Maharashtra`;
    filterTabs.style.display = 'flex';

    // Reset filter tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');

    // Render cards
    schemes.forEach((scheme, index) => {
        const card = createSchemeCard(scheme, index);
        resultsContainer.appendChild(card);
    });

    // Smooth scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
}


// ============================================
// 6. EVENT HANDLERS
// ============================================

// Store last filtered results for tab filtering
let lastFilteredResults = [];

/**
 * Handle form submission
 */
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate
    const errors = validateForm();
    if (errors.length > 0) {
        errors.forEach(err => {
            const group = document.getElementById(err.field);
            group.classList.add('error', 'shake');
            setTimeout(() => group.classList.remove('shake'), 500);
        });
        return;
    }

    // Gather input values
    const age = parseInt(ageInput.value);
    const caste = casteInput.value;
    const gender = getSelectedGender();
    const income = getIncomeValue();
    const occupation = occupationInput.value;

    // Add loading state to button
    const btnText = checkBtn.querySelector('span');
    const originalText = btnText.textContent;
    btnText.textContent = 'Searching...';
    checkBtn.disabled = true;

    // Simulate brief processing delay for UX
    setTimeout(() => {
        // Filter schemes
        const results = filterSchemes(age, caste, gender, income, occupation);
        lastFilteredResults = results;

        // Render
        renderResults(results);

        // Reset button
        btnText.textContent = originalText;
        checkBtn.disabled = false;
    }, 600);
});

/**
 * Handle form reset
 */
form.addEventListener('reset', function () {
    // Hide results section on reset
    setTimeout(() => {
        resultsSection.classList.add('results-hidden');
        resultsContainer.innerHTML = '';
        noResultsDiv.classList.add('hidden');
        lastFilteredResults = [];

        // Clear error states
        document.querySelectorAll('.form-group.error').forEach(el => el.classList.remove('error'));
    }, 10);
});

/**
 * Handle filter tab clicks
 */
filterTabs.addEventListener('click', function (e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards visually
    const cards = resultsContainer.querySelectorAll('.scheme-card');
    cards.forEach(card => {
        const provider = card.getAttribute('data-provider');
        if (filter === 'all' || provider === filter) {
            card.style.display = '';
            card.style.animation = 'cardSlideIn 0.3s ease-out both';
        } else {
            card.style.display = 'none';
        }
    });

    // Check if any visible
    const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
    if (visibleCards.length === 0) {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
    }
});

/**
 * Remove error state on input change
 */
[ageInput, casteInput, incomeInput, occupationInput].forEach(input => {
    input.addEventListener('change', function () {
        this.closest('.form-group').classList.remove('error');
    });
});

document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', function () {
        document.getElementById('gender-group').classList.remove('error');
    });
});

/**
 * Smooth scroll for nav links
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ============================================
// 7. INITIALIZATION
// ============================================

// Update the total schemes count in hero
document.getElementById('total-schemes-count').textContent = schemeDatabase.length + '+';

console.log('✅ Yojana Setu loaded successfully.');
console.log(`📊 ${schemeDatabase.length} schemes in database.`);
