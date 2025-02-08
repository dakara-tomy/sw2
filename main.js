// 観光スポットのデータ
const tourSpots = [
    {
        name: '浅草寺',
        nameEn: 'Sensoji Temple',
        description: '東京都内最古の寺院',
        descriptionEn: 'Tokyo\'s oldest Buddhist temple',
        image: './images/sensoji.webp',
        link: 'asakusa.html'
    },
    {
        name: '渋谷スクランブル交差点',
        nameEn: 'Shibuya Crossing',
        description: '世界一忙しい交差点',
        descriptionEn: 'The world\'s busiest pedestrian crossing',
        image: './images/shibuya.jpg'
    },
    {
        name: '東京スカイツリー',
        nameEn: 'Tokyo Skytree',
        description: '世界一高い電波塔からの絶景',
        descriptionEn: 'Spectacular views from the world\'s tallest tower',
        image: './images/skytree.jpg'
    },
    {
        name: '明治神宮',
        nameEn: 'Meiji Shrine',
        description: '都会の中の荘厳な森と神社',
        descriptionEn: 'A serene forest shrine in the heart of Tokyo',
        image: './images/meiji.jpg'
    },
    {
        name: '築地市場',
        nameEn: 'Tsukiji Market',
        description: '新鮮な海鮮と活気ある市場',
        descriptionEn: 'Fresh seafood and vibrant market atmosphere',
        image: './images/tsukiji.jpg'
    },
    {
        name: '上野公園',
        nameEn: 'Ueno Park',
        description: '文化施設が集まる都市公園',
        descriptionEn: 'Urban park with museums and cultural facilities',
        image: './images/ueno.jpg'
    }
];

// 言語データ
const translations = {
    ja: {
        title: '東京の魅力を発見しよう',
        subtitle: '伝統と現代が調和する街',
        spotsTitle: '秘密の場所',
        switchLang: '<span class="material-icons">language</span> English',
        nav: {
            about: '<span class="material-icons">info</span> アバウト',
            plans: '<span class="material-icons">event</span> プラン',
            secret: '<span class="material-icons">place</span> スポット',
            culture: '<span class="material-icons">temple_buddhist</span> 文化体験',
            booking: '<span class="material-icons">book_online</span> 予約'
        },
        about: {
            title: 'HIDDEN THINGS TOUR TOKYOとは？',
            description: '私たちは、通常のツアーではあまり紹介されない日本の隠れた文化や風習を紹介する専門のツアーガイドです。お客様のためにカスタマイズされた特別なツアーで、日本をより深く知る旅にお連れします。'
        },
        contact: {
            title: 'お問い合わせ',
            formTitle: 'お問い合わせフォーム',
            instagramTitle: 'Instagramでフォロー',
            instagramText: '日々の更新や舞台裏の様子を投稿しています！',
            name: 'お名前',
            email: 'メールアドレス',
            message: 'メッセージ',
            submit: '送信する'
        },
        footer: {
            description: '隠れた日本の魅力を探求する、特別なツアーガイド',
            siteMap: 'サイトマップ',
            follow: 'フォローする'
        }
    },
    en: {
        title: 'Discover the Magic of Tokyo',
        subtitle: 'Where Tradition Meets Modern',
        spotsTitle: 'Secret Spots',
        switchLang: '<span class="material-icons">language</span> 日本語',
        nav: {
            about: '<span class="material-icons">info</span> About',
            plans: '<span class="material-icons">event</span> Plans',
            secret: '<span class="material-icons">place</span> Secret Spots',
            culture: '<span class="material-icons">temple_buddhist</span> Culture',
            booking: '<span class="material-icons">book_online</span> Contact'
        },
        about: {
            title: 'WHAT IS HIDDEN THINGS TOUR GUIDE?',
            description: 'We are specialized tour guides introducing hidden cultures and customs of Japan that are not often featured in regular tours. We offer customized special tours to take you on a journey to learn more about Japan.'
        },
        contact: {
            title: 'Contact Us',
            formTitle: 'Contact Form',
            instagramTitle: 'Follow us on Instagram',
            instagramText: 'Follow us for daily updates and behind-the-scenes content!',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Submit'
        },
        footer: {
            description: 'Discover hidden gems of Japan with our special tours',
            siteMap: 'Site Map',
            follow: 'Follow Us'
        }
    }
};

// 言語切り替え用の状態
let currentLanguage = 'ja';

// 言語切り替え関数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    localStorage.setItem('language', currentLanguage); // 言語設定を保存
    updateContent();
}

// コンテンツを更新する関数
function updateContent() {
    // ヘッダーとナビゲーションの更新
    document.querySelector('.language-switch button').innerHTML = 
        translations[currentLanguage].switchLang;
    
    // 日本語と英語の表示切り替え
    document.querySelectorAll('.ja').forEach(el => {
        el.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    });
    document.querySelectorAll('.en').forEach(el => {
        el.style.display = currentLanguage === 'en' ? 'block' : 'none';
    });

    // ナビゲーションリンクの更新
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (key === 'plans') {
            link.setAttribute('href', 'plan.html'); // プランのリンクをplan.htmlに設定
        }
        link.innerHTML = translations[currentLanguage].nav[key] || link.innerHTML;
    });

    // フッターリンクの更新
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (key === 'plans') {
            link.setAttribute('href', 'plan.html'); // プランのリンクをplan.htmlに設定
        }
        link.innerHTML = translations[currentLanguage].nav[key];
    });

    // ここでundefinedを秘密の場所に変更
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
        if (link.textContent.includes('undefined')) {
            link.innerHTML = translations[currentLanguage].nav.secret;
        }
    });

    // ヒーローセクションの更新
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        heroTitle.textContent = translations[currentLanguage].title;
    }
    const heroSubtitle = document.querySelector('#hero p');
    if (heroSubtitle) {
        heroSubtitle.textContent = translations[currentLanguage].subtitle;
    }
    
    // セクションタイトルの更新
    const spotsTitle = document.querySelector('#spots h2');
    if (spotsTitle) {
        spotsTitle.textContent = translations[currentLanguage].spotsTitle;
    }

    // スポットカードの更新
    const spotsGrid = document.querySelector('.spots-grid');
    if (spotsGrid) {
        spotsGrid.innerHTML = '';
        tourSpots.forEach(spot => {
            const card = document.createElement('div');
            card.className = 'spot-card';
            card.innerHTML = `
                <a href="${spot.link}">
                    <img src="${spot.image}" alt="${currentLanguage === 'ja' ? spot.name : spot.nameEn}">
                    <h3>${currentLanguage === 'ja' ? spot.name : spot.nameEn}</h3>
                    <p>${currentLanguage === 'ja' ? spot.description : spot.descriptionEn}</p>
                </a>
            `;
            spotsGrid.appendChild(card);
        });
    }

    // アバウトセクションの更新
    const aboutTitleEn = document.querySelector('#about .section-title .en');
    const aboutTitleJa = document.querySelector('#about .section-title .ja');
    if (aboutTitleEn && aboutTitleJa) {
        aboutTitleEn.textContent = translations[currentLanguage].about.title;
        aboutTitleJa.style.display = currentLanguage === 'ja' ? 'block' : 'none';
        aboutTitleEn.style.display = currentLanguage === 'en' ? 'block' : 'none';
    }
    const aboutText = document.querySelector('#about .about-text');
    if (aboutText) {
        aboutText.textContent = translations[currentLanguage].about.description;
    }

    // コンタクトセクションの更新
    const contactTitleEn = document.querySelector('#contact .section-title .en');
    const contactTitleJa = document.querySelector('#contact .section-title .ja');
    if (contactTitleEn && contactTitleJa) {
        contactTitleEn.textContent = translations[currentLanguage].contact.title;
        contactTitleJa.style.display = currentLanguage === 'ja' ? 'block' : 'none';
        contactTitleEn.style.display = currentLanguage === 'en' ? 'block' : 'none';
    }
    
    // フォームセクションのタイトル更新
    const emailTitleEn = document.querySelector('.contact-method.email h3 .en');
    const emailTitleJa = document.querySelector('.contact-method.email h3 .ja');
    if (emailTitleEn && emailTitleJa) {
        emailTitleEn.style.display = currentLanguage === 'en' ? 'block' : 'none';
        emailTitleJa.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    }
    
    // Instagramセクションのタイトルと説明文の更新
    const instagramTitleEn = document.querySelector('.contact-method.instagram h3 .en');
    const instagramTitleJa = document.querySelector('.contact-method.instagram h3 .ja');
    const instagramTextEn = document.querySelector('.instagram-text .en');
    const instagramTextJa = document.querySelector('.instagram-text .ja');
    if (instagramTitleEn && instagramTitleJa && instagramTextEn && instagramTextJa) {
        instagramTitleEn.style.display = currentLanguage === 'en' ? 'block' : 'none';
        instagramTitleJa.style.display = currentLanguage === 'ja' ? 'block' : 'none';
        instagramTextEn.style.display = currentLanguage === 'en' ? 'block' : 'none';
        instagramTextJa.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    }
    
    // フォームラベルの更新
    const nameLabel = document.querySelector('label[for="name"] .content-name');
    const emailLabel = document.querySelector('label[for="email"] .content-name');
    const messageLabel = document.querySelector('label[for="message"] .content-name');
    const submitBtn = document.querySelector('.submit-btn');
    if (nameLabel) {
        nameLabel.textContent = translations[currentLanguage].contact.name;
    }
    if (emailLabel) {
        emailLabel.textContent = translations[currentLanguage].contact.email;
    }
    if (messageLabel) {
        messageLabel.textContent = translations[currentLanguage].contact.message;
    }
    if (submitBtn) {
        submitBtn.textContent = translations[currentLanguage].contact.submit;
    }

    // フッターの言語切り替え
    document.querySelectorAll('.footer-description .ja, .footer-title .ja').forEach(el => {
        el.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    });
    document.querySelectorAll('.footer-description .en, .footer-title .en').forEach(el => {
        el.style.display = currentLanguage === 'en' ? 'block' : 'none';
    });

    // Note埋め込みの表示切り替え
    document.querySelectorAll('.note-embed.ja').forEach(el => {
        el.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    });
    document.querySelectorAll('.note-embed.en').forEach(el => {
        el.style.display = currentLanguage === 'en' ? 'block' : 'none';
    });
}

// 初期表示
document.addEventListener('DOMContentLoaded', (event) => {
    currentLanguage = localStorage.getItem('language') || 'ja'; // 保存された言語設定を取得
    updateContent();
    fetchMediumRSS(); // MediumのRSSのみを残す

    // モバイルナビゲーションの設定
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const body = document.body;

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        
        // ハンバーガーメニューのアイコンを切り替え
        const icon = mobileNavToggle.querySelector('.material-icons');
        icon.textContent = isExpanded ? 'menu' : 'close';
        
        // ヘッダーとボディの状態を更新
        header.classList.toggle('nav-open');
        body.classList.toggle('nav-open');
    });

    // ナビゲーションリンクをクリックしたらメニューを閉じる
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileNavToggle.querySelector('.material-icons');
            icon.textContent = 'menu';
            header.classList.remove('nav-open');
            body.classList.remove('nav-open');
        });
    });

    // スクロールイベントでアニメーションを適用
    const scrollElements = document.querySelectorAll('.scroll-fade-in-up');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});

function openModal(spot) {
    document.getElementById('spot-title').textContent = spot.name;
    document.getElementById('spot-image').src = spot.image;
    document.getElementById('spot-description').textContent = spot.description;
    document.getElementById('spot-detail-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('spot-detail-modal').style.display = 'none';
}

function fetchMediumRSS() {
    // MediumのユーザーフィードのURLを設定
    const rssUrl = 'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@hiddenthingstourtokyo';
    fetch(rssUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const items = xml.querySelectorAll('item');
            if (items.length > 0) {
                const latestItem = items[0];
                const title = latestItem.querySelector('title').textContent;
                const link = latestItem.querySelector('link').textContent;

                const container = document.querySelector('.medium-article');
                if (container) {
                    container.innerHTML = `
                        <a href="${link}" target="_blank">${title}</a>
                    `;
                }
            } else {
                console.error('No items found in Medium RSS feed.');
            }
        })
        .catch(error => console.error('Error fetching Medium RSS:', error));
}

// 他の関数...
