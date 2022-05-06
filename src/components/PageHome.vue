<template>
    <div class="container">
        <div class="cover">
            <!-- <PageHeader></PageHeader> -->
            <div class="title">
                <h1>Hello,</h1>
                <h1>I'm Dongmei Gao</h1>
                <p>UX Designer | Web Developer</p>
                <div class="download">
                    <button>DOWNLOAD CV</button>
                </div>
            </div>
        </div>
        <PageProjects></PageProjects>
    </div>
    
</template>
<script>
// import PageHeader from './PageHeader.vue'
import PageProjects from './PageProjects.vue'
export default {
    name: 'PageCover',
    components: {
        // PageHeader,
        PageProjects
    }
}
</script>
<style lang="less">
.container {
    // background: url('../assets/images/bg.jpeg') right no-repeat;
    // opacity: 0.8;
    background-size: contain;
    padding-bottom: 100px;
}
.cover {
    position: relative;
    // width: 1100px;
    // padding: 0 16px;
    // margin: 0 auto;
    .bg {
        // background: #F6F6F6;
        // background-image: url('../assets/images/avatar.png');
        background-size: cover;
        // position: absolute;
        // right: 0;
        width: 60%;
        margin-left: 40%;
        height: 710px;
    }
    .title {

        // margin-left: 15%;
        padding-top: 140px;
        // width: 700px;
        h1 {
            font-family: 'Poppins-Bold';
            font-size: 80px;
            color: rgba(0, 0, 0, .9);
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
        text-align: left;
        margin-top: 50px;
        button {
            display: inline-block;
            width: 240px;
            height: 70px;
            border: none;
            background-color: #FFE8E8;
            font-size: 18px;
            color: rgba(0, 0, 0, .6);
            letter-spacing: 5px;
        }
    }
    
}
</style>