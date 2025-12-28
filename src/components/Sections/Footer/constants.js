export const logo = process.env.PUBLIC_URL + '/assets/logo.svg';
const facebook = process.env.PUBLIC_URL + '/assets/facebook.svg';
const inst = process.env.PUBLIC_URL + '/assets/inst.svg';
const youtube = process.env.PUBLIC_URL + '/assets/youtube.svg';

export const footerColumns = [
    {
        id: 1,
        title: 'Репродукции',
        items: ['Франция', 'Германия', 'Англия']
    },
    {
        id: 2,
        title: 'Новинки',
        items: [2021, 2020]
    },
    {
        id: 3,
        title: 'О нас',
        items: ['Художники', 'Менеджеры']
    }
];

export const socialNetworks = [
    { 
        src: facebook,
        alt: 'Facebook',
        href: '#',
    },
    { 
        src: inst,
        alt: 'Instagram',
        href: '#',
    },
    { 
        src: youtube,
        alt: 'YouTube',
        href: '#',
    }
];

