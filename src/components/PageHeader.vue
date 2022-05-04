<template>
    <div class="header">
        <ul class="nav">
            <li class="nav-item">WORK</li>
            <li class="nav-item">PROJECT</li>
            <li class="nav-item">ABOUT</li>
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
    margin-top: 60px;
    left: 25%;
    background: transparent;
    .nav {
        list-style: none;
        .nav-item {
            font-size: 16px;
            display: inline-block;
            margin-left: 50px;
            letter-spacing: 6px;
        }
    }
}
</style>