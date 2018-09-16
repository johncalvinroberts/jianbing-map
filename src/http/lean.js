import { leanAppId, leanAppKey } from '@/keys'
import wechat from 'leancloud-storage/dist/av-weapp-min'
import web from 'leancloud-storage'

const isMiniProgram = process.env.TARGET === 'mp'

const AV = isMiniProgram ? wechat : web

class Lean {
  constructor() {

    AV.init({
      appId: leanAppId,
      appKey: leanAppKey
    })

    Object.keys(AV).map(key => {
      this[key] = AV[key]
    })
  }
}

export const Lean = new Lean()
