import { component$, Slot } from '@builder.io/qwik'
import styles from './layout.module.css'

export default component$(() => {
  return (
    <div class="container">
      <div class="row">
        <div class={[styles.content, styles.img]}>
          <Slot />
        </div>
      </div>
    </div>
  )
})
