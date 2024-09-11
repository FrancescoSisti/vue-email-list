console.log(`JS OK`);

// Creazione dell'app Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        generaEmail() {
            for (let i = 0; i < 10; i++) {
                fetch('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => response.json())
                    .then(data => {
                        this.emails.push(data.response);
                    })
                    .catch(error => console.error('Errore durante la richiesta:', error));
            }
        }
    },
    mounted() {
        this.generaEmail();
    }
}).mount('#app');

