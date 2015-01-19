/**
 * Created by drwasho on 18/01/2015.
 */

var part1 = angular.module('part1', []);
part1.controller('Working',
    function ($scope) {
        $scope.home = function () { // Takes you to a place where everybody knows your name
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
        };
        $scope.toggle = function () { // Reveals the Privacy Policy
            $scope.peek = true;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
        };
        $scope.toggle1 = function () { // Reveals the Contract Import Command Center
            $scope.peek1 = true;
            $scope.peek = false;
            $scope.peek4 = false;
        };
        $scope.toggle2 = function () { // Reveals the OpenBazaar Contract Interpreter
            $scope.peek2 = true;
            $scope.peek4 = false;
            $scope.peek = false;
        };
        $scope.toggle3 = function () { // Reveals the CommonAccord Escrow Contract Format
            $scope.peek3 = true;
            $scope.peek4 = false;
        };
        $scope.toggle4 = function () { // Reveals the OpenBazaar Contract Creation Tool
            $scope.peek4 = true;
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
        };
        $scope.random_nonce = Math.floor((Math.random() * 1000000000000000) + 1);
        $scope.TryContract = function () {
            $scope.contractinput = '{ "stage01_merchant": { "metadata": { "obcv": "0.0.2", "category": "Physical Item", "subcategory": "Fixed price", "expiration_date_YYYYMMDD": "2015-01-01" }, "nonce": "0000000000000000", "item_data": { "title": "Grape Preserves", "description": "18 cases of the finest grape preserve.", "price": { "btc": "0.185", "fiat": { "price": "18.5", "currency": "USD" } }, "image": [ "http://i.imgur.com/t26Wb2a.jpg", "44a8dc6118e37e2d0b2e86bbbefd098a18294b7352ffdb05ec35839be928aaf6" ], "condition": "Great condition", "quantity": "18", "keywords": [ "grape, preserve" ], "region": "Worldwide", "est_delivery": "20 days", "shipper": { "handle": "Fabulous Express, Inc.", "legal_address": "333 Alamo Way Austin" } }, "merchant": { "guid": "b5016e193656d33693a38bc2dbea7c80440c09ee", "handle": "Gerry Grapes, LLC", "legal_address": "1 Broadway street, Cambridge, MA, 02142", "pubkeys": { "pgp": "PGP Pubkey", "secp256k1_uncompressed": "Bitcoin Uncompressed PubKey" } } }, "stage02_buyer": { "guid": "15b3830853a935122da418c36751b30107537c53", "handle": "Roberta Robinson", "legal_address": "666 Winding Drive, Woodstock, NY, 12498", "pubkeys": { "pgp": "PGP Pubkey", "secp256k1_uncompressed": "Bitcoin Uncompressed PubKey" }, "stage01_hash": "" }, "stage03_notary": { "guid": "d617ae301a6285abc9dc2ee444a6b3544d583f8c", "handle": "Safe Hands Faciliated Transaction, Inc", "legal_address": "1550 Bay Street, San Francisco, CA, 94123", "pubkeys": { "pgp": "PGP Pubkey", "secp256k1_uncompressed": "Bitcoin Uncompressed PubKey" }, "stage02_hash": "", "escrow": { "btc_address": "3MXYUBLWNETa5HTewZp1xMTt7AW9kbFNqs", "redemption_script": "524104b3fae54a761c71d38df081cddb75b6306306d8e83338e9b748a02d4978ef48d356ec7fb4155bc819767ed90d56a0dccab185b9bf3d52027cdc226b611ddd398541047aa4c9652beb1a01b351cc212391168c11e192e25a88af79a422c4f83cbc7ed0bb5632c87547c45525167a8c814afc29c7ffe44157547dc21b193ac714b4ba06410420b86afc794ec3307bcf3becc94b30f672a17483581dd703a37956f60ba89cf77bc349fe7d9889f7ed609b14bc397fc4ae0196c8325e6acc4d2e95aceca4d20741046ca17a66be50dc0d0093d3ebbefb74ffbd69fae577dfa329f67444f3f99913708efa5f51ca27fd0509af26245c9d5526b620cb9d90ca9a4a0ef2e3e2fe0e2bb854ae" } }, "signatures": { "stage01_merchant": "", "stage02_buyer": "", "stage03_notary": "" }}';
            $scope.contractinput_final = JSON.parse($scope.contractinput); // allows the JSON to be immediately parsed
            console.log($scope.contractinput_final); // same as above
        };
        $scope.modifyInput = function () {
            $scope.contractinput_final = JSON.parse($scope.contractinput);
            console.log($scope.contractinput_final);
        };
        $scope.start = function () {
            $scope.newcontract = JSON.parse($("#createcontract").text());
            console.log($scope.newcontract);
            $scope.stage01hash = sha256_digest($("#merchanthash").text());
            console.log($scope.stage01hash);
            $scope.stage02hash = sha256_digest($("#buyerhash").text());
            console.log($scope.stage01hash);
        };
        $scope.dasverify = function () {
            try {
                openpgp.initWorker("openpgp.worker.min.js");
            } catch (e) {}
            var daspublickey = $("#daspubkey").text();
            var publickey = openpgp.key.readArmored(daspublickey).keys[0];
            console.log(publickey);
            var dassignature = $("#dasmerchantsig").text();
            var signature = openpgp.cleartext.readArmored(dassignature);
            console.log(signature);
            openpgp.verifyClearSignedMessage(publickey, signature).then(function(sigCheck) {
                if (sigCheck.signatures[0].valid) {
                    $scope.check = "True";
                } else {
                    $scope.check = "False";
                }
            });
        };
    });

function viewTemplate() {
    window.open("https://gist.github.com/drwasho/09b3e0a1187476ca5d2a");
}

