Vue.component('error', {
    props: ['visible'],

    template: `
        <div class="error" v-show="visible">
            <h2>Connection error</h2>
        </div>
    `
});