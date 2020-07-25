/*
VUEX Data Store.
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use( Vuex, Axios )

import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

// Modules
import ModelStore from '@/store/modelStore'
import PlayerStore from '@/store/playerStore'
import FirstOfficerStore from '@/store/firstOfficerStore'
import EngineerStore from '@/store/EngineerStore'
import RecordStore from '@/store/RecordStore'
import ChatStore from '@/store/ChatStore'
import GameStore from '@/store/GameStore'
import Connection from "@/store/Connection"

// Store with modules
const store = new Vuex.Store({
    modules: {
        ModelStore,
        PlayerStore,
        FirstOfficerStore,
        EngineerStore,
        RecordStore,
        ChatStore,
        GameStore
    }
});

export default store;