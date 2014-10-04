describe('Service: angelloModel', function() {
	// Load the service module
	beforeEach(module('Angello'));

	var modelService;

	// Initialize the service
	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));

	describe('#getStatuses', function() {
		it('should contain ToDo status', function() {
		 		expect(modelService.
		 			getStatuses().
		 			map(function(status) {
		 				return status.name;
		 			})).
		 			toContain('To Do');
		});

		it('should return seven different statuses', function() {
		 		expect(modelService.getStatuses().length).toBe(7);
		});
	});
});