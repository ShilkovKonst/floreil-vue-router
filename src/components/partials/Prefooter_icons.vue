<template>
    <a :href=link target="_blank"
        class="social_links d-flex justify-content-center align-self-center rounded-circle mx-auto mx-sm-0">
        <button
            class="social_buttons d-flex justify-content-center align-self-center btn btn-social-media rounded-circle flex-shrink-0 medium"
            type="submit">
            <i :class=icon class="social_icons fa-lg align-self-center" aria-hidden="true"></i>
        </button>
    </a>
</template>

<script>
export default {
    name: 'Icons_prefooter',
    props: {
        id: Number,
        link: String,
        icon: String
    }
}
</script>