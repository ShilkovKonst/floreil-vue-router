<script>
import axios from 'axios'

export default {
    name: 'Goods_card_full',
    props: {
    },
    data() {
        return {
            goods_cards: [],
            card: {},
        }
    },
    created() {
        const id = parseInt(this.$route.params.id)
        axios.get(`http://localhost:5173/data/goods_cards_content.json`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.goods_cards = response.data.goods_cards

                this.card = this.goods_cards.find(e => e.id === id)
            })
    }
}
</script>

<template>
    <section id="commerciale">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-3">
                        <div class="row">
                            <h3 class="card-title text-center fw-bold">{{ card.title }}</h3>
                        </div>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src="`/src/assets/images/data_goods_images/${card.image}`"
                                    class="img-fluid rounded" :alt=card.image>
                                <div class="d-flex">
                                    <ul class="list-group w-100">
                                        <li class="list-group-item">
                                            <p class="fw-bold">Prix: {{ card.price }} &#x20ac</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p class="fw-bold">Quantité: {{ card.quantity }}</p>
                                        </li>
                                    </ul>
                                    <button
                                        class="d-flex justify-content-center align-self-center btn btn-header flex-shrink-0 huge m-3">
                                        <i class="fa fa-cart-arrow-down fa-2xl align-self-center text-shadow"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p>{{ card.description }}</p>
                                    <ul class="list-group">
                                        <li v-if="card.Résistance_au_froid" class="list-group-item">
                                            <span class="fw-bold">Résistance au froid: </span>
                                            {{ card.Résistance_au_froid_bas }} à
                                            {{ card.Résistance_au_froid_haut }}
                                        </li>
                                        <li v-else class="list-group-item">
                                            <span class="fw-bold">Résistance au froid:</span> non
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Hauteur à maturité (cm): </span>
                                            {{ card.Hauteur_à_maturité_cm }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Feuillage: </span>
                                            {{ card.Feuillage }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Arrosage: </span>
                                            {{ card.Arrosage }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Floraison: </span>
                                            {{ card.Floraison }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Floraison parfumée: </span>
                                            {{ card.Floraison_parfumée }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Mode de vie: </span>
                                            {{ card.Mode_de_vie }}
                                        </li>

                                        <li class="list-group-item">
                                            <span class="fw-bold">Nom commun: </span>
                                            {{ card.Nom_commun }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Genre de la plante: </span>
                                            {{ card.Genre_de_la_plante }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Espèce: </span>
                                            {{ card.Espèce }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Variété: </span>
                                            {{ card.Variété }}
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-bold">Famille: </span>
                                            {{ card.Famille }}
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>