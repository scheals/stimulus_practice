import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ 'hidden' ]
  static targets = [ 'showable', 'button' ]

  connect() {
  }

  hide() {
    this.showableTargets.forEach((element) => element.classList.toggle(this.hiddenClass))
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
