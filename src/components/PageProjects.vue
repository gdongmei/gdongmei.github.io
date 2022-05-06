<template>
    <div class="project">
        <div class="projects-list">
            <a href="/" class="project-item"></a>
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
            display: inline-block;
            width: 100%;
            height: 480px;
            // background: rgba(89, 104, 244, .1);
            background: linear-gradient(to right, rgba(89,104,244,0.2) 0%, rgba(89,104,244,0.1) 100%);
            margin: 0 auto;
        }
    }
}
</style>