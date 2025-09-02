export const projectData = [
    {
        id: 'modal-01',
        state: 'finished',
        title: 'Hospital Incident Report Application for Clínica Sagrada Familia',
        description: 'Web application for managing ticket-based reports in a hospital. This project was developed in collaboration with hospital Clínica Sagrada Familia in Barcelona.',
        image: {
            src: '/assets/card/thumb01.jpg',
            srcset: '/assets/card/thumb01.jpg 1x, /assets/card/thumb01@2x.jpg 2x',
        },
        tags: ['react', 'node.js', 'SQL Server'],
        links: [
            { href: 'https://github.com/SF-ClinicProject', icon: 'github-logo' },
            { href: 'https://project-csf-lp.vercel.app/', icon: 'linkBlank' },
        ]
    },
    {
        id: 'modal-02',
        state: 'In progress',
        title: 'KAKEIBO: App for managing income and expenses',
        description: 'App to manage your daily income and expenses. You can compare your monthly income and spending, check the details, and avoid unnecessary expenses. (Language: Spanish)',
        image: {
            src: '/assets/card/thumb02.jpg',
            srcset: '/assets/card/thumb02.jpg 1x, /assets/card/thumb02@2x.jpg 2x',
        },
        tags: ['react', 'Typescript', 'mui', 'firebase'],
        links: [
            { href: 'https://github.com/inamin-kana/expenses-app', icon: 'github-logo' },
            { href: 'https://kakeibo-app-indol.vercel.app/', icon: 'linkBlank' },
        ]
    }
];