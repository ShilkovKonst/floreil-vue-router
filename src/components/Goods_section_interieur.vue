<script>
import Goods_card_brief from '@/components/partials/Goods_card_brief.vue'

import axios from 'axios'

export default {
    name: 'Goods_section',
    components: {
        Goods_card_brief
    },
    props: {

    },
    data() {
        return {
            goods_cards: [],
            errors: [],
        }
    },
    created() {
        axios.get(`http://localhost:5173/data/goods_cards_content.json`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.goods_cards = response.data.goods_cards
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>

<template>
    <section id="commerciale">
        <div class="container">
            <div class="row">
                <template v-for="(goods_card, index) in goods_cards">
                    <Goods_card_brief v-if="goods_card.type === 'interieur'" :image="goods_card.image"
                        :title="goods_card.title" :id="goods_card.id" :Nom_commun="goods_card.Nom_commun"
                        :Genre_de_la_plante="goods_card.Genre_de_la_plante" :Espèce="goods_card.Espèce"
                        :Variété="goods_card.Variété" :Famille="goods_card.Famille" :price="goods_card.price"
                        :quantity="goods_card.quantity" />
                </template>
            </div>
        </div>
    </section>
</template>