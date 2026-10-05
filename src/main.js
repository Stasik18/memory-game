import '@/assets/style/global.css'
import { App } from '@/app'

const root = document.createElement('div')
root.id = 'root'
document.body.append(root)

new App(root).mount()
