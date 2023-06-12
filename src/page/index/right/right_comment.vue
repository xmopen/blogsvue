<template>
    <div class="common_card_div_pc right_comment_div">
        最近评论
    </div>
</template>
<script>
export default {
    name: "index_right_comment",
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

/* PC */
@media screen and (min-width:768px) {
    .right_comment_div {
        width: 28em;
        height: 10em;
        margin-left: 10em;
    }
}

/* 移动端 */
@media screen and (max-width:768px) {}
</style>
