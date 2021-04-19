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
                storage: 5,
                users: "Unlimited Users"
            },
            {   
                type: "Premium",
                price: 19,
                nProject: 5,
                storage: 5,
                users: "Unlimited Users"
            },
            {
                type: "Professional",
                price: 19,
                nProject: 5,
                storage: 5,
                users: "Unlimited Users"
            },
            {
                type: "Extreme",
                price: 19,
                nProject: 5,
                storage: 5,
                users: "Unlimited Users"
            }
        ]
    },
    methods: {
        
    }
})