<template>
    <div>
        <div class="more__item d-flex align-items-center">
            <img class="more__main-icon" :src="require('@/assets/imgs/' + img)" :alt="title">
            <div class="more__text-wrap">
                <span class="more__span">
                    {{title}}
                </span>
                <p class="more__text">
                    {{text}}
                </p>
            </div>
                <img class="more__arrow" src="../assets/imgs/Vector-right.png" alt="arrow-right" width="18" height="36">
        </div>
    </div>
</template>

<script>
export default {
    name: "Discover",
    props: {
        title: String,
        text: String,
        img: String,
    }
};
</script>

<style lang="scss" scoped>
    .more__item {
        padding: 30px 0;
        width: 550px;
        max-width: 100%;
        transition: ease 0.3s;
        margin: 0 auto;
        position: relative;
        @include media-breakpoint-up(md) {
            padding-left: 25px;
            padding-right: 25px;
        }
        &::after{
            content:'';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            width: 100%;
            @include media-breakpoint-up(md) {
                transform: translateX(-50%);
                left: 50%;
                width: calc(100% - 50px);
            }
        }
        
        .more__text {
            font-size: 30px;
            line-height: 30px;
            padding-top: 4px;
            @include media-breakpoint-down(md) {
                font-size: 22px;
            }
        }
        .more__span {
            opacity: 0.4;
            font-size: 20px;
            line-height: 24px;
            @include media-breakpoint-down(md) {
                font-size: 16px;
                }
        }
        .more__arrow {
            margin-left: auto;
            @include media-breakpoint-down(md) {
                width: 15px;
                height: 30px;
            }
        }
        .more__text-wrap {
            margin-left: 24px;
        }
        .more__main-icon {
            @include media-breakpoint-down(md) {
                width: 60px;
                height: 60px;
            }
        }
    }
    .more__item:hover {
        @include media-breakpoint-up(xl) {
            background: #EEF3F5;
            border-radius: 20px;
            cursor: pointer;
        }
    }
</style>