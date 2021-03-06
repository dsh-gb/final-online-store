Vue.component('search', {
    data() {
        return {
            userSearch: ''
        }
    },

    methods: {
        searchFilter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.$root.$refs.products.filterList = this.$root.$refs.products.products.filter(el => regexp.test(el.product_name));
        }
    },

    template: `
        <form action="#" @submit.prevent="searchFilter()">
            <input type="text" class="header__form-search" v-model="userSearch" placeholder="поиск...">
        </form>
    `
});