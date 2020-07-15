<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <div class="role-component" @click="select()"> 
        <div class="user-icon" :class="title"></div>
        <h2>{{ title }}</h2>
        <h3>{{name}}</h3>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ComponentController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                title: String,
                team:String,
                name: String
            }

            this.injectActions(['setTeamRole']);
        }

        select( ) {
            this.setTeamRole({team:this.team, role:this.title})

            this.$router.push('/' + this.title)
        }
    }

    export default new ComponentController('ltRole'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>

    .role-component {
        display: inline-block;
        text-align: center;
        height: 35%;
        width: 45%;
        margin: 1%;
        padding: 2%;
    }

    .role-component:hover{
        background: rgba(255, 255, 255, 0.3);
    }

    .user-icon{
        height: 50%;
        width: 100%;
        margin-bottom: 1%;

        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .Navigator{

        background-image:url("../assets/navigator.png");
    }
    .Captain{

        background-image:url("../assets/captain.png");
    }
    .Firstofficer{
        background-image:url("../assets/firstOfficer.png");
    }
    .Engineer{
        background-image:url("../assets/engineer.png");
    }
</style>