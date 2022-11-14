<template>
    <section class="intersection"></section>

    <section id="commerciale">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center fw-bold">Section commerciale</h2>
                </div>
            </div>
            <div class="row justify-content-evenly">

                <Card v-for="(card, index) in cards" :key="index" :id="card.id" :title="card.title" :image="card.image"
                    :link="card.link" :description="card.description" />
                    
            </div>
        </div>
    </section>

    <section class="intersection"></section>
</template>

<script>
import Card from '@/components/partials/Commerce_card.vue'

import axios from 'axios'

export default {
    name: 'Commerce_section',
    components: {
        Card,
    },
    props: {

    },
    data() {
        return {
            cards: [],
            errors: [],
        }
    },
    created() {
        axios.get(`http://localhost:5173/data/section_cards_content.json`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.cards = response.data.section_cards
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}

</script>