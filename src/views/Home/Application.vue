<template>
    <section id="gitmoji" :class="$style.root">
        <h1 :class="$style.center" ot v-ot-bind="$otColors.title">GitMOJI</h1>
        <p :class="[$style.center, $style.desc]" ot v-ot-bind="$otColors.desc" disabled>An emoji guide for your commit messages</p>
        <ot-row-group :fixable="false">
            <ot-card :class="$style.card" v-for="(item, index) in _gitmojis" :key="index" round height="18em" animation>
                <div slot="top" :class="$style.top" v-ot-copy="item.code">
                    <ot-avatar circle size="2em">{{ item.emoji }}</ot-avatar>
                    <h3 ot v-ot-bind="$otColors.title" :class="$style.title">{{ item.name }}</h3>
                </div>
                <div slot="bottom" ot v-ot-bind="$otColors.desc" :class="[$style.bottom, $style.desc]" disabled>
                    <p ot v-ot-bind="$otColors.desc">{{ item.description }}</p>
                    <p ot v-ot-bind="$otColors.desc">{{ item.description_cn }}</p>
                    <ot-icon :class="$style.time" icon="logo" lib="font-ot"></ot-icon>
                </div>
            </ot-card>
        </ot-row-group>
        <div :class="$style.devide"></div>
    </section>
</template>

<script>
import gitmojis from '@data/gitmojis.json';
export default {
    otDefaultColors() {
        return {
            title: {
                normal: [ 'def-f-n' ],
            },
            desc: {
                normal: [ 'def-f' ],
                disabled: [ 'def-f-dis' ],
            },
        };
    },
    data() {
        return {
            gitmojis: gitmojis,
        };
    },
    computed: {
        _gitmojis() {
            const result = this.gitmojis || [];
            return result;
        },
    },
};
</script>

<style lang="scss" module>
.root {

    .card {
        min-width: 0;
        width: 30%;
        margin: 1%;
        min-height: 16em;
        transition: all .4s;

        @media screen and (max-width: 767px) {
            width: 98%;
        }
    }

    .top {
        text-align: center;
    }

    .bottom {
        font-size: 0.8em;
    }

    .time {
        float: right;
    }

    .title {
        margin: 1em 0;
    }

    .center {
        text-align: center;
    }

    .desc[ot] {
        cursor: auto;
    }

    .devide {
        height: 10em;
    }
}
</style>
