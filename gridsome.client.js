import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faGithub, faInstagram, faLinkedin, faTwitter)

export default function(Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}
