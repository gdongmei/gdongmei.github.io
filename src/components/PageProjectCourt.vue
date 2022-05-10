<template>
    <div class="project-item">
        <PageHeader></PageHeader>
        <div class="cover">
            <img src="../assets/images/Court/1.png" alt="">
        </div>
        <div class="content">
            <img src="../assets/images/Court/2.png" alt="">
            <img src="../assets/images/Court/3.png" alt="">
            <img src="../assets/images/Court/4.png" alt="">
            <img src="../assets/images/Court/5.png" alt="">
            <img src="../assets/images/Court/6.png" alt="">
            <img src="../assets/images/Court/7.png" alt="">
            <img src="../assets/images/Court/8.png" alt="">
            <img src="../assets/images/Court/9.png" alt="">
            <img src="../assets/images/Court/10.png" alt="">
            <img src="../assets/images/Court/11.png" alt="">
            <img src="../assets/images/Court/12.png" alt="">
            <img src="../assets/images/Court/13.png" alt="">
            <img src="../assets/images/Court/14.png" alt="">
            <img src="../assets/images/Court/15.png" alt="">
            <img src="../assets/images/Court/16.png" alt="">
        </div>
    </div>
</template>
<script>
import PageHeader from './PageHeader.vue'
export default {
    components: {
        PageHeader
    }
}
</script>
<style lang="less">
.project-item {
    .cover {
        background-color: #2E6C6C;
    }
    img {
        width: 1100px;
        display: block;
        margin: 0 auto;
    }
    .prototype {
        text-align: center;
        margin-bottom: 100px;
        .button {
            display: inline-block;
            width: 220px;
            height: 64px;
            line-height: 64px;
            border: none;
            border-radius: 4px;
            background-color: #5968F4;
            font-size: 18px;
            color: #fff;
            letter-spacing: 5px;
        }
    }
}
</style>