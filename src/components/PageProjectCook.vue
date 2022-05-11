<template>
    <div class="project-item">
        <div class="cover">
            <PageHeader></PageHeader>
            <img src="../assets/images/Cook/1.png" alt="">
        </div>
        <div class="content">
            <img src="../assets/images/Cook/2.png" alt="">
            <img src="../assets/images/Cook/3.png" alt="">
            <img src="../assets/images/Cook/4.png" alt="">
            <img src="../assets/images/Cook/5.png" alt="">
            <img src="../assets/images/Cook/6.png" alt="">
            <img src="../assets/images/Cook/7.png" alt="">
            <img src="../assets/images/Cook/8.png" alt="">
            <img src="../assets/images/Cook/9.png" alt="">
            <img src="../assets/images/Cook/10.png" alt="">
            <img src="../assets/images/Cook/11.png" alt="">
            <img src="../assets/images/Cook/12.png" alt="">
            <img src="../assets/images/Cook/13.png" alt="">
            <img src="../assets/images/Cook/14.png" alt="">
            <img src="../assets/images/Cook/15.png" alt="">
            <img src="../assets/images/Cook/16.png" alt="">
            <img src="../assets/images/Cook/17.png" alt="">
            <img src="../assets/images/Cook/18.png" alt="">
            <img src="../assets/images/Cook/19.png" alt="">
            <img src="../assets/images/Cook/20.png" alt="">
            <img src="../assets/images/Cook/21.png" alt="">
            <img src="../assets/images/Cook/22.png" alt="">
            <div class="prototype">
                <a class="button" target="_blank" href="https://www.figma.com/proto/yXbrzg8DoDEir0nQkuPCdE/Mealtime?page-id=0%3A1&node-id=211%3A1871&viewport=241%2C48%2C0.04&scaling=scale-down&starting-point-node-id=211%3A1871">See Prototype</a>
            </div>
            <img src="../assets/images/Cook/23.png" alt="">
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
        background-color: #FFCDDD;
        padding: 0 24px;
    }
    img {
        width: 80%;
        display: block;
        margin: 0 auto;
    }
    .header {
        right: 60px;
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