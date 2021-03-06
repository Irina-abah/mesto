export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(data) {
        data.forEach((item) =>
            this._renderer(item));
    }

    renderItem(element) {
        this._container.append(element);
    }

    addNewItem(element) {
        this._container.prepend(element);
    }

}