<template>
    <div class="project-item">
        <div class="cover">
            <PageHeader></PageHeader>
            <img src="../assets/images/Solu/1.png" alt="">
        </div>
        <div class="content">
            <img src="../assets/images/Solu/2.png" alt="">
            <img src="../assets/images/Solu/3.png" alt="">
            <img src="../assets/images/Solu/4.png" alt="">
            <img src="../assets/images/Solu/5.png" alt="">
            <img src="../assets/images/Solu/6.png" alt="">
            <img src="../assets/images/Solu/7.png" alt="">
            <img src="../assets/images/Solu/8.png" alt="">
            <img src="../assets/images/Solu/9.png" alt="">
            <img src="../assets/images/Solu/10.png" alt="">
            <img src="../assets/images/Solu/11.png" alt="">
            <img src="../assets/images/Solu/12.png" alt="">
            <img src="../assets/images/Solu/13.png" alt="">
            <div class="prototype">
                <a class="button" target="_blank" href="https://www.figma.com/file/PUafhXHxMxewpvQ5QSrQBB/IxD?node-id=120%3A8">See Prototype</a>
                <img class="prototype-gif" src="../assets/images/Solu/prototype.gif" alt="">
            </div>
            <img src="../assets/images/Solu/14.png" alt="">
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
        padding: 0 24px;
        background-color: #FF5C01;
    }
    img {
        width: 1100px;
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
            background-color: #FF5C01;
            font-size: 18px;
            color: #fff;
            letter-spacing: 5px;
        }
        img {
            max-width: 450px;
            margin-top: 60px;
        }
    }
}
</style>