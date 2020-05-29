<template>
    <div>
        <div class="test heading-nav-bar">
            <hr/>
            <div class="text-center" >
                <p class="lead" >
                    Hi, {{ currentUser.name }}!
                    <br />
                    Welcome to the Vue Js Liferay Template.
                </p>
                <div v-if="isUserIDTeamAdmin">
                    <br />
                    <span>
                        You are an admin.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LiferayService from "../services/liferay-api.service";
import "./style.scss"
export default {
    data() {
        return {
            isUserIDTeamAdmin: false
        };
    },
    computed: {
        currentUser: () => { 
            return LiferayService.getCurrentUser();
        }
    },
    mounted: function() {
        this.userHasIDTeamAdmin();
    },
    methods: {
        async userHasIDTeamAdmin() {
            await LiferayService.getCurrentUserHasRole( "IDTeamAdmin" )
                .then( ( hasRole ) => {
                    console.log( "has role? " + hasRole );
                    this.isUserIDTeamAdmin = hasRole;
                })
                .catch( (error) => {
                    // TODO: replace with proper logging
                    console.log( "Failed to get admin status for user " + this.currentUser.name );
                });
        }
    }
};

</script>
