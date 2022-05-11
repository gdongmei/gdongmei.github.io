<template>
    <div class="page-project-container">
        <div class="projects-list">
            <a href="/cook-it" class="project-item project-item-cook-it">
                <div class="left-picture">
                    <img class="picture" src="../assets/images/Cook/bg.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Online Recipes App</h2>
                    <p>Mealtime</p>
                </div>
            </a>
            <a href="/meet-player" class="project-item project-item-meet-player">
                <div class="left-picture">
                    <img class="picture" src="../assets/images/Court/bg.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Online Court Booking App</h2>
                    <p>Meet Player</p>
                </div>
            </a>
            <a href="/we-planter" class="project-item project-item-we-planter">
                <div class="left-picture">
                    <img class="picture" src="../assets/images/Tree/bg.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Online Tree Planting App</h2>
                    <p>We Planters</p>
                </div>
            </a>
            <a href="/solu" class="project-item project-item-solu">
                <div class="left-picture">
                    <img class="picture" src="../assets/images/Solu/mockup.png" alt="">
                </div>
                <div class="right-title">
                    <h2>Social Distance Physical Installation</h2>
                    <p>SOLU</p>
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
@media (max-width: 768px) {
    .page-project-container {
        .projects-list {
            .project-item {
                flex-direction: column;
                .left-picture {
                    width: 60%;
                    max-height: 300px;
                }
                .right-title {
                    width: 100%;
                    margin-left: 0;
                    h2,p {
                        text-align: center;
                    }
                }
            }
        }
    }
}
@media (min-width: 769px) {
    .page-project-container{
        .projects-list {
            .project-item {
                .left-picture {
                    width: 40%;
                }
                .right-title {
                    width: 40%;
                    margin-left: 60px;
                    h2, p {
                        text-align: left;
                    }
                }
            }

        }

    }
}

.page-project-container{
    width: 100%;
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
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: rgba(0, 0, 0, .8);
            .left-picture {
                position: relative;
                img {
                    width: 100%;
                    transition: transform 0.2s ease-in-out;
                }
            }
            .right-title {
                h2 {
                    font-size: 32px;
                    font-family: "Poppins-Bold";
                }
                p {
                    font-size: 24px;
                    margin-top: 8px;
                }
            }
            &:hover {
                img {
                    transform: scale(1.05);
                }
            }
        }
        .project-item-cook-it {
            background: linear-gradient(to right, rgba(89,104,244,0.2) 0%, rgba(89,104,244,0.1) 100%);
            .left-picture {
                position: relative;
                width: 40%;
                img {
                    &.picture {
                        // left: -50px;
                        right: 40px;
                    }
                }
            }
            
            .right-title {
                h2 {
                    color: #5968F4;
                }
            }
        }
        .project-item-meet-player {
            background: linear-gradient(to right, rgba(46,108,108,0.7) 0%, rgba(46,108,108,0.1) 100%);
            img {
                &.picture {
                    // left: -50px;
                    // top: 10px;
                }
            }
            .right-title {
                h2 {
                    color: #2E6C6C;
                }
            }
        }
        .project-item-we-planter {
            background: linear-gradient(to right, rgba(246,242,212,0.7) 0%, rgba(246,242,212,0.1) 100%);
            img {
                &.picture {
                    // left: -50px;
                    // top: 40px;
                }
            }
            .right-title {
                h2 {
                    color: #95D1CC;
                }
            }
        }
        .project-item-solu {
            background: linear-gradient(to right, rgba(255,92,1,0.7) 0%, rgba(255,92,1,0.1) 100%);
            img {
                &.picture {
                    // left: -50px;
                    top: 40px;
                }
            }
            .right-title {
                h2 {
                    color: #FF5C01;
                }
            }
        }

    }

}

</style>