const vueApp = new Vue({
    el: '#app',
    data: function () {
        return {
            appName: `User Management`,
            author: `Kurstud.io Corp`,
            users: [{
                "id": 1,
                "name": "Michale Castel",
                "email": "mcastel0@cnbc.com",
                "gender": "Male"
            }, {
                "id": 2,
                "name": "Ransom Rathbone",
                "email": "rrathbone1@cisco.com",
                "gender": "Male"
            }, {
                "id": 3,
                "name": "Mattie Coomer",
                "email": "mcoomer2@usatoday.com",
                "gender": "Female"
            }, {
                "id": 4,
                "name": "Tonnie Elias",
                "email": "telias3@yahoo.com",
                "gender": "Male"
            }, {
                "id": 5,
                "name": "Marjy Dargie",
                "email": "mdargie4@shinystat.com",
                "gender": "Female"
            }],
            userUpdate: {},
            genders: [
                "Male", "Female"
            ]
        }
    },
    computed: {
        appTitle() {
            return this.appName + ' by ' + this.author
        }
    },

    methods: {
        edit(user) {
            // console.log(user)
            this.userUpdate = user
        },
        destroy(indexUser) {
            let quest = confirm("Are you sure?")
            if (quest) {
                this.users.splice(indexUser, 1)
            }
        }
    }

})