<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Item_carousel',
    props: {
        id: Number,
        link: String,
        image: String,
        title: String,
        description: String,
    }
}
</script>

<template>
    <div v-if="id === 1" class="carousel-item active" style="max-height: 500px" data-bs-interval="100">
        <RouterLink :to=link>
            <img :src="`./src/assets/images/carousel/${image}`" class="d-block w-100 img-fluid" :alt=title>
            <div class="carousel-caption p-3 p-lg-5">
                <h5>{{ title }}</h5>
                <p class="d-none d-md-block">{{ description }}</p>
            </div>
        </RouterLink>
    </div>
    <div v-else class="carousel-item" style="max-height: 500px" data-bs-interval="100">
        <a :href=link>
            <img :src="`./src/assets/images/carousel/${image}`" class="d-block w-100 img-fluid" :alt=title>
            <div class="carousel-caption p-3 p-lg-5">
                <h5>{{ title }}</h5>
                <p class="d-none d-md-block">{{ description }}</p>
            </div>
        </a>
    </div>
</template>