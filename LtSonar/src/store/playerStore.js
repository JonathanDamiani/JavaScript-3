/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 
import Axios from 'axios'
import Connection from "@/store/Connection"

const baseURL = "http://localhost:3000"
const Remote = Axios.create({baseURL: baseURL});

const ERROR_NAME_IN_USE = 100;

const data = new Connection();

export default {
    state: {
        player: new Player(),
        errorStatus: ERROR_NAME_IN_USE,
        errorMessage: "All Ok"
    },
    // I am using the dataSize in order to generate unique ids that I can access later
    // and change the data
    actions: {
        // Saving player in the cloud firestore
        setName({commit}, name) {
            let dataSize = 0;
            let dataToSend = {}

            data.get("Player")
            .then(res => {
                dataSize = res.size;
                dataToSend = {
                    name: name,
                    id:name + dataSize
                }          
            })
            .then( res => {
                data.postPlayer("Player", dataToSend)
                .then( responseData => {
                    commit('SET_NAME', name);
                })
                .catch (error =>{
                    commit('SET_NAME', ERROR_NAME_IN_USE);
                });
            })
            .catch (error =>{
                commit('SET_NAME', ERROR_NAME_IN_USE);
            });
        },

         // Updating player data in firestore with name and role
        setTeamRole({commit}, {team, role}){
            
            let dataToSend = {}
            let dataSize = 0;
            data.get("Player")
            .then(res => {
                dataSize = res.size - 1;
                dataToSend = {
                    id: this.getters.player.name + dataSize,
                    team: team,
                    role: role
                }
                res.forEach(doc => {
                    console.log(doc.data())
                }); 
            })
            .then ( response => {
                data.updateTeamRole("Player",dataToSend)
                .then( responseData => {
                    commit("SET_TEAM_ROLE", responseData);
                })
                .catch (error =>{
                    commit('SET_TEAM_ROLE', ERROR_NAME_IN_USE);
                });
            })
            .catch (error =>{
                commit('SET_TEAM_ROLE', ERROR_NAME_IN_USE);
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
