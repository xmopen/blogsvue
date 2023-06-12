<template>
    <div class="index_right_recent_visits_div common_card_div_pc">
        最近
    </div>
</template>
<script>
export default {
    name: "index_right_recent_visits",
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
    .index_right_recent_visits_div {
        width: 28em;
        height: 10em;
        margin-left: 10em;
    }
}
</style>
