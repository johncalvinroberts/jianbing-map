import { leanAppId, leanAppKey } from '@/keys'
import AV from 'leancloud-storage/dist/av-weapp-min'

class Lean {
  constructor () {
    AV.init({
      appId: leanAppId,
      appKey: leanAppKey
    })
    Object.keys(AV).map(key => {
      this[key] = AV[key]
    })
  }
}

export default new Lean()
