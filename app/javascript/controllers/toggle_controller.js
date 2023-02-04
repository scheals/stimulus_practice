import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ 'change' ]
  static targets = [ 'toggleable', 'button' ]

  connect() {
  }

  toggle() {
    this.toggleableTargets.forEach((element) => element.classList.toggle(this.changeClass))
  }

  changeDescription() {
    const showDescription = 'Show element'
    const hideDescription = 'Hide element'
    if (this.buttonTarget.textContent == showDescription) {
      this.buttonTarget.textContent = hideDescription
    } else {
      this.buttonTarget.textContent = showDescription
    }
  }
}
