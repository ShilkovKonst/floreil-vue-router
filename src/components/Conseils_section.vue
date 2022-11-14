<script>
// import Goods_card_brief from '@/components/partials/Goods_card_brief.vue'

// import axios from 'axios'

// export default {
//     name: 'Goods_section',
//     components: {
//         Goods_card_brief
//     },
//     props: {

//     },
//     data() {
//         return {
//             goods_cards: [],
//             errors: [],
//         }
//     },
//     created() {
//         axios.get(`http://localhost:5173/data/goods_cards_content.json`)
//             .then(response => {
//                 // JSON responses are automatically parsed.
//                 this.goods_cards = response.data.goods_cards
//             })
//             .catch(e => {
//                 this.errors.push(e)
//             })
//     }
// }
</script>

<template>
    <!-- <div class="container">
        <div class="row">

            <template v-for="(card, index) in goods_cards">
                <Goods_card_brief />
            </template>

        </div>


    </div> -->
</template>