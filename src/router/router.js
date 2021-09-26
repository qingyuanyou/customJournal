import CUSTOM_ROUTE from './custom'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  ...CUSTOM_ROUTE
]
