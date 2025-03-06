import Satoshi from 'next/font/local'

export const satoshi = Satoshi(
  {
    src: [
      {
        path: '../font/satoshi/Satoshi-Regular.otf',
        weight: '400',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Light.otf',
        weight: '300',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Bold.otf',
        weight: '700',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Medium.otf',
        weight: '500',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Black.otf',
        weight: '900',
        style: 'normal'
      }
    ]
  }
)
