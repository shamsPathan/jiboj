import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'What ToDo?',
        item:'',
        todo:[
        "hello","hams","athan"
    ]
    },
    methods:{
        hello(){
            return "hello";
        }
    },
    computed:{
        hi:function(){
            return "hams";
        }
    }
});
