// https://github.com/michael-ciniawsky/postcss-load-config

const isMiniProgram = process.env.TARGET === 'mp'
const plugins = isMiniProgram ? { "postcss-mpvue-wxss": {}} : {}

module.exports = {
  "plugins": {
    ...plugins
  }
}
