/**
 * Created by yaoshining on 16/8/12.
 */
export default function Column(size) {

    const element = $('<div>').addClass('report-col'),
          content = $('<div>').addClass('col-content');
    size = size || 12;

    $.extend(this, {
        render: i => {
            element.addClass('col-xs-' + size);
            element.addClass('num-'+ i);
            element.html(content);
            return element;
        }
    });

}