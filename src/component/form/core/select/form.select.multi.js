//-----------------------------------------------------------------------------------------------
//
//
//  针对select的封装
//
//
//-----------------------------------------------------------------------------------------------
angular.module('admin.component')
    .directive('uiFormMultiSelect', function (util, uiSelectFactory, componentHelper, defaultCol) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            link: uiSelectFactory,
            template: function (element, attrs) {
                var cc = (attrs.col || defaultCol).split(':');
                return componentHelper.getTemplate('tpl.form.select', $.extend({
                    isMulti: true,
                    leftCol: cc[0],
                    rightCol: cc[1],
                    other: [
                        {key: 'multiple', val: ''},
                        {key: 'title', val: attrs.tip || '请选择'}
                    ]
                }, attrs));
            }
        };
    });
