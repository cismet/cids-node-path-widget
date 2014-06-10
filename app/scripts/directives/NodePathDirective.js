angular.module(
    'de.cismet.cids.widgets.nodePathWidget.directives',
    []
    ).directive(
    'cidsNodePathWidget',
    function () {
        'use strict';
        return {
            scope: {
                selectedNode: '=',
                inputNode: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/CidsNodePathWidgetTemplate.html',
            controller: 'de.cismet.cids.widgets.nodePathWidget.controllers.NodePathDirectiveController'
        };
    }
);
