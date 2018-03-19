import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start'
import CreateWallet from '@/pages/create_wallet'
import Words from '@/pages/words'
import RepeatePassphrase from '@/pages/repeate_passphrase'
import Wallet from '@/pages/wallet'
import ManageAddresses from '@/pages/manage_addresses'
import Receive from '@/pages/receive'
import Scan from '@/pages/scan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/create_wallet',
      name: 'CreateWallet',
      component: CreateWallet
    },
    {
      path: '/words',
      name: 'Words',
      component: Words
    },
    {
      path: '/repeate_passphrase',
      name: 'RepeatePassphrase',
      component: RepeatePassphrase
    },
    {
      path: '/manage_addresses',
      name: 'ManageAddresses',
      component: ManageAddresses
    },
    {
      path: '/receive',
      name: 'Receive',
      component: Receive
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan
    },
  ]
})
