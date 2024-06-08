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
        testimonal1: "Çox güvənilir şirkətdir. Sürətli və effektiv xidmət aldım.",
        testimonal2: "Ha&Fa Nord ilə Almaniyaya gəlmək çox asan idi. Təşəkkürlər!",
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
        Deutsch: "Deutsch",
        home: "Главная страница",
        about: "О Нас",
        services: "Услуги",
        portfolio: "Портфолио",
        team: "Команда",
        contact: "Контакты",
        testimonals: "Комментарии клиентов",
        hero1: "Экспертная поддержка по вопросам",  
        hero2: "Бизнеса и Виз",
        hero3: "для облегчения процесса вашего прибытия в Германию",
        get_started_btn: "Подробнее",
        services_btn: "Услуги",
        phone: "Телефон:",
        email: "Е-почта",
        links: "Ссылки",
        testimonal1: "Очень надежная компания. Я получил быстрое и эффективное обслуживание.",
        testimonal2: "С Ha&Fa Nord приехать в Германию было очень легко. Спасибо!",
        terms: "Условия использования",
        privacy: "Политика конфиденциальности",
        edu_visa: "Учебная виза",
        edu_visa_text: "Мы полностью поддерживаем вас в получении визы для обучения",
        work_visa: "Рабочая виза",
        work_visa_text: "Если вы хотите работать в Германии, мы можем предоставить вам как визовую поддержку, так и поддержку в трудоустройстве.",
        aus: "Программа Ausbildung",
        aus_text:"Если вы думаете начать новую карьеру в Германии, свяжитесь с нами.",
        mission_text: "Наша миссия заключается в облегчении процесса для тех, кто хочет освоиться в Германии, и связывании их с подходящими возможностями занятости. Наш опытный коллектив предоставляет консультации и поддержку на каждом этапе, начиная от поиска работы и заканчивая оформлением виз, возможностями получения образования и этапами освоения.",
        about_text: "Ha&Fa Nord - мы стоим за каждым человеком, предоставляя необходимую поддержку для успешной карьеры или образования в Германии.",
        services_text: "Ha&Fa Nord - это компания, специализирующаяся на посредничестве при привлечении специалистов из-за рубежа для вакансий на немецком рынке труда. Мы предоставляем иностранцам ориентацию в сфере трудоустройства и помощь по прибытии в Германию. Помимо поддержки в поиске работы и получении визы для всех, кто хочет приехать в Германию, мы также помогаем тем, кто участвует в образовательных или повышающих квалификацию программах или желает пройти обучение, отвечая на вопросы по визам и школам."
    },
    De: {
        Azərbaycanca: "Azərbaycanca",
        Русский: "Русский",
        Deutsch: "Deutsch",
        home: "Startseite",
        about: "Über Uns",
        services: "Unsere Services",
        portfolio: "Portfolio",
        team: "Unser Team",
        contact: "Kontakt",
        testimonals: "Kunden-Kommentare",
        hero1: "Kompetente Unterstützung in",
        hero2: "Geschäfts - und Visaangelegenheiten",
        hero3: "um Ihren Ankunftsprozess in Deutschland zu erleichtern",
        get_started_btn: "Mehr",
        services_btn: "Unsere Services",
        phone: "Telefon:",
        email: "E-Adresse",
        links: "Verknüpfung",
        testimonal1: "Ein sehr zuverlässiges Unternehmen. Ich habe einen schnellen und effektiven Service erhalten.",
        testimonal2: "Mit Ha&Fa Nord war es sehr einfach, nach Deutschland zu kommen. Danke!",
        terms: "Servicebedingungen",
        privacy: "Datenschutzrichtlinie",
        edu_visa: "Visum zum Studium",
        edu_visa_text: "Wir unterstützen Sie umfassend bei der Beantragung eines Visums für Ihr Studium",
        work_visa: "Arbeitsvisum",
        work_visa_text: "Wenn Sie in Deutschland arbeiten möchten, können wir Ihnen sowohl bei der Visums- als auch bei der Beschäftigungsunterstützung behilflich sein",
        aus: "Ausbildung",
        aus_text:"Wenn Sie darüber nachdenken, Ihre neue Karriere in Deutschland zu beginnen, kontaktieren Sie uns",
        mission_text: "Unsere Mission konzentriert sich darauf, den Prozess für diejenigen zu erleichtern, die sich in Deutschland niederlassen möchten, und sie mit passenden Arbeitsmöglichkeiten zu verbinden. Unser erfahrenes Team bietet Beratung und Unterstützung in jedem Schritt, angefangen von der Arbeitssuche bis hin zu Visa-Anträgen, Bildungsmöglichkeiten und Siedlungsphasen.",
        about_text: "Bei Ha&Fa Nord - stehen wir jedem Einzelnen zur Seite, um die erforderliche Unterstützung für eine erfolgreiche Karriere oder Bildung in Deutschland zu bieten.",
        services_text: "Unser Ziel bei Ha&Fa Nord ist es, ausländischen Staatsangehörigen das Gefühl von Sicherheit bei der Jobsuche und Ausbildung in Deutschland zu vermitteln und ihnen dabei zu helfen, eine erfolgreiche Zukunft aufzubauen. Jeder einzelne hat bei uns das Potenzial für eine erfolgreiche Karriere, und wir streben danach, individuelle Lösungen anzubieten, um den Erfolg unserer Kandidaten zu fördern."
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
    changeLanguage("De");
    console.log("lang change");
    });


// Debugging: Ensure the script is loaded
console.log("Script loaded successfully");