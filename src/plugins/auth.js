import Vue from 'vue'

// Vue-Auth
import auth from '@websanova/vue-auth';
import bearer from '@websanova/vue-auth/drivers/auth/bearer';
import axios from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';

Vue.use(auth, {
    auth: bearer,
    http: axios,
    router,
    rolesKey: 'type',
    notFoundRedirect: {name: 'user-account'},
});