<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
Copyright (c) 2020. Jonathan Dean All Rights Reserved.
-->
<template>

    <section class="base-container player-container inside-container">
        <playerInfo
            :name="player.name"
            :team="player.team"
            :role="player.role"
            :turn="gameState.roles[gameState.rolesTurn]"
        />
        <pgNavbar></pgNavbar>
        <div class="main-content">
            <div class="first-officer">
                <div class="top-container">
                    <div class="first-officer-submarine">
                    </div>
                    <div class="first-officer-damage">
                        <div class="first-officer-damage-container"></div>
                        <div class="first-officer-damage-container"></div>
                        <div class="first-officer-damage-container"></div>
                        <div class="first-officer-damage-container"></div>
                    </div>
                </div>
                <div class="first-officer-cards" >
                    <ltFirstOfficerCard
                        title="Mines"
                        imageUrl="mines.png"
                        infoImageUrl="mines-info.png"
                        v-bind:isActive = "minesStatus"
                        v-bind:numberOfItems="3"
                        @weaponReady="onMinesReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Drones"
                        imageUrl="drones.png"
                        infoImageUrl="drones-info.png"
                        v-bind:isActive = "dronesStatus"
                        v-bind:numberOfItems="4"
                        @weaponReady="onDronesReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Silence"
                        imageUrl="silence.png"
                        infoImageUrl="silence-info.png"
                        v-bind:isActive = "silenceStatus"
                        v-bind:numberOfItems="5"
                        @weaponReady="onSilenceReady"
                    ></ltFirstOfficerCard>
                </div>
                <div class="first-officer-cards">
                    <ltFirstOfficerCard
                        title="Torpedo"
                        imageUrl="torpedo.png"
                        infoImageUrl="torpedo-info.png"
                        v-bind:isActive = "torpedoStatus"
                        v-bind:numberOfItems="3"
                        @weaponReady="onTorpedoReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Sonar"
                        imageUrl="sonar.png"
                        infoImageUrl="sonar-info.png"
                        v-bind:isActive = "sonarStatus"
                        v-bind:numberOfItems="3"
                        @weaponReady="onSonarReady"
                    ></ltFirstOfficerCard>
                </div>
                
                <div class="blackout" v-if="gameState.roles[gameState.rolesTurn] != name"></div>
                <!--un comment this to see the real turn behaviour-->
                <!--<div class="blackout" v-if="gameState.roles[gameState.rolesTurn]!=player.role || player.role != name "></div>-->
            </div>
            <pgChat speaker="First Officer"></pgChat>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import ltFirstOfficerCard from '@/components/firstOfficerCard'
    import playerInfo from '@/components/PlayerInfo.vue'
    import pgChat from '@/components/chatComponent.vue'
    import pgNavbar from '@/views/Navbar.vue'

    class FirstOfficerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Firstofficer',
            }
            this.methods = {
                onMinesReady (value) {
                    this.setMinesStatus(value);
                },
                onDronesReady(value) {
                    this.setDronesStatus(value);
                },
                onSilenceReady(value) {
                    this.setSilenceStatus(value);
                },
                onTorpedoReady(value) {
                    this.setTorpedoStatus(value);
                },
                onSonarReady(value) {
                    this.setSonarStatus(value);
                }
            }

            this.injectGetters([
                'player',
                'minesStatus',
                'dronesStatus',
                'silenceStatus',
                'torpedoStatus',
                'sonarStatus',
                'gameState'
            ]);

            this.injectActions(
                ['setMinesStatus', 
                'setDronesStatus', 
                'setSilenceStatus', 
                'setTorpedoStatus', 
                'setSonarStatus']
            );
        }
    }

    export default new FirstOfficerController('lsFirstOfficer', { ltFirstOfficerCard, playerInfo, pgNavbar, pgChat });

</script>
<style>
/* Local styles for this template */

    .main-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .first-officer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;

        position: relative;
    }

    .top-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .first-officer-damage {
        display: flex;
        align-items: center;
    }

    .first-officer-damage-container {
        width: 100px;
        height: 30px;
        background-color: white;
        border: 2px solid black;
    }

    .first-officer-damaged {
        background-color: red;
    }

    .first-officer-container {
        width: 100%;
    }

    .first-officer-submarine {
        width:350px;
        height: 100px;
        background-image: url("../assets/submarine.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .first-officer-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>
