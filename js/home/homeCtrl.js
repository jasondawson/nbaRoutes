var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, $route){

$scope.allTeams = ['utahjazz', 'losangeleslakers', 'miamiheat'];

$scope.homeData = {
	'utahjazz': [],
	'losangeleslakers': [],
	'miamiheat': []
};

var home_init = function() {



for (var i = 0; i < $scope.allTeams.length; i++) {
	var team = $scope.allTeams[i];
	console.log(team)
	switch (team) {
	case 'utahjazz':
		$scope.homeData['utahjazz'].homeTeam = 'Utah Jazz';
		$scope.homeData['utahjazz'].logoPath = 'images/jazz-logo.png';
		
		homeService.getTeamData('utahjazz').then(function(res) {
			$scope.homeData['utahjazz'] = res;
		});
		break;
	case 'losangeleslakers':
		$scope.homeData['losangeleslakers'].homeTeam = 'Los Angeles Lakers';
		$scope.homeData['losangeleslakers'].logoPath = 'images/lakers-logo.png';

		homeService.getTeamData('losangeleslakers').then(function(res) {
			$scope.homeData['losangeleslakers'] = res;
		});
		break;
	case 'miamiheat':
		$scope.homeData['miamiheat'].homeTeam = 'Miami Heat';
		$scope.homeData['miamiheat'].logoPath = 'images/heat-logo.png';

		homeService.getTeamData('miamiheat').then(function(res) {
			$scope.homeData['miamiheat'] = res;
		});
		break;
	default: 
		console.log('Switch Error');
	}

	/*homeService.getTeamData($scope.allTeams[i]).then(function(res) {
		$scope.homeData[$scope.allTeams[i]] = i;
		//$scope.homeData[$scope.allTeams[i]] = res;
	})*/
}

console.log($scope.homeData);

  $scope.navTo = function(url) {
    if ($location.path() === url) {
      $route.reload();
    } else {
      $location.path(url);
    }
  };

};

home_init();

});