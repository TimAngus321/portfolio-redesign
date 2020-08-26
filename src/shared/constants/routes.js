export default Object.freeze({
    HOME: {
        name: 'Home',
        route:'/home'
    },
    ABOUT: {
        name: 'About',
        route: '/about'
    },
    SKILLS: {
        name: 'Skills',
        route: '/me',
        subroutes: {
            SETTINGS: {
                name: 'Settings',
                route: 'me/settings'
            }
        }
    },
    WORK: {
        name: 'Work',
        route: '/work'
    },
    CONTACT: {
        name: 'Contact',
        route: '/contact'
    }
})