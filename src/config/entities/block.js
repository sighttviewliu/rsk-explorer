import { ROUTES as r } from '../types'

const Blocks = () => {
  return {
    key: 'number',
    icon: 'cube',
    link: `/${r.block}/`,
    listLink: `/${r.blocks}/`,
    singular: 'block',
    plural: 'blocks',
    fields: {
      number: {
        type: 'block',
        default: 0
      },
      txs: {
        field: 'transactions',
        type: 'transaction',
        filters: ['count']
      },
      hash: null,
      miner: {
        field: 'miner',
        type: 'miner'
      },
      size: null,
      timestamp: {
        default: 0
      }
    }
  }
}

const Block = () => {
  let block = Blocks()
  block.fields = Object.assign(block.fields, {
    hash: {
      trim: 'auto'
    },
    parentHash: {
      trim: 'auto'
    },
    sha3Uncles: {
      trim: 'auto'
    },
    miner: {
      trim: 'auto'
    },
    difficulty: {
      type: 'difficulty'
    },
    totalDifficulty: {
      type: 'difficulty'
    },
    gasLimit: {
      type: 'gas'
    },
    gasUsed: {
      type: 'gas',
      default: 0
    },
    minimumGasPrice: null,
    extraData: null,
    transactions: {
      renderAs: 'data-table',
      renderAsProps: {
        type: 'transactions',
        hideFields: ['block'],
        link: `/${r.transaction}/`
      }
    }
  })
  block.itemTitle = true
  return block
}

export const block = Block()
export const blocks = Blocks()