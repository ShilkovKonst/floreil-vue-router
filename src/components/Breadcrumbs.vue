<script>
export default {
    name: 'Breadcrumbs',
    data() {
        return {
            crumbs: []
        }
    },
    mounted() {
        this.updateList()
    },
    watch: {
        '$route'() {
            this.updateList()
        }
    },
    methods: {
        routeTo(pRouteTo) {
            if (this.crumbs[pRouteTo].link)
                this.$router.push(this.crumbs[pRouteTo].link)
        },
        updateList() {
            this.crumbs = this.$route.meta.breadcrumb
        }
    }
}
</script>

<template>
    <section id="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex gap-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item">
                                <button class="btn btn-link" @click="routeTo(index)" :class="{'disabled': !crumb.link}">
                                    {{ crumb.name }}
                                </button>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>

</template>