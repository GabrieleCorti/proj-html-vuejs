const App = new Vue({
    
    el: "#app",
    data: {
        navVoices: [
            {
                voice: "home",
                link: "#",
                special: false
            }, 
            {
                voice: "who we are",
                link: "#",
                special: false
            },
            {
                voice: "what we do",
                link: "#",
                special: false
            },
            {
                voice: "where we work",
                link: "#",
                special: false
            },
            {
                voice: "Careers",
                link: "#",
                special: true
            },
            {
                voice: "news",
                link: "#",
                special: false
            },
        ],
        /* array di oggeti per associare img e description per alt */
        imgNumbers: [
        {
            imgNumber: "1-1",
            description: "qualcosa"
        },
        {
            imgNumber: "2",
            description: "qualcosa"
        },
        {
            imgNumber: "3-1",
            description: "qualcosa"
        },
        {
            imgNumber: "4-1",
            description: "qualcosa"
        },
        {
            imgNumber: "5-1",
            description: "qualcosa"
        },
        {
            imgNumber: "6-1",
            description: "qualcosa"
        }],
        /* piani facilmento modificabili in questo modo */
        plans: [
            {
                type: "Standard",
                price: 19,
                nProject: 5,
                storage: "5 GB",
                users: "Unlimited Users"
            },
            {   
                type: "Premium",
                price: 29,
                nProject: 10,
                storage: "15 GB",
                users: "Unlimited Users"
            },
            {
                type: "Professional",
                price: 39,
                nProject: 15,
                storage: "30 GB",
                users: "Unlimited Users"
            },
            {
                type: "Extreme",
                price: 59,
                nProject: "Unlimited",
                storage: "Unlimited",
                users: "Unlimited Users"
            }
        ],
        partners: [
            {
                number: "5",
                description: "nome del partner"
            },
            {
                number: "6",
                description: "nome del partner"
            },
            {
                number: "1",
                description: "nome del partner"
            },
            {
                number: "2",
                description: "nome del partner"
            }
        ]
    },
    methods: {
        
    }
})