const App = new Vue({
    
    el: "#app",
    data: {
        navVoices: [
            {
                voice: "home",
                link: "#",
                btn: {
                    special: false,
                    message: ""
                }
            }, 
            {
                voice: "who we are",
                link: "#",
                btn: {
                    special: false,
                    message: ""
                }
            },
            {
                voice: "what we do",
                link: "#",
                btn: {
                    special: false,
                    message: ""
                }
            },
            {
                voice: "where we work",
                link: "#",
                btn: {
                    special: false,
                    message: ""
                }
            },
            {
                voice: "Careers",
                link: "#",
                btn: {
                    special: true,
                    message: "apply"
                }
            },
            {
                voice: "news",
                link: "#",
                btn: {
                    special: false,
                    message: ""
                }
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
        ],
        slides: [
            {
                img: "2",
                text: "Ability procedees from a fusiom of skils, knowledge, undertanding and imagination, consolidated by experience",
                testimonialData: {
                    name: "Luis Desalvo",
                    corp: "creo tech"
                }
            },
            {
                img: "1",
                text: "Ability procedees from a fusiom of skils, knowledge, undertanding and imagination, consolidated by experience",
                testimonialData: {
                    name: "Marta Brezovich",
                    corp: "Candi"
                }
            },
        ],
        sliderCount: 0,
        return: false
    },
    methods: {
        slideToIndex: function(index) {
             this.sliderCount = index;
        }
    },
    mounted:  function () {

           setInterval(() => {
               /* valuta la posizione */
               if (this.sliderCount == (this.slides.length - 1)) {
                    this.return = true;
                } else if (this.sliderCount == 0) {
                    this.return = false;
                }
                /* cambia l'immagine */
                if (!this.return) {
                       this.sliderCount++;
                } else if (this.return) {
                       this.sliderCount--;
                }
           }, 3500); 

        }
})