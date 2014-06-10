angular.module(
    'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget.directives',
    []
    ).directive(
    'scenarioNodeEvolutionWidget',
    function () {
        'use strict';
        return {
            scope: {
                selectedNode: '=',
                inputNode: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/ScenarioNodeEvolutionWidgetTemplate.html',
            controller: 'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget.controllers.ScenarioNodeEvolutionDirectiveController'
        };
    }
);
