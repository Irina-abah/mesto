class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedData = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }

    renderItems = () => {
        this._renderedData.forEach(item =>
            this._renderer(item));
    }

    addItem = (element) => {
        this._container.prepend(element);
    }
}