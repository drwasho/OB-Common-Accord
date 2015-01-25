/**
 * Created by drwasho on 18/01/2015.
 */

var part1 = angular.module('part1', []);
part1.controller('Working',
    function ($scope) {
        $scope.peek1 = false;
        $scope.peek2 = false;
        $scope.home = function () { // Takes you to a place where everybody knows your name
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
        };
        $scope.toggle1 = function () {
            $scope.peek1 = true;
            $scope.peek2 = false;
            $scope.peek3 = false;
        };
        $scope.toggle2 = function () {
            $scope.peek1 = false;
            $scope.peek2 = true;
            $scope.peek3 = false;
        };
        $scope.toggle3 = function () {
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = true;
        };
        var nonce = Math.floor((Math.random() * 1000000000000000) + 1);
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
            var dudeden = JSON.stringify({ stage01_merchant: { metadata: {obcv: "0.0.2", category: "Physical item", subcategory: "Fixed Price", nonce: nonce, expiration_date: metadataExpDate}, item_data: {title: itemTitle, description: itemDescription, price: {btc: itemPrice, fiat: {price: itemFiatPrice, currency: itemFiatXE}}, image_link: itemImage, image_hash: itemImageHash, condition: itemCondition, quantity: itemQuantity, keywords: itemKeywords, region: itemRegion, estimated_delivery: itemEstDelivery}, merchant: {guid: merchantGUID, handle: merchantHandle, legal_address: merchantLegalAddress, pubkeys: {pgp: merchantPGPPubkey, bitcoin_pubkey: merchantECPubkey}}}, signatures: {merchant_sig: merchantDigiSig, buyer_sig: ""}});
            $scope.newcontract = JSON.parse(dudeden);
            $scope.display1 = JSON.stringify($scope.newcontract, null, 4);
        };
        $scope.stage01_verify = function () {
            $scope.stage01hash = sha256_digest($("#merchanthash").text());
            var stage01_publickey = $("#stage01_pubkey").text();
            var publickey = openpgp.key.readArmored(stage01_publickey).keys[0];
            console.log(publickey);
            var stage01_signature = $("#stage01_merchantsig").text();
            var signature = openpgp.cleartext.readArmored(stage01_signature);
            console.log(signature);
            openpgp.verifyClearSignedMessage(publickey, signature).then(function(sigCheck) {
                $scope.check = sigCheck.signatures[0].valid;
				console.log(sigCheck.signature[0].valid);
            });
        };
        $scope.start2 = function () {
            var clash = JSON.parse($scope.buycontract);
            console.log(clash);
            var buyerGUID = buyer_guid.value;
            var buyerHandle = buyer_handle.value;
            var buyerLegalAddress = buyer_legaladdress.value;
            var buyerPGPPubkey = buyer_pgp_pubkey.value;
            var buyerECPubkey = buyer_secp256k1_pubkey.value;
            var buyerDigiSig = buyer_digisig.value;
            clash.stage02_buyer = { guid: buyerGUID, handle: buyerHandle, legal_address: buyerLegalAddress, pubkeys: {pgp: buyerPGPPubkey, secp256k1_uncompressed: buyerECPubkey}};
            clash.signatures.buyer_sig = buyerDigiSig;
            $scope.buyercontract = clash;
            $scope.display2 = JSON.stringify(clash, null, 4);
        };
        $scope.stage02_verify = function () {
            $scope.stage02hash = sha256_digest($("#buyerhash").text());
            var stage02_publickey = $("#stage02_pubkey").text();
            var publickey2 = openpgp.key.readArmored(stage02_publickey).keys[0];
            console.log(publickey2);
            var stage02_signature = $("#stage02_buyersig").text();
            var signature2 = openpgp.cleartext.readArmored(stage02_signature);
            console.log(signature2);
            openpgp.verifyClearSignedMessage(publickey2, signature2).then(function(sigCheck) {
                $scope.check2 = sigCheck.signatures[0].valid;
            });
        };
        $scope.start3 = function () {
            var thunder = JSON.parse($scope.notarisecontract);
            console.log(thunder);
            var notaryGUID = notary_guid.value;
            var notaryHandle = notary_handle.value;
            var notaryLegalAddress = notary_legaladdress.value;
            var notaryPGPPubkey = notary_pgp_pubkey.value;
            var notaryECPubkey = notary_secp256k1_pubkey.value;
            var notaryDigiSig = notary_digisig.value;
            var multisigescrow = multisigaddr.value;
            var multisigredemption = multisigredeem.value;
            thunder.stage03_buyer = { guid: notaryGUID, handle: notaryHandle, legal_address: notaryLegalAddress, pubkeys: {pgp: notaryPGPPubkey, secp256k1_uncompressed: notaryECPubkey}, escrow: {multisig_address: multisigescrow, multisig_redemption_script: multisigredemption}};
            thunder.signatures.notary_sig = notaryDigiSig;
            $scope.notarycontract = thunder;
            $scope.display3 = JSON.stringify(thunder, null, 4);
        };
        $scope.stage03_verify = function () {
            $scope.stage03hash = sha256_digest($("#notaryhash").text());
            var stage03_publickey = $("#stage03_pubkey").text();
            var publickey3 = openpgp.key.readArmored(stage03_publickey).keys[0];
            console.log(publickey3);
            var stage03_signature = $("#stage03_notarysig").text();
            var signature3 = openpgp.cleartext.readArmored(stage03_signature);
            console.log(signature3);
            openpgp.verifyClearSignedMessage(publickey3, signature3).then(function(sigCheck) {
                $scope.check3 = sigCheck.signatures[0].valid;
            });
        };
    });