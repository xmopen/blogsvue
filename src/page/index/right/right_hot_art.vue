<template>
    <div class="common_card_div_pc index_right_hot_art_div">
        <b>最热文章</b>
    </div>
</template>

<script>

export default {
    name: "index_right",
    data() {
        return {

        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style scoped>
@import "../../../css/common.css";

/* 移动 */
@media screen and (max-width: 768px) {}

/* PC */
@media screen and (min-width: 768px) {

    .index_right_hot_art_div {
        width: 28em;
        height: 10em;
        margin-left: 10em;
    }
}
</style>
