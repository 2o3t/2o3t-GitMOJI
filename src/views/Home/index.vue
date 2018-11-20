<template>
    <div :class="$style.root">
        <div :class="$style.banner">
            <div :class="$style.box">
                <ot-icon :class="$style.logo" v-bind="$otColors.logo" icon="logo" lib="font-ot" size="20em"></ot-icon>
                <p ot v-ot-bind="$otColors.logo" :class="$style.text">GitMOJI</p>
                <p ot v-ot-bind="$otColors.desc" disabled>An emoji guide for your commit messages.</p>
                <ot-link :class="$style.btn" @click="handleGotoStartClick">
                    <ot-button size="big" circle>GET STARTED</ot-button>
                </ot-link>
                <ot-link :class="$style.btn" href="//github.com/2o3t/">
                    <ot-button icon="github-fill" lib="font-ot" size="big" circle>GITHUB</ot-button>
                </ot-link>
            </div>
        </div>
        <div :class="$style.content">
            <application></application>
        </div>
        <div>
            <h-footer></h-footer>
        </div>
    </div>
</template>

<script>
import Application from './Application';
import HFooter from './Footer';
export default {
    otDefaultColors() {
        return {
            selected: [ 'pri-bg-sel', 'selected' ],
            logo: {
                normal: [ 'def-f' ],
            },
            desc: {
                disabled: [ 'def-f-dis' ],
            },
        };
    },
    components: {
        Application,
        HFooter,
    },
    methods: {
        handleGotoStartClick() {
            const els = document.getElementById('gitmoji');
            const $content = this.$el.parentElement;
            if (els && $content) {
                const currentY = this.$el.scrollTop;
                const targetY = els.offsetTop;
                this.$otUtils.scrollAnimation(currentY, targetY, $content);
            }
        },
    },
};
</script>

<style lang="scss" module>
.root {

    .banner {
        position: relative;
        height: 100%;
        width: 100%;
        text-align: center;

        .box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .logo {
            line-height: 1;
        }

        .text {
            font-size: 5em;
            font-weight: bolder;
            margin: 0;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }

        .btn {
            margin: 2em 1em;
            display: inline-block;
        }
    }

    .content {
        max-width: 1080px;
        margin: auto;
    }
}
</style>
