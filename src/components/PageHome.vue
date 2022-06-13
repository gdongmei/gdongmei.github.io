<template>
    <div class="page-home">
        <div class="page-cover-container">
            <PageHeader></PageHeader>
            <div class="page-cover">
                <div class="title">
                    <h1>Hello,</h1>
                    <h1>I'm Dongmei Gao</h1>
                    <p>User Researcher | UX Designer | Web Developer</p>
                    <div class="download">
                        <button @click="onClick">DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </div>
        <PageProjects></PageProjects>
    </div>
    
</template>
<script>
import PageHeader from './PageHeader.vue'
import PageProjects from './PageProjects.vue'
export default {
    name: 'PageCover',
    components: {
        PageHeader,
        PageProjects
    },
    methods: {
        onClick() {
            location.href="https://drive.google.com/file/d/1g1DrE_2hk1cVv8oN1gmCSBnjOAPhk6xi/view?usp=sharing";
        }
    }
}
</script>
<style lang="less">

.page-home {
    width: 1134px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    .page-cover-container {
        margin: 0 auto;
    }
    .page-cover {
        position: relative;
        .title {
            padding-top: 100px;
            h1 {
                font-family: 'Poppins-Bold';
                font-size: 60px;
                color: rgba(0, 0, 0, .8);
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
                cursor: pointer;
            }
        }
        
    }
}

</style>