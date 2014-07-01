'use strict';

describe('Directive: forum', function () {

  // load the directive's module
  beforeEach(module('miniGeekPolymerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<forum></forum>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the forum directive');
  }));
});
