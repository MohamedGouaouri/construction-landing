const languages = {
    en: '/lang/en.json',
    fr: '/lang/fr.json',
    ar: '/lang/ar.json'
};

async function loadLanguage(lang) {
    const response = await fetch(languages[lang]);
    const translations = await response.json();

    // Example of how to change content dynamically:
    document.getElementById('companyName').textContent = translations.companyName;
    document.getElementById('heroTitle').textContent = translations.heroTitle;
    document.getElementById('heroSubtitle').textContent = translations.heroSubtitle;

    // Add more translations here as needed
}

window.onload = () => {
    const defaultLang = 'en';
    loadLanguage(defaultLang);
};

document.getElementById('langDropdownBtn').addEventListener('click', () => {
    document.getElementById('langDropdown').classList.toggle('hidden');
});

function setLanguage(lang) {
    loadLanguage(lang);
    document.getElementById('langDropdown').classList.add('hidden');
}
