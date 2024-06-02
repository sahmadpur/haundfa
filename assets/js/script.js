document.querySelectorAll('.language-option').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation(); // Stop the event from propagating
        const selectedLanguage = event.target.getAttribute('data-lang');
        document.getElementById('selectedLanguage').textContent = selectedLanguage;
    });
});
const translations = {
    Az: {
        Azərbaycanca: "Azərbaycanca",
        Русский: "Русский",
        Deutsch: "Deutsch",
        about: "Aboutaz",
        services: "ServicesAz",
        portfolio: "PortfolioAz",
        title: "Find Out More",
        description: "This is a multilingual website template."
    },
    Ru: {
        Azərbaycanca: "Azərbaycanca",
        Русский: "Русский",
        Deutsch: "Deutsch",
        about: "О нас",
        services: "Услуги",
        contact: "Контакты",
        portfolio: "Портфолио",
        text1: "Ha&Fa Nord",
        text2: "Мы предлагаем экспертную помощь в вопросах трудоустройства и получения визы для облегчения вашего легального въезда в Германию",
        text3: "Наша миссия заключается в облегчении процесса для тех, кто хочет освоиться в Германии, и связывании их с подходящими возможностями занятости. Наш опытный коллектив предоставляет консультации и поддержку на каждом этапе, начиная от поиска работы и заканчивая оформлением виз, возможностями получения образования и этапами освоения.",
        button1: "Узнать больше",
        description: "Esta es una plantilla de sitio web multilingüe."
    },
    De: {
        Azərbaycanca: "Azərbaycanca",
        Русский: "Русский",
        Deutsch: "Deutsch",
        about: "Aboutde",
        services: "Servicesde",
        portfolio: "Portfoliode",
        description: "This is a multilingual website template."
    }

    // Add more languages here
};

function changeLanguage(language) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
}

document.addEventListener('DOMContentLoaded', event => {
    console.log(event);
    changeLanguage("Ru");
    console.log("lang change");
    });


// Debugging: Ensure the script is loaded
console.log("Script loaded successfully");