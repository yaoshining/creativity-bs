/**
 * Created by yaoshining on 16/8/12.
 */
export default function Column(size) {

    const element = $('<div>').addClass('report-col'),
          content = $('<div>').addClass('col-content');
    size = size || 12;

    Object.defineProperties(this, {
        size: {
            get: () => size
        }
    });

    $.extend(this, {
        render: i => {
            element.addClass('col-xs-' + size);
            element.addClass('num-'+ i);
            element.html(content);
            return element;
        },
        toJSON: () => {
            let obj = $.extend({}, this);
            obj.size = size;
            return obj;
        }
    });

    content.on('click', () => {
        const widgetSelector = this.$designer.widgetSelector;
        if(widgetSelector.enable) {
            const widget = new widgetSelector.selectedWidget();
            this.$designer.report.widgets.push(widget);
            widget.report = this.$designer.report;
            this.content = {
                id: widget.id
            };
            Object.defineProperties(widget, {
                $designer: {
                    get: ()=> this.$designer
                }
            });
            content.html(widget.render());
        }
    });
}