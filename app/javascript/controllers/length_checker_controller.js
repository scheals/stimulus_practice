import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'checkable' ]
  connect() {
  }

  checkLength() {
    this.checkedElement = this.checkableTarget
    this.allowedLength = Number(this.checkedElement.attributes.maxlength.value)
    if (this.checkedElement.value.length >= 0.9 * this.allowedLength) {
      alert(`You're approaching the limit of ${this.allowedLength} characters!`)
    }
  }
}
