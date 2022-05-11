<template>
    <div class="project-item">
        <div class="cover">
            <PageHeader></PageHeader>
            <img src="../assets/images/Tree/1.png" alt="">
        </div>
        <div class="content">
            <img src="../assets/images/Tree/2.png" alt="">
            <img src="../assets/images/Tree/3.png" alt="">
            <img src="../assets/images/Tree/5.png" alt="">
            <img src="../assets/images/Tree/6.png" alt="">
            <img src="../assets/images/Tree/7.png" alt="">
            <img src="../assets/images/Tree/8.png" alt="">
            <img src="../assets/images/Tree/9.png" alt="">
            <img src="../assets/images/Tree/10.png" alt="">
            <img src="../assets/images/Tree/11.png" alt="">
            <img src="../assets/images/Tree/12.png" alt="">
            <img src="../assets/images/Tree/13.png" alt="">
            
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
        padding: 0 auto;
        background-color: #F6F2D4;
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