<template lang="pug">
  .blocks-wrapper
    h2.title
      router-link(:to='entity.listLink')
        icon(:name='entity.icon')
        span &nbsp; {{pageTitle}}
    .blocks(v-if='blocks.length')
      .pending-msg.box(v-if='pending')
        button.txt-center.info(@click='updateBlocks')
          em there are
            strong.badge {{ pending }}
          em new blocks, click  here to update the list
      template(v-for='block,index in blocks')
        block-box(v-if='index <= 10' :block='block')
    .msg(v-else)
      h2 Requesting blocks
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import BlockBox from './BlockBox.vue'
import PendingBlocks from './PendingBlocks.vue'
import dataMixin from '../mixins/dataMixin'
export default {
  name: 'last-blocks',
  components: {
    BlockBox,
    PendingBlocks
  },
  mixins: [
    dataMixin
  ],
  data () {
    return {
      type: 'blocks'
    }
  },
  computed: {
    ...mapState({
      blocks: state => state.backend.blocks,
      lastBlocks: state => state.backend.lastBlocks
    }),
    ...mapGetters({
      pending: 'pendingBlocks'
    })
  },
  methods: {
    ...mapActions(['updateBlocks'])
  }
}
</script>
<style lang="stylus">
  .blocks-wrapper
    .blocks
      .block-box
        .block:first-child
          margin-top 0 !important
</style>
