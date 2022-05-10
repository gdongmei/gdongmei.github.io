<template>
    <div class="project">
        <div class="projects-list">
            <a href="/cook-it" class="project-item project-item-cook-it">
                <div class="left-cover">
                    <img class="cover1" src="../assets/images/Cook/link_cook_1.png" alt="">
                    <img class="cover2" src="../assets/images/Cook/link_cook_2.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Online Recipes App</h2>
                    <p>Mealtime</p>
                </div>
            </a>
            <a href="/meet-player" class="project-item project-item-meet-player">
                <div class="left-cover">
                    <img class="cover1" src="../assets/images/Court/bg.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Online Court Booking App</h2>
                    <p>Meet Player</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PageProjects'
}
</script>
<style lang="less">
.project{
    width: 1100px;
    margin: 80px auto;
    h2{
        font-family: 'Poppins-Bold';
        font-size: 48px;
        color: #999;
        text-align: left;
    }
    .projects-list {
        margin-top: 60px;
        .project-item {
            width: 100%;
            height: 480px;
            // background: rgba(89, 104, 244, .1);
            margin: 0 auto 40px;
        }
    }
    .project-item-cook-it {
        position: relative;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: rgba(0, 0, 0, .8);
        background: linear-gradient(to right, rgba(89,104,244,0.2) 0%, rgba(89,104,244,0.1) 100%);
        .left-cover {
            position: relative;
            width: 40%;
        }
        img {
            width: 40%;
            position: absolute;
            &.cover1 {
                left: 0;
                top: 40px;
            }
            &.cover2 {
                left: 43%;
                top: 80px;
            }
        }
        .right-title {
            text-align: left;
            width: 40%;
            h2 {
                color: #5968F4;
                font-size: 32px;
                font-family: "Poppins-Bold";
                margin-top: 140px;
            }
            p {
                font-size: 24px;
                margin-top: 8px;
            }
        }
    }
    .project-item-meet-player {
        position: relative;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: rgba(0, 0, 0, .8);
        background: linear-gradient(to right, rgba(46,108,108,0.7) 0%, rgba(46,108,108,0.1) 100%);
        .left-cover {
            position: relative;
            width: 40%;
        }
        img {
            width: 100%;
            position: absolute;
            &.cover1 {
                left: -50px;
                top: 10px;
            }
        }
        .right-title {
            text-align: left;
            width: 40%;
            h2 {
                color: #2E6C6C;
                font-size: 32px;
                font-family: "Poppins-Bold";
                margin-top: 140px;
            }
            p {
                font-size: 24px;
                margin-top: 8px;
            }
        }
    }
}
</style>