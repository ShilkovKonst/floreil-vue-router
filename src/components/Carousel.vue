<template>
  <section id="ads_carousel">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center fw-bold">Section publicité</h2>
        </div>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner" >
          <Item v-for="item in items" :id=item.id :link=item.link :image=item.image :title=item.title
            :description=item.description />

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Item from '@/components/partials/Item_carousel.vue'

import axios from 'axios'

export default {
  name: 'Carousel',
  components: {
    Item
  },
  props: {
  },
  data() {
    return {
      items: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:5173/data/carousel_items_content.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.items = response.data.carousel_items
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>