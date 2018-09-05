'use strict';


const app = new Vue ({
    el: '#vue',
    data:{
        section: "intro",
    },
    methods:{

        showingIntro: function(e){
            e.preventDefault();
            this.section = "intro"
        },
        showingAbout: function (e){
            e.preventDefault();
            this.section = "about"
        },

        showingWorks: function(e){
            e.preventDefault();
            this.section = "works"
        }
    }
})


