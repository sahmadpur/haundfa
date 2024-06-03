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
        home: "Ana səhifə",
        about: "Haqqımızda",
        services: "Xidmətlərimiz",
        portfolio: "Portfolio",
        team: "Komandamız",
        contact: "Əlaqə",
        testimonals: "Rəylər",
        hero1: "Almaniyaya gəliş prosesinizi asanlaşdırmaq üçün",
        hero2: "Biznes və Viza",
        hero3: "məsələləri üzrə ekspert dəstəyi",
        get_started_btn: "Ətraflı",
        services_btn: "Xidmətlərimiz",
        phone: "Telefon:",
        email: "E-ünvan",
        links: "Keçidlər",
        terms: "Xidmət Şərtləri",
        privacy: "Məxfilik siyasəti",
        edu_visa: "Təhsil vizası",
        edu_visa_text: "Təhsiliniz ilə bağlı viza almağa tam dəstək oluruq",
        work_visa: "İş vizası",
        work_visa_text: "Almaniyada işləmək arzusundasınzsa, Biz həm viza həmdə işlə bağlı dəstək ola bilirik",
        aus: "Ausbildung proqramı",
        aus_text:"Yeni karyeranızı Almaniyada qurmağı düşünürsüzə, Bizə müraciət edin",
        mission_text: "Missiyamız Almaniyada məskunlaşmaq istəyənlərin proseslərini asanlaşdırmaq və onları uyğun iş imkanları ilə əlaqələndirməkdən ibarətdir. Mütəxəssis komandamız iş axtarışından tutmuş viza müraciətlərinə, təhsil imkanlarından məskunlaşma mərhələlərinə qədər hər addımda məsləhət və dəstək təklif edir.",
        about_text: "Ha&Fa Nord - biz hər bir insana Almaniyada uğurlu karyera və ya təhsil həyatı üçün lazım olan dəstəyi təmin etmək üçün buradayıq.",
        services_text: "Ha&Fa Nord Almaniyada iş və işçi tapmaqda ixtisaslaşan, əcnəbilərin Almaniyaya gəlməsinə rəhbərlik edən bir şirkətdir. Almaniyaya gəlmək istəyən hər kəsə iş və viza dəstəyi verməklə yanaşı, Ausbildung proqramlarında iştirak etmək və ya təhsil almaq istəyənlərə də viza və məktəb dəstəyi veririk."
    },
    Ru: {
        Azərbaycanca: "Azərbaycanca",
        Русский: "Русский",
        Deutsch: "Немецкий",
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
        Deutsch: "Deutsch!!!",
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
    changeLanguage("Az");
    console.log("lang change");
    });


// Debugging: Ensure the script is loaded
console.log("Script loaded successfully");