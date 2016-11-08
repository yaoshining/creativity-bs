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
        let _report = null;
        Object.defineProperties(this, {
            element: {
                get: () => element
            },
            report: {
                set: report => _report = report,
                get: () => _report
            }
        });
    }

    render() {
        this.element.attr('title', this.title);
        this.element.append($('<div>').addClass(`widget-${this.name}`));
        let removeButton = $('<div>').addClass('widget-remove-button').on('click', () => {
            alert(2);
        }).hover(() => {
            this.element.addClass('warning');
        }, () => {
            this.element.removeClass('warning');
        });
        this.element.append(removeButton);
        return this.element;
    }

}

export default Widget;