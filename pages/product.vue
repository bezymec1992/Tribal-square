<template>
    <div>
        <div class="idea">
            <div class="container">
                <div class="idea__info row d-flex justify-content-between">
                    <div class="idea__item col col-md-6 col-12">
                        <h3 class="h3 idea__title">
                            Idea
                        </h3>
                        <p class="idea__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. 
                        </p>
                    </div>
                    <div class="idea__item col col-md-6 col-12">
                        <h3 class="h3 idea__title">
                            Assets
                        </h3>
                        <p class="idea__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. 
                        </p>
                    </div>
                </div>
                <div class="idea__picture d-flex justify-content-start">
                        <picture>
                            <source srcset="../assets/imgs/product__idea-mb.png" media="(max-width: 767px)" width="661" height="337">
                            <img src="../assets/imgs/product__idea-desk.png" alt="partners-logo" width="1233" height="628">
					    </picture>
                </div>
                
            </div>
        </div>

        <div class="target">
            <div class="container">
                <h2 class="h2 target__title d-flex justify-content-center">
                    Tagret audience
                </h2>
                <div class="target__items d-flex justify-content-center">
                    <div class="target__item d-flex justify-content-center ">
                        <p class="target__text">
                            Small car companies
                        </p>
                    </div>
                    <div class="target__item d-flex justify-content-center ">
                        <p class="target__text">
                            Different car dealers
                        </p>
                    </div>
                    <div class="target__item d-flex justify-content-center">
                        <p class="target__text">
                            Other car companies
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="location d-flex">
            <div class="container">
                <div class="laction__wrapper d-flex">
                    <div class="location__info">
                        <span class="location__span">
                            Location
                        </span>
                        <h3 class="h3 location__title">
                            Where do we use this product
                        </h3>
                        <p class="location__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.
                        </p>
                    </div>
                    <div class="location__picture">
                        <picture>
                            <source srcset="../assets/imgs/location-mb.png" media="(max-width: 1200px)" width="476" height="469">
                            <img src="../assets/imgs/location-desk.png" alt="partners-logo" width="609" height="600">
					    </picture>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    .idea {
        overflow: hidden;
        .idea__info {
        .idea__text {
        width: 527px;
        max-width: 100%;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        @include media-breakpoint-down(md) {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 40px;
        }
        }
        .idea__title {
            font-size: 34px;
            padding-bottom: 10px;
            @include media-breakpoint-down(md) {
                font-size: 28px;
            }
        }
    }
    .idea__picture {
        @include media-breakpoint-down(md) {
            position: relative;
            left: -50px;
            
        }
    }
    }

    .target {
        padding-top: 100px;
        padding-bottom: 140px;
        @include media-breakpoint-down(lg) {
            padding-top: 58px;
            padding-bottom: 80px;
        }
        .target__title{
            margin-bottom: 50px;
        }
        .target__items {
            @include media-breakpoint-down(lg) {
                flex-direction: column;
                align-items: center;

                .target__item:last-child:after {
                    position:absolute;
                    bottom:0;
                    left:25%;
                    width:180px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                    content:"";
                }
            }
            .target__item::after {
                position:absolute;
                top:0;
                left:25%;
                width:50%;
                border-top: 1px solid rgba(0, 0, 0, 0.4);
                content:"";
            }
            .target__item {
                width: 346px;
                max-width: 100%;
                text-align: center;
                height: 180px;
                align-items: center;
                border-left: 1px solid rgba(0, 0, 0, 0.4);
                @include media-breakpoint-down(lg) {
                    border-left: none;
                    position: relative;
                    height: 120px;
                }
                .target__text {
                    width: 260px;
                    max-width: 100%;
                    font-size: 26px;
                    line-height: 40px;
                    @include media-breakpoint-down(lg) {
                        font-size: 22px;
                    }
                }
            }
            .target__item:last-child {
                border-right: 1px solid rgba(0, 0, 0, 0.4);
                @include media-breakpoint-down(lg) {
                    border-right: none;
                }
            }
        }
    }

    .location {
        background: #EEF3F5;
        max-width: 1240px;
        height: 600px;
        margin: 0 auto; 
        position: relative;
        margin-bottom: 100px;
        @include media-breakpoint-down(xl) {
            height: 812px;
            .laction__wrapper {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .location__picture {
                    position: unset;
                }
                .location__info {
                    margin-top: 60px;
                    margin-left: 0;
                }
            }
        }
        .location__info {
            width: 464px;
            max-width: 100%;
            margin-top: 150px;
            margin-left: 50px;
            .location__span {
            font-size: 22px;
            line-height: 24px;
            text-transform: uppercase;
            color: #500AC9;
            }
            .location__text {
                font-size: 18px;
                line-height: 32px;
            }
            .location__title {
                padding-bottom: 30px;
                padding-top: 20px;
            }
        
        }
        .location__picture {
            position: absolute;
            top: 0;
            right: 0;
        }
        
    }
    
</style>
