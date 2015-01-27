var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, teamService, $route){

$scope.allTeams = ['utahjazz', 'losangeleslakers', 'miamiheat'];

$scope.homeData = {
	'utahjazz': [],
	'losangeleslakers': [],
	'miamiheat': []
};

for (var i = 0; i < $scope.allTeams.length; i++) {
	var team = $scope.allTeams[i];
	switch (team) {
	case 'utahjazz':
	

		teamService.getTeamData('utahjazz').then(function(res) {
			$scope.homeData['utahjazz'] = res;
		});
		$scope.homeData['utahjazz'].homeTeamFull = 'Utah Jazz';
		$scope.homeData['utahjazz'].logoPath = 'images/jazz-logo.png';
		break;
	case 'losangeleslakers':
		$scope.homeData['losangeleslakers'].homeTeamFull = 'Los Angeles Lakers';
		$scope.homeData['losangeleslakers'].logoPath = 'images/lakers-logo.png';



		teamService.getTeamData('losangeleslakers').then(function(res) {
			$scope.homeData['losangeleslakers'] = res;
		});
		break;
	case 'miamiheat':
		$scope.homeData['miamiheat'].homeTeamFull = 'Miami Heat';
		$scope.homeData['miamiheat'].logoPath = 'images/heat-logo.png';


		teamService.getTeamData('miamiheat').then(function(res) {
			$scope.homeData['miamiheat'] = res;
		});
		break;
	default: 
		console.log('Switch Error');
	}

}

});