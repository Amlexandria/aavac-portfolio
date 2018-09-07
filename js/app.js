'use strict';


const app = new Vue ({
    el: '#vue',
    data:{
        section: "intro",
        x: false,
        y: false,
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
            debugger;
            e.preventDefault();
            $('#works-section section.works').empty();
            this.section = "works"
            
            this.$nextTick(function () {
                if(!this.x){
                $('.carouselll').Zippy(args);
                this.x = true;
            } // => 'updated'
              })
            
        },

        showingDev: function(e){
            e.preventDefault();
            this.section = "dev"
            console.log(this.y);
            $('.innerrr').empty();
            this.$nextTick(function () {
                // if(!this.y){
                    
                    $('.carouselll').Zippy(args);
                    this.y = true;
                // }  // => 'updated'
              })
            
        },

        showingDesigner: function(e){
            e.preventDefault();
            this.section = "designer"
            $('.innerrr').empty();
            this.$nextTick(function () {
                $('.carouselll').Zippy(args); // => 'updated'
              })
            
        },


        
    }
})

