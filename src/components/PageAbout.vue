<template>
    <div class="page-about">
        <PageHeader></PageHeader>
        <div class="introduction-container">
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
                    <p class="content">I'm currently a second-year master student in Aalto University in Finland. I'm majoring in Human-Computer Interaction (HCI) and minoring in USchool which is a subject on designing for people. My major courses include user-centered design and user research. </p>
                    <p class="content">I am also a front-end developer. I worked for a design company for three years. My software developer background has equipped me to analyse problems from different aspects and work well with different roles in a team. After being exposed to much design-related work, I was inspired by the problem-solving process, from investigating potential problems to creating better user experience.</p>
                </div>
            </div>
            <div class="career">
                <p class="content">Now, my career plan is in the field of user experience, including user research and user experience design. I have been working hard to prepare for that. For example, I took a leave from workforce to go back to school and learned professional knowledge in HCI. Also, I did an internship as a product experience designer in 2021. Currently, I am focusing on measuring developer experience of low-code development platforms as my Master's thesis. It's interesting to study user experience from a special group of users.</p>
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
        .introduction-container,
        .contact {
          flex-direction: column;
          .avatar-motto,
          .bio,
          .experience,
          .capability,
          .career {
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
        line-height: 30px;
    }
    .introduction {
        
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
            
        }
    }
    .introduction-container {
        padding-bottom: 60px;
        padding-top: 100px;
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