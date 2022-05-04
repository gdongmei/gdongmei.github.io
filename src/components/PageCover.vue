<template>
    <div class="cover">
        <PageHeader></PageHeader>
        <section class="bg">
            <div class="title">
                <h1>Hello</h1>
                <h1>I'm Dongmei Gao</h1>
                <p>UX Designer | Web Developer</p>
            </div>
            <div class="download">
                <button>DOWNLOAD CV</button>
            </div>
        </section>
        
        
    </div>
</template>
<script>
import PageHeader from './PageHeader.vue'
export default {
    name: 'PageCover',
    components: {
        PageHeader
    }
}
</script>
<style lang="less">
.cover {
    position: relative;
    .bg {
        // background: #F6F6F6;
        background-image: url('../assets/images/avatar.png');
        background-size: cover;
        // position: absolute;
        // right: 0;
        width: 60%;
        margin-left: 40%;
        height: 710px;
    }
    .title {
        margin-left: -350px;
        padding-top: 160px;
        width: 700px;
        h1 {
            font-family: 'Poppins-Bold';
            font-size: 80px;
            color: #999;
            text-align: left;
            line-height: 1.4;
        }
        p {
            margin-top: 20px;
            text-align: left;
            font-size: 16px;
            color: #000;
            letter-spacing: 7px;
        }
    }
    .download {
        margin-left: -350px;
        text-align: left;
        margin-top: 40px;
        button {
            display: inline-block;
            width: 260px;
            height: 80px;
            border: none;
            background-color: #FFE8E8;
            font-size: 18px;
            color: rgba(0, 0, 0, .6);
            letter-spacing: 5px;
        }
    }
    
}
</style>