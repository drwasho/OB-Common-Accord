/**
 * Created by drwasho on 18/01/2015.
 */

var part1 = angular.module('part1', []);
part1.controller('Working',
    function ($scope) {
        $scope.peek1 = true;
        $scope.home = function () { // Takes you to a place where everybody knows your name
            $scope.peek1 = false;
        };
        $scope.random_nonce = Math.floor((Math.random() * 1000000000000000) + 1);
        $scope.start = function () {
            var itemTitle = item_title.value;
            var itemDescription = item_description.value;

            var dudeden = JSON.stringify({stage01_merchant: {item_title: itemTitle, item_description: itemDescription}});
            $scope.display1 = dudeden;
            $scope.newcontract = JSON.parse(dudeden);
            //$scope.newcontract = JSON.parse($("#createcontract").text());
            //console.log($scope.newcontract);
            $scope.stage01hash = sha256_digest($("#merchanthash").text());
            console.log($scope.stage01hash);
            $scope.stage02hash = sha256_digest($("#buyerhash").text());
            console.log($scope.stage01hash);
        };
        $scope.dasverify = function () {
            openpgp.initWorker = function (s) {
                openpgp.initWorker("openpgp.worker.min.js");
            };
            // Stop, hammer time
            var daspublickey = $("#daspubkey").text();
            var publickey = openpgp.key.readArmored(daspublickey).keys[0];
            console.log(publickey);
            var dassignature = $("#dasmerchantsig").text();
            var signature = openpgp.cleartext.readArmored(dassignature);
            console.log(signature);
            openpgp.verifyClearSignedMessage(publickey, signature).then(function(sigCheck) {
                console.log(sigCheck.signatures[0].valid); // success
            });
        };
    });