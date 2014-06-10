//angular.module('tpltest', []).run(['$templateCache', function($templateCache) {
//    $templateCache.put('partials/worldstateSelector.html', 
//'<div>'
//    + '<select id="worldstate-selection-widget" multiple="true" size="10" data-ng-model="selectedWorldstates" '
//             +'data-ng-options="ws.name for ws in worldstates" >'
//    +'</select>'
//+'</div>'
//)    
//}]);

// this only combines all the modules in a single one 
angular.module(
    'de.cismet.cids.widgets.nodePathWidget',
    [
        'de.cismet.cids.widgets.nodePathWidget.directives',
        'de.cismet.cids.widgets.nodePathWidget.controllers',
        'de.cismet.cids.rest.collidngNames.Nodes'
    ]
).controller(
    'AppCtrl',
    [
        '$scope',
        'de.cismet.collidingNameService.Nodes',
        function ($scope, Nodes) {
            'use strict';
            $scope.selectedNode = {};
            Nodes.get({nodeId: '55.56.57.58'}, function (node) {
                $scope.node = node;
            });
        }
    ]
);