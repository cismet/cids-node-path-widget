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
    'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget',
    [
        'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget.directives',
        'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget.controllers',
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