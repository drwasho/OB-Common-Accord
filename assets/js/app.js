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
            var itemPrice = item_price.value;
            var itemFiatPrice = item_fiat_price.value;
            var itemFiatXE = item_fiat_xe.value;
            var itemImage = item_image.value;
            var itemImageHash = item_image_hash.value;
            var itemCondition = item_condition.value;
            var itemQuantity = item_quantity.value;
            var itemKeywords = item_keywords.value;
            var itemRegion = item_region.value;
            var itemEstDelivery = item_estdelivery.value;
            var metadataExpDate = metadata_expdate.value;
            var merchantGUID = merchant_guid.value;
            var merchantHandle = merchant_handle.value;
            var merchantLegalAddress = merchant_legaladdress.value;
            var merchantPGPPubkey = merchant_pgp_pubkey.value;
            var merchantECPubkey = merchant_secp256k1_pubkey.value;
            var merchantDigiSig = merchant_digisig.value;
            var dudeden = JSON.stringify({ stage01_merchant: { metadata: {obcv: "0.0.2", category: "Physical item", subcategory: "Fixed Price", Expiration_date: metadataExpDate}, item_data: {title: itemTitle, description: itemDescription, price: {btc: itemPrice, fiat: {price: itemFiatPrice, currency: itemFiatXE}}, image_link: itemImage, image_hash: itemImageHash, condition: itemCondition, quantity: itemQuantity, keywords: itemKeywords, region: itemRegion, estimated_delivery: itemEstDelivery}, merchant: {guid: merchantGUID, handle: merchantHandle, legal_address: merchantLegalAddress, pgp_pubkey: merchantPGPPubkey, bitcoin_pubkey: merchantECPubkey} }, signatures: {merchant_sig: merchantDigiSig}}, null, "\t");
            $scope.display1 = dudeden;
            $scope.newcontract = JSON.parse(dudeden);
            $scope.stage01hash = sha256_digest($("#merchanthash").text());
            console.log($scope.stage01hash);
        };
        $scope.dasverify = function () {
            var daspublickey = $("#daspubkey").text();
            var publickey = openpgp.key.readArmored(daspublickey).keys[0];
            console.log(publickey);
            var dassignature = $("#dasmerchantsig").text();
            var signature = openpgp.cleartext.readArmored(dassignature);
            console.log(signature);
            openpgp.verifyClearSignedMessage(publickey, signature).then(function(sigCheck) {
                $scope.check = sigCheck.signatures[0].valid;
            });
        };
    });