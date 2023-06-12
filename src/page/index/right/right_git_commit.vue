<template>
    <div class="right_git_commit_div common_card_div_pc">
        Git提交记录
    </div>
</template>
<script>
export default {
    name: "index_right_git_commit",
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
<style  scoped>
@import "../../../css/common.css";

/* PC */
@media screen and (min-width:768px) {
    .right_git_commit_div {
        width: 28em;
        height: 10em;
        margin-left: 10em;
    }
}

/* 移动端 */
@media screen and (max-width:768px) {}
</style>
