<template>
    <div class="page-navbar">
        <div class="page-navbar-id">
            Dongmei Gao
        </div>
        <ul class="page-navbar-container" :class="{'on': isMenuOpen}">
            <li class="nav-item"><router-link to="/">PROJECT</router-link></li>
            <li class="nav-item"><router-link to="/about">ABOUT</router-link></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/dongmei-gao/" target="blank">LINKEDIN</a></li>
        </ul>
        <div class="page-navbar-toggle" :class="{'on': isMenuOpen}" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PageHeader',
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>
<style lang="less">
@media (max-width: 768px) {
    .page-navbar {
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;
        .page-navbar-id {
            font-family: "Poppins-Bold";
            position: relative;
            z-index: 11;
            display: block;
            font-size: 18px;
            color: #1110128f;
        }
        .page-navbar-container {
            position: fixed;
            top: -100%;
            right: 0;
            height: 100%;
            background-color: #fff;
            transition: top .2s ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &.on {
                top: 0;
            }
            .nav-item {
                margin: 12px 0;
            }
        }
        .page-navbar-toggle {
            position: relative;
            z-index: 11;
            width: 15px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            span {
                width: 100%;
                height: 1px;
                background-color: #1110128f;
                margin-bottom: 3px;
                transition: .2s ease-out;
                transition-property: transform;
            }
            &.on {
                width: 15px;
                height: 15px;
                span:nth-child(2) {
                    transform: rotate(45deg) translate(2px, 3px);
                    width: 16px;
                }
                span:nth-child(3){
                    transform: rotate(-45deg) translateY(-1px);
                    width: 16px;
                }
                span:first-child,
                span:nth-child(4){
                    background-color: transparent;
                }
            }
        }
    }
}
@media (min-width: 769px) {
    .page-navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 36px 0
    }
    .page-navbar-container {
        align-items: center;
    }
    .page-navbar-id {
        display: none;
    }
    .page-navbar-toggle {
        display: none;
    }
}
.page-navbar {
    display: flex;
    position: relative;
    z-index: 2;
    height: max-content;
    text-align: right;
    background: transparent;
    width: 100%;
    .page-navbar-container {
        list-style: none;
        width: 100%;
    }
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
</style>