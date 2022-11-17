<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Commerce_card',
    props: {
        id: Number,
        title: String,
        description: String,
        link: String,
        image: String
    },
    data() {
        return {
            isHidden: true,
            d_block: 'd-block',
            d_none: 'd-none',
        }
    },
    methods: {
        activate() {
            setTimeout(() => this.isHidden = false, 100);
        },
        desactivate() {
            setTimeout(() => this.isHidden = true, 100);
        },
    }
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-4 mt-4">
        <div v-on:mouseenter="activate()" v-on:mouseleave="desactivate()" class="card rot_y_180_toggler rounded-circle">
            <img :src="`./src/assets/images/${image}`" class="card-img card_shadow rotatable_y_0_to_180 rounded-circle" :alt=title>
            <div
                class="card-img-overlay card_shadow rotatable_y_180_to_0 text-center d-flex flex-column justify-content-center rounded-circle bg_color_2">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <RouterLink :to=link v-if="!isHidden" :class="d_block" :href=link class="card_text_link">{{ title }}
                </RouterLink>
                <a v-else :class="d_none" :href=link class="card_text_link">{{ title }}</a>
            </div>
        </div>
    </div>
</template>