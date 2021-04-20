const App = new Vue({
    
    el: "#app",
    data: {
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
        ]
    },
    methods: {
        
    }
})