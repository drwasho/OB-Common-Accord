/**
 * Created by drwasho on 18/01/2015.
 */

var part1 = angular.module('part1', []);
part1.controller('Working',
    function ($scope) {
        $scope.peek = true;
        $scope.peek1 = false;
        $scope.peek2 = false;
        $scope.peek3 = false;
        $scope.peek4 = false;
        $scope.peek5 = false;
        $scope.peek6 = false;
        $scope.home = function () { // Takes you to a place where everybody knows your name
            $scope.peek = true;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
            $scope.peek5 = false;
            $scope.peek6 = false;
        };
        $scope.toggle1 = function () {
            $scope.peek = false;
            $scope.peek1 = true;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
            $scope.peek5 = false;
            $scope.peek6 = false;
        };
        $scope.toggle2 = function () {
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = true;
            $scope.peek3 = false;
            $scope.peek4 = false;
            $scope.peek5 = false;
            $scope.peek6 = false;
        };
        $scope.toggle3 = function () {
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = true;
            $scope.peek4 = false;
            $scope.peek5 = false;
            $scope.peek6 = false;
        };
        $scope.toggle4 = function () {
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = true;
            $scope.peek5 = false;
            $scope.peek6 = false;
        };
        $scope.toggle5 = function () {
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
            $scope.peek5 = true;
            $scope.peek6 = false;
        };
        $scope.toggle6 = function () {
            $scope.peek = false;
            $scope.peek1 = false;
            $scope.peek2 = false;
            $scope.peek3 = false;
            $scope.peek4 = false;
            $scope.peek5 = false;
            $scope.peek6 = true;
        };
        var nonce = Math.floor((Math.random() * 1000000000000000) + 1);
        $scope.start = function () {
            var itemTitle = item_title.value;
            var itemDescription = item_description.value;
            var itemPrice = item_price.value;
            var itemFiatPrice = item_fiat_price.value;
            var itemFiatXE = item_fiat_xe.value;
            var itemImage1 = item_image1.value;
            var itemImageHash1 = item_image_hash1.value;
            var itemImage2 = item_image2.value;
            var itemImageHash2 = item_image_hash2.value;
            var itemImage3 = item_image3.value;
            var itemImageHash3 = item_image_hash3.value;
            var itemImage4 = item_image4.value;
            var itemImageHash4 = item_image_hash4.value;
            var itemImage5 = item_image5.value;
            var itemImageHash5 = item_image_hash5.value;
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
            stage01 = { stage01_merchant: { genesis: {metadata: {obcv: "0.0.2", category: "Physical item", subcategory: "Fixed Price", nonce: nonce, expiration_date: metadataExpDate}, item_data: {title: itemTitle, description: itemDescription, price: {btc: itemPrice, fiat: {price: itemFiatPrice, currency: itemFiatXE}}, images: { image1: {image_link1: itemImage1, image_hash1: itemImageHash1}, image2: {image_link2: itemImage2, image_hash2: itemImageHash2}, image3: {image_link3: itemImage3, image_hash3: itemImageHash3}, image4: {image_link4: itemImage4, image_hash4: itemImageHash4}, image5: {image_link5: itemImage5, image_hash5: itemImageHash5}}, condition: itemCondition, quantity: itemQuantity, keywords: itemKeywords, region: itemRegion, estimated_delivery: itemEstDelivery}, merchant: {guid: merchantGUID, handle: merchantHandle, legal_address: merchantLegalAddress, pubkeys: {pgp: merchantPGPPubkey, bitcoin_pubkey: merchantECPubkey}}}, signatures: {pgp: merchantDigiSig}}};
            $scope.newcontract = stage01;
            $scope.display1 = JSON.stringify(stage01, null, 4);
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
            var stage02 = JSON.parse($scope.buycontract);
            console.log(stage02);
            var importconctractHash = sha256_digest(buycontract.value);
            var buyerGUID = buyer_guid.value;
            var buyerHandle = buyer_handle.value;
            var buyerLegalAddress = buyer_legaladdress.value;
            var buyerPGPPubkey = buyer_pgp_pubkey.value;
            var buyerECPubkey = buyer_secp256k1_pubkey.value;
            var buyerDigiSig = buyer_digisig.value;
            stage02.stage02_buyer = { buyer: { contract_to_buy: importconctractHash, guid: buyerGUID, handle: buyerHandle, legal_address: buyerLegalAddress, pubkeys: {pgp: buyerPGPPubkey, secp256k1_uncompressed: buyerECPubkey}}, signatures: {pgp: buyerDigiSig}};
            $scope.buyercontract = stage02;
            $scope.display2 = JSON.stringify(stage02, null, 4);
        };
        $scope.stage02_verify = function () {
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
            var stage03 = JSON.parse($scope.notarisecontract);
            console.log(stage03);
            var importconctractHashnotary = sha256_digest(notarisecontract.value);
            var notaryGUID = notary_guid.value;
            var notaryHandle = notary_handle.value;
            var notaryLegalAddress = notary_legaladdress.value;
            var notaryPGPPubkey = notary_pgp_pubkey.value;
            var notaryECPubkey = notary_secp256k1_pubkey.value;
            var notaryDigiSig = notary_digisig.value;
            var multisigescrow = multisigaddr.value;
            var multisigredemption = multisigredeem.value;
            stage03.stage03_notary = { notary: { contract_to_notarise: importconctractHashnotary, guid: notaryGUID, handle: notaryHandle, legal_address: notaryLegalAddress, pubkeys: {pgp: notaryPGPPubkey, secp256k1_uncompressed: notaryECPubkey}, escrow: {multisig_address: multisigescrow, multisig_redemption_script: multisigredemption}}, signatures: {pgp: notaryDigiSig}};
            $scope.notarycontract = stage03;
            $scope.display3 = JSON.stringify(stage03, null, 4);
        };
        $scope.stage03_verify = function () {
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
        $scope.start4 = function () {
            var stage04 = JSON.parse($scope.triplesignedcontract);
            console.log(stage04);
            var importconctractTriple = sha256_digest(triplesignedcontract.value);
            var txID = txid.value;
            var shiptoAddr = ship_to_address.value;
            var buyerDigitalSig = buyer_escrow_digisig.value;
            stage04.stage04_escrowfunding = { funding_evidence: {contract_to_fund_escrow: importconctractTriple, transaction_id: txID, ship_to_this_address: shiptoAddr}, signatures: {pgp: buyerDigitalSig}};
            $scope.escrowfund = stage04;
            $scope.display4 = JSON.stringify(stage04, null, 4);
        };
        $scope.stage04_verify = function () {
            var stage04_publickey = $("#stage04_pubkey").text();
            var publickey4 = openpgp.key.readArmored(stage04_publickey).keys[0];
            console.log(publickey4);
            var stage04_signature = $("#stage04_buyersig").text();
            var signature4 = openpgp.cleartext.readArmored(stage04_signature);
            console.log(signature4);
            openpgp.verifyClearSignedMessage(publickey4, signature4).then(function(sigCheck) {
                $scope.check4 = sigCheck.signatures[0].valid;
            });
        };
        $scope.start5 = function () {
            var stage05 = JSON.parse($scope.stage04contract);
            console.log(stage05);
            var importconctractShip = sha256_digest(stage04contract.value);
            var shipperID = shipper_id.value;
            var shipperAddr = shipper_addr.value;
            var shipperTracker = shipper_tracker.value;
            var merchantSignedTx = merchant_signed_tx.value;
            var stage05_merchantDigitalSig = merchant_shipping_digisig.value;
            stage05.stage05_shipment = { shipment: { contract_for_shipping: importconctractShip, shipping_info: {shipper_ID: shipperID, shipper_address: shipperAddr, shipping_tracking_number: shipperTracker}, releasefunds: {signed_tx: merchantSignedTx}}, signatures: {pgp: stage05_merchantDigitalSig}};
            $scope.shipping = stage05;
            $scope.display5 = JSON.stringify(stage05, null, 4);
        };
        $scope.stage05_verify = function () {
            var stage05_publickey = $("#stage05_pubkey").text();
            var publickey5 = openpgp.key.readArmored(stage05_publickey).keys[0];
            console.log(publickey5);
            var stage05_signature = $("#stage05_buyersig").text();
            var signature5 = openpgp.cleartext.readArmored(stage05_signature);
            console.log(signature5);
            openpgp.verifyClearSignedMessage(publickey5, signature5).then(function (sigCheck) {
                $scope.check5 = sigCheck.signatures[0].valid;
            });
        };
        $scope.start6 = function () {
            var stage06 = JSON.parse($scope.stage05contract);
            console.log(stage06);
            var stage05contractHash = sha256_digest(stage05contract.value);
            var contractStatus = contractstatus.value;
            var message2 = message.value;
            var buyerSignedTx = buyer_signed_tx.value;
            var releaseTXID = release_txid.value;
            var stage06_buyerDigitalSig = buyer_release_digisig.value;
            stage06.stage06_release = { release_funds: { contract_to_release_funds: stage05contractHash, contract_status: contractStatus, message: message2, signed_tx: buyerSignedTx, transaction_id: releaseTXID}, signatures: {pgp: stage06_buyerDigitalSig}};
            $scope.release = stage06;
            $scope.display6 = JSON.stringify(stage06, null, 4);
        };
        $scope.stage06_verify = function () {
            var stage06_publickey = $("#stage06_pubkey").text();
            var publickey6 = openpgp.key.readArmored(stage06_publickey).keys[0];
            console.log(publickey6);
            var stage06_signature = $("#stage06_buyersig").text();
            var signature6 = openpgp.cleartext.readArmored(stage06_signature);
            console.log(signature6);
            openpgp.verifyClearSignedMessage(publickey6, signature6).then(function(sigCheck) {
                $scope.check6 = sigCheck.signatures[0].valid;
            });
        };
    });