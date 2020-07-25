// Copyright (c) 2020 Jonathan. All Rights Reserved.
'use strict';

import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

export default class Connection {
    constructor() {
        let firebaseConfig = {
            apiKey: "AIzaSyA4fY6F2aoUxigER9sB3UNnubHmzf332qc",
            authDomain: "ltsonar-abda4.firebaseapp.com",
            databaseURL: "https://ltsonar-abda4.firebaseio.com",
            projectId: "ltsonar-abda4",
            storageBucket: "ltsonar-abda4.appspot.com",
            messagingSenderId: "1079144473322",
            appId: "1:1079144473322:web:5f344c8f4b81ab4060ed93",
            measurementId: "G-DS54T89E7M"
        };

        firebase.initializeApp( firebaseConfig );

        this.datastore = firebase.firestore();
    }
    // Get all docs from the collection passed in firebase

    get(collectionType) {
        return new Promise( (resolve, reject ) => {

            let collection = this.datastore.collection ( collectionType ); 
            collection.get()
                .then( resultList => {
                    resolve (resultList)
                })
                .catch()
        })
    }

    // Save player in firestore
    postPlayer(collectionType, info) {
        return new Promise( (resolve, reject ) => {
            let collection = this.datastore.collection ( collectionType ); 
            collection.doc(info.id).set(
                {
                    name: info.name,
                }
            )
            .then(() => {
                console.log("Document successfully written!");
                resolve(info.name)
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            
        })
    }

    // Update team and role of player in firestore
    updateTeamRole(collectionType, info) {
        return new Promise( (resolve, reject ) => {

            let collection = this.datastore.collection ( collectionType ); 
            collection.doc(info.id).update(
                {
                    team: info.team,
                    role: info.role
                }
            )
            .then(() => {
                console.log("Document updated!");
                resolve(info)
            })
            .catch((error) => {
                console.error("Error uploading document: ", error);
            });
        })
    }
}