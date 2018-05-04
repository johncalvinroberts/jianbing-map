<script>
import req from '@/utils/request'
import * as interceptor from '@/utils/interceptor'
import { baseUrl } from '@/config/http'

export default {
  created () {
    req.baseUrl(baseUrl).interceptor(interceptor.request, interceptor.response)
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
