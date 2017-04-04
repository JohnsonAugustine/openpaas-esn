(function() {
  'use strict';

  angular.module('esn.calendar')
    .component('calendarConfiguration', {
      templateUrl: '/calendar/app/calendar-configuration/calendar-configuration.html',
      bindings: {
        externalCalendar: '@'
      },
      controller: 'calendarConfigurationController'
    });
})();
