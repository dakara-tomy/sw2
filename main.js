// 観光スポットのデータ
const tourSpots = [
    {
        name: '浅草寺',
        nameEn: 'Sensoji Temple',
        description: '東京都内最古の寺院',
        descriptionEn: 'Tokyo\'s oldest Buddhist temple',
        image: './images/sensoji.webp'
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
        spotsTitle: '人気の観光スポット',
        switchLang: '<span class="material-icons">language</span> English',
        nav: {
            spots: '<span class="material-icons">place</span> 観光スポット',
            food: '<span class="material-icons">restaurant</span> グルメ',
            culture: '<span class="material-icons">temple_buddhist</span> 文化体験',
            contact: '<span class="material-icons">email</span> お問い合わせ'
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
        spotsTitle: 'Popular Tourist Spots',
        switchLang: '<span class="material-icons">language</span> 日本語',
        nav: {
            spots: '<span class="material-icons">place</span> Spots',
            food: '<span class="material-icons">restaurant</span> Food',
            culture: '<span class="material-icons">temple_buddhist</span> Culture',
            contact: '<span class="material-icons">email</span> Contact'
        },
        about: {
            title: 'WHAT IS HIDDEN THINGS TOUR GUIDE?',
            description: 'We are tour guides specializing in introducing hidden cultures and customs of Japan that are not often introduced in regular tours. We will take you on a journey to learn more about Japan with a special tour customized for you.'
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
    updateContent();
}

// コンテンツを更新する関数
function updateContent() {
    // ヘッダーとナビゲーションの更新
    document.querySelector('.language-switch button').innerHTML = 
        translations[currentLanguage].switchLang;
    
    // ナビゲーションリンクの更新
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        link.innerHTML = translations[currentLanguage].nav[key];
    });

    // ヒーローセクションの更新
    document.querySelector('#hero h1').textContent = 
        translations[currentLanguage].title;
    document.querySelector('#hero p').textContent = 
        translations[currentLanguage].subtitle;
    
    // セクションタイトルの更新
    document.querySelector('#spots h2').textContent = 
        translations[currentLanguage].spotsTitle;

    // スポットカードの更新
    const spotsGrid = document.querySelector('.spots-grid');
    spotsGrid.innerHTML = '';
    
    tourSpots.forEach(spot => {
        const card = document.createElement('div');
        card.className = 'spot-card';
        card.innerHTML = `
            <img src="${spot.image}" alt="${currentLanguage === 'ja' ? spot.name : spot.nameEn}">
            <h3>${currentLanguage === 'ja' ? spot.name : spot.nameEn}</h3>
            <p>${currentLanguage === 'ja' ? spot.description : spot.descriptionEn}</p>
        `;
        spotsGrid.appendChild(card);
    });

    // アバウトセクションの更新
    document.querySelector('#about .section-title .en').textContent = 
        translations[currentLanguage].about.title;
    document.querySelector('#about .section-title .ja').style.display = 
        currentLanguage === 'ja' ? 'block' : 'none';
    document.querySelector('#about .section-title .en').style.display = 
        currentLanguage === 'en' ? 'block' : 'none';
    document.querySelector('#about .about-text').textContent = 
        translations[currentLanguage].about.description;

    // コンタクトセクションの更新
    document.querySelector('#contact .section-title .en').textContent = 
        translations[currentLanguage].contact.title;
    document.querySelector('#contact .section-title .ja').style.display = 
        currentLanguage === 'ja' ? 'block' : 'none';
    document.querySelector('#contact .section-title .en').style.display = 
        currentLanguage === 'en' ? 'block' : 'none';
    
    // フォームセクションのタイトル更新
    document.querySelector('.contact-method.email h3 .en').style.display = 
        currentLanguage === 'en' ? 'block' : 'none';
    document.querySelector('.contact-method.email h3 .ja').style.display = 
        currentLanguage === 'ja' ? 'block' : 'none';
    
    // Instagramセクションのタイトルと説明文の更新
    document.querySelector('.contact-method.instagram h3 .en').style.display = 
        currentLanguage === 'en' ? 'block' : 'none';
    document.querySelector('.contact-method.instagram h3 .ja').style.display = 
        currentLanguage === 'ja' ? 'block' : 'none';
    document.querySelector('.instagram-text .en').style.display = 
        currentLanguage === 'en' ? 'block' : 'none';
    document.querySelector('.instagram-text .ja').style.display = 
        currentLanguage === 'ja' ? 'block' : 'none';
    
    // フォームラベルの更新
    document.querySelector('label[for="name"] .content-name').textContent = 
        translations[currentLanguage].contact.name;
    document.querySelector('label[for="email"] .content-name').textContent = 
        translations[currentLanguage].contact.email;
    document.querySelector('label[for="message"] .content-name').textContent = 
        translations[currentLanguage].contact.message;
    document.querySelector('.submit-btn').textContent = 
        translations[currentLanguage].contact.submit;

    // フッターの言語切り替え
    document.querySelectorAll('.footer-description .ja, .footer-title .ja').forEach(el => {
        el.style.display = currentLanguage === 'ja' ? 'block' : 'none';
    });
    document.querySelectorAll('.footer-description .en, .footer-title .en').forEach(el => {
        el.style.display = currentLanguage === 'en' ? 'block' : 'none';
    });
}

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
    updateContent();

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
});
