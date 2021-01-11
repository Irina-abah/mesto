export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedData = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._renderedData.forEach((item) =>
            this._renderer(item))
    }

    renderItem(element) {
        this._container.append(element);
    }

    addNewItem(element) {
        this._container.prepend(element);
    }
}