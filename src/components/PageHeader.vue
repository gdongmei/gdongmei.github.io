<template>
    <div class="header">
        <ul class="nav">
            <li class="nav-item"><router-link to="/">PROJECT</router-link></li>
            <li class="nav-item"><router-link to="/about">ABOUT</router-link></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/dongmei-gao/" target="blank">LINKEDIN</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PageHeader'
}
</script>
<style lang="less">
.header {
    position: absolute;
    text-align: right;
    top: 60px;
    right: 0;
    background: transparent;
    .nav {
        list-style: none;
        .nav-item {
            font-size: 14px;
            display: inline-block;
            margin-left: 50px;
            letter-spacing: 4px;
            a {
                text-decoration: none;
                color: #000;
            }
            .router-link-active {
                font-family: "Poppins-Bold";
            }
        }
    }
}
</style>