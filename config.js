// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Adem 💗",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Veux-tu passer le week-end avec moi? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Tu m'aimes bieeen?",                                    // First interaction
            yesBtn: "OUIIII",                                             // Text for "Yes" button
            noBtn: "Non...",                                               // Text for "No" button
            secretAnswer: "Je ne t'aime pas juste bien, je t'aime beaucoup !! ❤️"           // Secret hover message
        },
        second: {
            text: "T'aimes passer du temps avec moi ?",                          // For the love meter
            startText: "Hm ça va",                                   // Text before the percentage
            nextBtn: "J'ai super hâte !!"                                         // Text for the next button
        },
        third: {
            text: "Veux-tu passer le week-end avec moi?🌹", // The big question!
            yesBtn: "OUIIIII 💝",                                             // Text for "Yes" button
            noBtn: "Umm..Non pas vraiment"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "J'ai extrêmement hâte !!",  // Shows when they go past 100%
        high: "J'ai hâte !!",              // Shows when they go past 70%
        normal: "Ce sera cool"                           // Shows when they go past 50%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! Je suis la femme la plus chanceuse sur cette terre 💝💖💝💓",
        message: "Maintenant je t'offre plein de calins en récompense !",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://collection.cloudinary.com/dm1hhay8w/e77660666aa5c214fcbeab11f4df68fd", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
