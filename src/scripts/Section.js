export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector)
        this._renderer = renderer
        this._initialArray = items
    }

    addItem(item) {
        this._container.prepend(item)
    }

    renderItems() {

        this._initialArray.forEach(item => {
            this._renderer(item)
        });
        
    }
}