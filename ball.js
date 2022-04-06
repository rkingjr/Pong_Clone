export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElement.style.setProperty("--x", value)
    }

    update(delta) {
        this.x = 5 
    }
}
