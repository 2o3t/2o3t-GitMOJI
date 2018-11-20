<template>
    <footer ot v-bind="$otColors" :class="$style.root" :theme="$otTheme">
        <ot-row :gutter="10" :theme="$otTheme">
            <ot-col :class="$style.left" :xs="24" :sm="12">
                <div ot v-ot-bind="$otColors.text">
                    <ot-icon icon="logo" lib="font-ot">{{ copyRight }}</ot-icon>
                </div>
            </ot-col>
            <ot-col :class="$style.right" :xs="24" :sm="12">
                <div ot v-ot-bind="$otColors.text">
                    {{ byWho }}
                </div>
            </ot-col>
        </ot-row>
    </footer>
</template>

<script>
export default {
  otDefaultColors() {
    return {
        normal: ["def-f-n", "def-bg-n"],
        text: {
            normal: this.color === 'default' ? [ ] : ["light-f-n"],
        },
    };
  },
  data () {
      return {
          copyRight: '© 2018 2O3T.cn, Inc.',
          byWho: 'Made with ❤ by 2O3T',
      }
  },
};
</script>

<style lang="scss" module>
.root {
  min-height: 1em;
  position: relative;
  overflow: hidden;
  padding: 1em;

  .left {
      text-align: left;
  }

  .right {
      text-align: right;
  }

  @media screen and (max-width: 768px) {
    .left {
        text-align: center;
    }

    .right {
        text-align: center;
    }
  }
}
</style>
