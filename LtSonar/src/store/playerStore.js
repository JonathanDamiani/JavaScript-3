/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 
import Axios from 'axios'

const baseURL = "http://localhost:3000"
const Remote = Axios.create({baseURL: baseURL});


const ERROR_NAME_IN_USE = 100;

export default {
    state: {
        player: new Player(),
        errorStatus: ERROR_NAME_IN_USE,
        errorMessage: "All Ok"
    },

    actions: {
        setName({commit}, name) {
            let dataToSend = {
                name: name
            }
            JSON.stringify(dataToSend);
            Remote.post("api/player/login", dataToSend)
            .then(response => response.data)
            .then( data => (data.error ? error => { throw(error) } : data.payload ))
            .then( responseData => {
                console.log(responseData);
                commit('SET_NAME', name);
            })
            .catch (error =>{
                commit('SET_NAME', ERROR_NAME_IN_USE);
            });
        },

        setTeamRole({commit}, {team, role}){
            console.log(role);
            let dataToSend = {
                team: team,
                role: role
            }
            JSON.stringify(dataToSend);
            Remote.post("api/player/set_team_role", dataToSend)
            .then(response => response.data)
            .then( data => (data.error ? error => { throw(error) } : data.payload ))
            .then( responseData => {
                console.log(responseData);
                commit("SET_TEAM_ROLE", responseData);
            })
            .catch (error =>{
                commit('SET_ROLE', ERROR_NAME_IN_USE);
            });

            
        },
    },

    mutations: {
        SET_NAME: ( state, name ) => { state.player.name = name },
        SET_TEAM_ROLE: ( state, {team, role} ) => { state.player.team = team, state.player.role = role },
    },

    getters: {
        player: state => state.player,
    },
}
