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
                <p class="content">I am also a front-end developer. I worked for an Internet company for three years. My software developer background has equipped me to analyse problems from different aspects and work well with different people. I am studying developer experience as my Master's thesis. It's interesting to combine developer and user experience together.</p>
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
@media (max-width: 768px) {
    .page-about {
        .introduction,
        .contact {
          flex-direction: column;
          .avatar-motto,
          .bio,
          .experience,
          .capability {
            width: 100%;
            h1,
            p {
                text-align: center;
            }
          }
          .bio,
          .experience {
              margin-top: 100px;
          }
        }
    }
}
@media (min-width: 768px) {
    .page-about {
        .introduction,
        .contact {
          .avatar-motto,
          .capability {
            width: 40%;
          }
          .bio,
          .experience {
            width: 50%;
          }
        }
    }
}
.page-about {
    position: relative;
    margin: 0 auto;
    padding-bottom: 200px;
    width: 1134px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 24px 100px;
    box-sizing: border-box;
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
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
        .avatar-motto {
            vertical-align: top;
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
            display: inline-block;
            line-height: 30px;
        }
    }

    hr {
        border: 1px solid #eee;
    }
    
    .contact {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        .content {
            line-height: 40px;
        }
    }
}

</style>