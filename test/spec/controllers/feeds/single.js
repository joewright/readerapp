'use strict';

var FeedsSingleCtrl, scope, mockedFeed, httpBackend;
describe('Controller: FeedsSingleCtrl', function() {

    // load the controller's module
    beforeEach(module('readsterApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        // Set up the expected feed data
        httpBackend = $httpBackend;
        $httpBackend.whenGET(/parse/).respond({});

        scope = $rootScope.$new();
        FeedsSingleCtrl = $controller('FeedsSingleCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(scope.current);
    });
});