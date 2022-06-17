<template>
    <div class="solution">
        <div class="container">
            <div class="solution__info">
                <h2 class="solution__title h2">
                    {{title}}
                </h2>
                <p class="solution__text">
                    {{text}}
                </p>
            </div>
        </div>
        <div class="solution__picture d-flex justify-content-center">
            <picture>
                <source :srcset="require('@/assets/imgs/' + imgMob)" media="(max-width: 767px)" width="824" height="400">
                <img :src="require('@/assets/imgs/' + img)" :alt="title" width="1340" height="650">
            </picture>
        </div>
    </div>
</template>

<script>
export default {
    name: "Solutions",
    props: {
        title: String,
        text: String,
        img: String,
        imgMob:String
    }
};
</script>

<style lang="scss" scoped>
    .solution {
        padding-top: 100px;
        padding-bottom: 100px;
        overflow: hidden;
        .solution__info {
            padding-bottom: 70px;
            @include media-breakpoint-down(lg) {
                padding-bottom: 40px;
            }
            @include media-breakpoint-up(lg) {
                padding-left: 100px;
            }
            .solution__title {
                max-width: 680px;
                padding-bottom: 40px;
                @include media-breakpoint-down(sm) {
                    padding-bottom: 30px;
                    width: 345px;
                }
            }
            .solution__text {
                width: 752px;
                max-width: 100%;
                font-size: 22px;
                line-height: 40px;
                @include media-breakpoint-down(sm) {
                    width: 340px;
                    font-size: 18px;
                    line-height: 30px;
                }
            }
        }
        .solution__picture {
            width: 1340px;
            max-width: 100%;
            margin: 0 auto;
        }
    }
</style>