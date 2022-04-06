const speed = 0.02

export default class Paddle {
    constructor(paddleElement) {
        this.paddleElement = paddleElement
    }
    get position() {
        return parseFloat(getComputedStyle(this.paddleElement).getPropertyValue("--position"));

    }
    set position(value) {
        this.paddleElement.style.setProperty("--position", value);
    }

    update(delta, ballHeight) {
        this.position += speed * delta * (ballHeight - this.position)
    }

}
