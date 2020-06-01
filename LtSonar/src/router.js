/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import lsCaptain from '@/routes/Captain.vue'
import lsNavigator from '@/routes/Navigator.vue'
import lsFirstOfficer from '@/routes/FirstOfficer.vue'
import lsEngineer from '@/routes/Engineer.vue'

export default new Router({
    routes: [
        { path:"/",                 name:"Lobby", component: About },
        { path:"/home",             name:"Home", component: Home, props: { name: "DemoApp"} },
        { path:"/navigator",        name:"Navigator", component: lsNavigator},
        { path:"/captain",          name:"Captain", component: lsCaptain},
        { path:"/firstofficer",     name:"Firstofficer", component: lsFirstOfficer },
        { path:"/engineer",         name:"Engineer", component: lsEngineer },
    ]
});