<template>
    <div class="page-about">
        <PageHeader></PageHeader>
        <div class="introduction">
            <div class="avatar-motto">
                <div class="avatar">
                    <img src="../assets/images/avatar1.jpg" alt="">
                </div>
                <div class="motto">
                    <p class="content">"Think and question, do and learn, care and act."</p>
                </div>
            </div>
            <div class="bio">
                <h1 class="title">ABOUT DONGMEI GAO</h1>
                <p class="content">I'm currently a second-year master student in Aalto University in Finland. I'm majoring in Human-Computer Interaction and minoring in USchool which focuses on designing for people. My major courses include user-centered design and user research. </p>
                <p class="content">I am also a front-end developer. I worked for an Internet company for three years.</p>
            </div>
            
        </div>
        <hr>
        <div class="contact">
            <div class="capability">
                <h1 class="title">
                    DIGITAL CAPABILITIES
                </h1>
                <p class="content">Websites <br> iOS and Android Apps <br> Strategy <br> Research </p>
            </div>
            <div class="experience">
                <h1 class="title">
                    EXPERIENCE
                </h1>
                <p class="content">
                    Research Assistant at Aalto University
                    <br>
                    Product Experience Designer at Tencent
                    <br>
                    Front-end Developer at GaoDing
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
import PageHeader from "./PageHeader.vue"
export default {
    components: {
        PageHeader
    },
    name: "PageAbout"
}
</script>
<style lang="less">
.page-about {
    position: relative;
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 200px;
    .title {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 4px;
        text-align: left;
    }
    .content {
        margin-top: 20px;
        text-align: left;
        color: #333;
    }
    .introduction {
        padding-bottom: 60px;
        padding-top: 140px;
        // display: flex;
        // justify-content: start;
        .avatar-motto {
            vertical-align: top;
            width: 40%;
            display: inline-block;
            // flex-grow: 1;
            .avatar img{
                display: inline-block;
                width: 100%;
                height: 100%;
                
            }
            .motto {
                font-family: "Poppins-Italic";
                .content {
                    margin-top: 10px;
                    color: #949494;
                }
            }
        }
        .bio {
            width: 50%;
            display: inline-block;
            flex-grow: 2;
            margin-left: 100px;
            line-height: 30px;
        }
    }

    hr {
        border: 1px solid #eee;
    }
    
    .contact {
        margin-top: 60px;
        .content {
            line-height: 40px;
        }
        .experience {
            display: inline-block;
            vertical-align: top;
            width: 50%;
            margin-left: 100px;
            flex-grow: 1;
        }
        .capability {
            width: 40%;
            display: inline-block;
            flex-grow: 1;
        }
    }
}
</style>