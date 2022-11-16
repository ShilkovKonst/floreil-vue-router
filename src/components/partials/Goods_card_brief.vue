<template>
    <div class="col-12 col-md-6 col-lg-4 my-3">
        <RouterLink :to="`${type}/${id}`"  class="text-decoration-none"><ul class="list-group list-group-horizontal card_shadow rounded-0 rounded-top">
            <li class="list-group-item w-100">
                <h5 class="card-title card-title-height ">{{ title }}</h5>
            </li>
        </ul></RouterLink>
        <div class="card rot_y_180_toggler">            
                <img :src="`./data_goods_images/${image}`" class="card-img rotatable_y_0_to_180 card_shadow rounded-0" :alt=image>            
            <div
                class="card-img-overlay card_shadow rotatable_y_180_to_0 justify-content-center bg_color_2 overflow-auto rounded-0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span class="fw-bold">Nom commun: </span>{{ Nom_commun }}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Genre de la plante: </span>{{ Genre_de_la_plante }}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Espèce: </span>{{ Espèce }}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Famille: </span>{{ Famille }}
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
                <button
                    class="d-flex justify-content-center align-self-center btn btn-header flex-shrink-0 huge">
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
        Genre_de_la_plante: String,
        Espèce: String,
        Variété: String,
        Famille: String,
        link: String,
        price: Number,
        quantity: Number
    },
    data() {
        return {
        }
    }
}
</script>