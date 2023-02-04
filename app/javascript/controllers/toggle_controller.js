import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ 'hidden', 'highlight' ]
  static targets = [ 'highlightable', 'showable', 'button' ]

  connect() {
  }

  hide() {
    this.showableTargets.forEach((element) => element.classList.toggle(this.hiddenClass))
  }

  highlight() {
    this.highlightableTargets.forEach((element) => element.classList.toggle(this.highlightClass))
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
