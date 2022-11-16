<template>
    <div class="col-12 col-md-6 col-lg-4 my-3">
        <RouterLink :to="`${type}/${id}`" class="text-decoration-none">
            <ul class="list-group list-group-horizontal card_shadow rounded-0 rounded-top">
                <li class="list-group-item w-100">
                    <h5 class="card-title card-title-height ">{{ title }}</h5>
                </li>
            </ul>
        </RouterLink>
        <div class="card rot_y_180_toggler">
            <img :src="`./data_goods_images/${image}`" class="card-img rotatable_y_0_to_180 card_shadow rounded-0"
                :alt=image>
            <div
                class="card-img-overlay card_shadow rotatable_y_180_to_0 justify-content-center bg_color_2 overflow-auto rounded-0 p-1">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span class="fw-bold">Nom commun: </span>{{ Nom_commun }}
                    </li>
                    <li v-if="Résistance_au_froid" class="list-group-item">
                        <span class="fw-bold">Résistance au froid (&#176С): </span>
                        {{ Résistance_au_froid_bas }} à
                        {{ Résistance_au_froid_haut }}
                    </li>
                    <li v-else class="list-group-item">
                        <span class="fw-bold">Résistance au froid:</span> non
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Hauteur à maturité (cm): </span>
                        {{ Hauteur_à_maturité_cm }}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Floraison parfumée: </span>
                        {{ Floraison_parfumée }}
                    </li>
                </ul>
            </div>
        </div>
        <ul class="list-group list-group-horizontal card_shadow rounded-0 rounded-bottom">
            <li class="list-group-item w-100 px-2">
                <p><span class="fw-bold">Prix: </span><br>{{ price }} &#8364</p>
            </li>
            <li class="list-group-item w-100 px-2">
                <p><span class="fw-bold">Quantité: </span><br>{{ quantity }}</p>
            </li>
            <li class="list-group-item">
                <button class="d-flex justify-content-center align-self-center btn btn-header flex-shrink-0 huge">
                    <i class="fa fa-cart-arrow-down fa-2xl align-self-center text-shadow"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: "Goods_card_brief",
    props: {
        id: Number,
        type: String,
        image: String,
        title: String,        
        Nom_commun: String,
        Résistance_au_froid: Boolean,
        Résistance_au_froid_bas: Number,
        Résistance_au_froid_haut: Number,
        Hauteur_à_maturité_cm: Number,
        Floraison_parfumée: String,
        price: Number,
        quantity: Number
    },
    data() {
        return {
        }
    }
}
</script>