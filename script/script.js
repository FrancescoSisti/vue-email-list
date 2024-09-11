console.log(`JS OK`);

// Creo l'app Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            loadingCompleted: false
        }
    },
    methods: {
        async generateEmails() {
            try {
                const requests = Array(10).fill().map(() =>
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                );
                const responses = await Promise.all(requests);
                this.emails = responses.map(response => response.data.response);
                this.loadingCompleted = true;
            } catch (error) {
                console.error('Error while generating emails:', error);
            }
        }
    },
    mounted() {
        this.generateEmails();
    }
}).mount('#app');


