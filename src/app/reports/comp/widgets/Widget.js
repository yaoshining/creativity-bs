/**
 * Created by yaoshining on 16/8/24.
 */
class Widget {

    constructor() {
        this.id = guid();
        this.category = null;
        this.name = null;
        this.title = '组件';
        let element = $('<div>').addClass('report-widget');
        Object.defineProperties(this, {
            element: {
                get: () => element
            }
        });
    }

    render() {
        this.element.attr('title', this.title);
        this.element.append($('<div>').addClass(`widget-${this.name}`));
        this.removeButton = $('<div>').addClass('widget-remove-button').on('click', () => {
            alert(2);
        }).hover(() => {
            this.element.addClass('warning');
        }, () => {
            this.element.removeClass('warning');
        });
        this.element.append(this.removeButton);
        return this.element;
    }

}

export default Widget;