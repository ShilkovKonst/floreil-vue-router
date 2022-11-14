<template>
    <section id="prefooter_section" class="sticky-bottom">
        <div class="container-fluid">
            <div class="row">
                <div id="social" class="col-12 d-flex gap-3">
                    <div
                        class="florei_brun_separator separator_adjustible grad-to-left h-75 align-self-center mx-auto mx-sm-0 ms-0 ms-sm-auto">
                    </div>

                    <Icon v-for="icon in icons" :link=icon.link :icon=icon.icon />

                    <div
                        class="florei_brun_separator separator_adjustible grad-to-right h-75 align-self-center mx-auto mx-sm-0 me-0 me-sm-auto">
                    </div>
                    <a href="#footer" class="d-flex justify-content-center align-self-center rounded-circle">
                        <button
                            class="d-flex justify-content-center align-self-center btn btn-additional rounded-circle flex-shrink-0 medium"
                            type="submit">
                            <i class="fa fa-angle-double-down fa-lg align-self-center" aria-hidden="true"></i>
                        </button>
                    </a>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from '@/components/partials/Prefooter_icons.vue'

import axios from 'axios'

export default {
    name: 'Prefooter',
    components: {
        Icon
    },
    props: {
    },
    data() {
        return {
            icons: [],
            errors: [],
        }
    },
    created() {
        axios.get(`http://localhost:5173/data/prefooter_icons_types.json`)
        .then(reponse => {
            this.icons = reponse.data.prefooter_icons
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>