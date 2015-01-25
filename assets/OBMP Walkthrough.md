# OpenBazaar Market Protocol Walkthrough

## Dependencies

PGP Public Key **example**:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2.0.22 (MingW32)

mQINBFMZcEIBEADJlq0oVgLfFDdW9WOBguskPdSSeAfHe4s9w8QlmRuO/Zj548gK
fofbM84rtP3rHSOSkeOTsu5GwDt48V/md6gyJ69BTZJkJ6qmxFtGaWVRLP/UD4ma
vW4EAn3PvWY6X7Z8x36U3j2I6vknH1Ufu5Dh5qvQC3WsMliul9ZxlJQZ1/TkQE+q
I/gBPRmsMFZ/xV2VOEjMtM3qOPoemhYFzU39/ra0isk81sXrotySkvWw6zsrx8Nr
kBaw9mxhs0kumF06AfKSrBjyt/FIdbJaWtNrCdxJ+NMfzQUHmq9bzpBI2VpNJzFQ
I4WlO8eRYDS1Z88VxXOjMZchd70JfNNWcXwCUeOA/HUgHO4tWczvb/5/C5pfZRKu
DqfOLntcMEzpPxbhAbXvU+K5TK394SGgu9ioXl3rdrFj1B1EBPH2BfnOdwCiOOr5
ccWVPUHdG34i4D98ARgeqEDxq9/WZwq8FG9rgSszqkmnGQtSZxz8aoW1kU1h1SQu
mqs2ZUrEoLGACkNg16kRq2z7RBLc4MAm3/GW3ygeEFQxK0PMief0X2+l0oVo7a0A
RMLLLx4ckuoX3DIJvBegFPvlp0rO3JihdzNmCqIBTDok7D0k2NiQsm3WDJHAYB+8
G4ruHVPAOzPNxz5krF+u71jcWmZKO4FRAcXCrWTQCku7wLyzOF80sVEDlwARAQAB
tGNEciBXYXNoaW5ndG9uIFlhbWFuZHUgU2FuY2hleiAoMjAxNCBLZXlwYWlyIGZv
ciBuZXcgZW1haWwgYWRkcmVzcykgPHdhc2hpbmd0b24uc2FuY2hlekBvdXRsb29r
LmNvbT6JAjkEEwECACMFAlMZcEICGw8HCwkIBwMCAQYVCAIJCgsEFgIDAQIeAQIX
gAAKCRDgeMiuv/IyzzaGEACiYWINH5utgquhNPIGl8oPXQwi3cdHbLROXk9s8K5j
umxO3qyzrZuag+M39eKrDOgMTteLcCuJV+9sgdmSJHsLuH9o9/PPwaKHsY995C0Y
5ZRsvABRQbHoOJPsdq136gH2Z0kW/RJ2fqQfNrDiqyPJpWTkrnnRZF2XU8OlIAq+
BsyeVqxOiht1vMIz2TX/LanbP6leas7Wah1GRuzhd68+NCyCUQJ4bnBDv6cbGwXR
Vi7kOOvXYoTilCENdbSuYfGWrq7z54DrefjTP3+0Y/YTWwUQr/yvXi915UCDVU+T
6jaqCwtqmezr1VjkMrFQOOrOY7jWmYo4AwQfr4hW9iLdiggr6bPmz0YRfT83a9r9
Z+SmU4zuLWmmJXARiUGBwhXUmyqFQa1yjCVI+50uW8Wx3iDot9qiO7gSB878Zq1s
Ktt3EXolTDGgpVIxZ78do42X02wD8gwGGOdDU3Dzywjy3qcIbVWreuT8tEvCU+Wx
w0TGzeoBLcHezhLEbaAOmE5jAmKPL9EbRQBGS1nV3uwzW24vu9ftNqmseYXC2afW
DCulmUHHAQEfleJA/mKii2mYV7Yxclib81+EzkzJBPijgUJBN9A1PxqliF8ZDXF/
h/jQomASoDBAL8VWo7qwTQlc5CZKZ6xnUZGdUU9lFBmnclw0A6PrMBaZjm1zeKJr
1Q==
=7M1T
-----END PGP PUBLIC KEY BLOCK-----
```

A signed message **example**:

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Hello
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2.0.22 (MingW32)

iQIcBAEBAgAGBQJUvRKUAAoJEOB4yK6/8jLP+scP/RqnlEKQfTooVm8to7NsPS+m
go9QbNPTi+i4bYum1O1xOic55LR4/JLO8nZqFxxd/6dKYU7bWk1hrRAV/ALv6acU
hXwxgSE2/WHOvlidoxGdfbF65kv9CsYPKpV4iU7EWtN9uiWgk2gGk6heaJS0Alo6
ip71eH24dTxClkraiPMhSi+Dwmr03tnzZ+Ioo/vDcS/DFov21oGnFTwa8S/H4yH4
P66e+iAcRr4HrjcjajywlH0an+Q1+AWWtHxwUVu4FO5iFhXYRkChsgmaSJltPht1
qdn11k8yNJhC3MqKUjcBfPHRGtIcWJDXOrPTTnudJE4zjQ0/0L0Od+o4Q96B3XNW
MU6uPHMdMXm2GfXSs7DxzhwFB2TJc5jQy9DM9qURDeWaT5tulzqIwTOv9gngjvNf
16LatC8CsqVhE5uRjd+oQKaXwwaGXLBJL9YZTTS2qgaUGA7esiQNfkHwE3nBra/D
jlgfMqxNuCyBRg1yS3Hqe/LmDNJodKZOb0HoJnnKEq//BWXDsYPFn8h8YKCW3nfc
3LSjRj4MQzGEiauK1MJLZrQuLmSTJsZjloJxi+gklqr3cy/KPCsksPupXSXf8xYE
BQ+oamxGkyKqONX9+DLaxyHrt1YMWh4vbnt+ODYGbw2jCoRXPk5/d9ZxIzoj0xbG
KgCcg7XhDm7rxPwfkljq
=d2aO
-----END PGP SIGNATURE-----
```

## OB Ricardian Contracts

### Stage 01: The Merchant

The merchant creates a contract, which will look something like this:

```JSON
{
    "stage01_merchant": {
        "metadata": {
            "obcv": "0.0.2",
            "category": "Physical item",
            "subcategory": "Fixed Price",
            "nonce": 937144134193659,
            "expiration_date": "Never"
        },
        "item_data": {
            "title": "Self Respect",
            "description": "It makes you feel good about yourself.",
            "price": {
                "btc": "0.1",
                "fiat": {
                    "price": "$10",
                    "currency": "USD"
                }
            },
            "image_link": "http://i.imgur.com/t26Wb2a.jpg",
            "image_hash": "44a8dc6118e37e2d0b2e86bbbefd098a18294b7352ffdb05ec35839be928aaf6",
            "condition": "Good condition",
            "quantity": "1",
            "keywords": "aretha, franklin",
            "region": "International",
            "estimated_delivery": "1 day"
        },
        "merchant": {
            "guid": "b5016e193656d33693a38bc2dbea7c80440c09ee",
            "handle": "drwasho",
            "legal_address": "My address",
            "pubkeys": {
                "pgp": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (MingW32)\n\nmQINBFMZcEIBEADJlq0oVgLfFDdW9WOBguskPdSSeAfHe4s9w8QlmRuO/Zj548gK\nfofbM84rtP3rHSOSkeOTsu5GwDt48V/md6gyJ69BTZJkJ6qmxFtGaWVRLP/UD4ma\nvW4EAn3PvWY6X7Z8x36U3j2I6vknH1Ufu5Dh5qvQC3WsMliul9ZxlJQZ1/TkQE+q\nI/gBPRmsMFZ/xV2VOEjMtM3qOPoemhYFzU39/ra0isk81sXrotySkvWw6zsrx8Nr\nkBaw9mxhs0kumF06AfKSrBjyt/FIdbJaWtNrCdxJ+NMfzQUHmq9bzpBI2VpNJzFQ\nI4WlO8eRYDS1Z88VxXOjMZchd70JfNNWcXwCUeOA/HUgHO4tWczvb/5/C5pfZRKu\nDqfOLntcMEzpPxbhAbXvU+K5TK394SGgu9ioXl3rdrFj1B1EBPH2BfnOdwCiOOr5\nccWVPUHdG34i4D98ARgeqEDxq9/WZwq8FG9rgSszqkmnGQtSZxz8aoW1kU1h1SQu\nmqs2ZUrEoLGACkNg16kRq2z7RBLc4MAm3/GW3ygeEFQxK0PMief0X2+l0oVo7a0A\nRMLLLx4ckuoX3DIJvBegFPvlp0rO3JihdzNmCqIBTDok7D0k2NiQsm3WDJHAYB+8\nG4ruHVPAOzPNxz5krF+u71jcWmZKO4FRAcXCrWTQCku7wLyzOF80sVEDlwARAQAB\ntGNEciBXYXNoaW5ndG9uIFlhbWFuZHUgU2FuY2hleiAoMjAxNCBLZXlwYWlyIGZv\nciBuZXcgZW1haWwgYWRkcmVzcykgPHdhc2hpbmd0b24uc2FuY2hlekBvdXRsb29r\nLmNvbT6JAjkEEwECACMFAlMZcEICGw8HCwkIBwMCAQYVCAIJCgsEFgIDAQIeAQIX\ngAAKCRDgeMiuv/IyzzaGEACiYWINH5utgquhNPIGl8oPXQwi3cdHbLROXk9s8K5j\numxO3qyzrZuag+M39eKrDOgMTteLcCuJV+9sgdmSJHsLuH9o9/PPwaKHsY995C0Y\n5ZRsvABRQbHoOJPsdq136gH2Z0kW/RJ2fqQfNrDiqyPJpWTkrnnRZF2XU8OlIAq+\nBsyeVqxOiht1vMIz2TX/LanbP6leas7Wah1GRuzhd68+NCyCUQJ4bnBDv6cbGwXR\nVi7kOOvXYoTilCENdbSuYfGWrq7z54DrefjTP3+0Y/YTWwUQr/yvXi915UCDVU+T\n6jaqCwtqmezr1VjkMrFQOOrOY7jWmYo4AwQfr4hW9iLdiggr6bPmz0YRfT83a9r9\nZ+SmU4zuLWmmJXARiUGBwhXUmyqFQa1yjCVI+50uW8Wx3iDot9qiO7gSB878Zq1s\nKtt3EXolTDGgpVIxZ78do42X02wD8gwGGOdDU3Dzywjy3qcIbVWreuT8tEvCU+Wx\nw0TGzeoBLcHezhLEbaAOmE5jAmKPL9EbRQBGS1nV3uwzW24vu9ftNqmseYXC2afW\nDCulmUHHAQEfleJA/mKii2mYV7Yxclib81+EzkzJBPijgUJBN9A1PxqliF8ZDXF/\nh/jQomASoDBAL8VWo7qwTQlc5CZKZ6xnUZGdUU9lFBmnclw0A6PrMBaZjm1zeKJr\n1Q==\n=7M1T\n-----END PGP PUBLIC KEY BLOCK-----",
                "bitcoin_pubkey": "04a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd5b8dec5235a0fa8722476c7709c02559e3aa73aa03918ba2d492eea75abea235"
            }
        }
    },
    "signatures": {
        "merchant_sig": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nHello\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v2.0.22 (MingW32)\n\niQIcBAEBAgAGBQJUvRKUAAoJEOB4yK6/8jLP+scP/RqnlEKQfTooVm8to7NsPS+m\ngo9QbNPTi+i4bYum1O1xOic55LR4/JLO8nZqFxxd/6dKYU7bWk1hrRAV/ALv6acU\nhXwxgSE2/WHOvlidoxGdfbF65kv9CsYPKpV4iU7EWtN9uiWgk2gGk6heaJS0Alo6\nip71eH24dTxClkraiPMhSi+Dwmr03tnzZ+Ioo/vDcS/DFov21oGnFTwa8S/H4yH4\nP66e+iAcRr4HrjcjajywlH0an+Q1+AWWtHxwUVu4FO5iFhXYRkChsgmaSJltPht1\nqdn11k8yNJhC3MqKUjcBfPHRGtIcWJDXOrPTTnudJE4zjQ0/0L0Od+o4Q96B3XNW\nMU6uPHMdMXm2GfXSs7DxzhwFB2TJc5jQy9DM9qURDeWaT5tulzqIwTOv9gngjvNf\n16LatC8CsqVhE5uRjd+oQKaXwwaGXLBJL9YZTTS2qgaUGA7esiQNfkHwE3nBra/D\njlgfMqxNuCyBRg1yS3Hqe/LmDNJodKZOb0HoJnnKEq//BWXDsYPFn8h8YKCW3nfc\n3LSjRj4MQzGEiauK1MJLZrQuLmSTJsZjloJxi+gklqr3cy/KPCsksPupXSXf8xYE\nBQ+oamxGkyKqONX9+DLaxyHrt1YMWh4vbnt+ODYGbw2jCoRXPk5/d9ZxIzoj0xbG\nKgCcg7XhDm7rxPwfkljq\n=d2aO\n-----END PGP SIGNATURE-----",
        "buyer_sig": ""
    }
}
```

### Stage 02: The Buyer

The buyer purchases a contract by appending his details to the contract, which will look something like this:

```JSON
{
    "stage01_merchant": {
        "metadata": {
            "obcv": "0.0.2",
            "category": "Physical item",
            "subcategory": "Fixed Price",
            "nonce": 937144134193659,
            "expiration_date": "Never"
        },
        "item_data": {
            "title": "Self Respect",
            "description": "It makes you feel good about yourself.",
            "price": {
                "btc": "0.1",
                "fiat": {
                    "price": "$10",
                    "currency": "USD"
                }
            },
            "image_link": "http://i.imgur.com/t26Wb2a.jpg",
            "image_hash": "44a8dc6118e37e2d0b2e86bbbefd098a18294b7352ffdb05ec35839be928aaf6",
            "condition": "Good condition",
            "quantity": "1",
            "keywords": "aretha, franklin",
            "region": "International",
            "estimated_delivery": "1 day"
        },
        "merchant": {
            "guid": "b5016e193656d33693a38bc2dbea7c80440c09ee",
            "handle": "drwasho",
            "legal_address": "My address",
            "pubkeys": {
                "pgp": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (MingW32)\n\nmQINBFMZcEIBEADJlq0oVgLfFDdW9WOBguskPdSSeAfHe4s9w8QlmRuO/Zj548gK\nfofbM84rtP3rHSOSkeOTsu5GwDt48V/md6gyJ69BTZJkJ6qmxFtGaWVRLP/UD4ma\nvW4EAn3PvWY6X7Z8x36U3j2I6vknH1Ufu5Dh5qvQC3WsMliul9ZxlJQZ1/TkQE+q\nI/gBPRmsMFZ/xV2VOEjMtM3qOPoemhYFzU39/ra0isk81sXrotySkvWw6zsrx8Nr\nkBaw9mxhs0kumF06AfKSrBjyt/FIdbJaWtNrCdxJ+NMfzQUHmq9bzpBI2VpNJzFQ\nI4WlO8eRYDS1Z88VxXOjMZchd70JfNNWcXwCUeOA/HUgHO4tWczvb/5/C5pfZRKu\nDqfOLntcMEzpPxbhAbXvU+K5TK394SGgu9ioXl3rdrFj1B1EBPH2BfnOdwCiOOr5\nccWVPUHdG34i4D98ARgeqEDxq9/WZwq8FG9rgSszqkmnGQtSZxz8aoW1kU1h1SQu\nmqs2ZUrEoLGACkNg16kRq2z7RBLc4MAm3/GW3ygeEFQxK0PMief0X2+l0oVo7a0A\nRMLLLx4ckuoX3DIJvBegFPvlp0rO3JihdzNmCqIBTDok7D0k2NiQsm3WDJHAYB+8\nG4ruHVPAOzPNxz5krF+u71jcWmZKO4FRAcXCrWTQCku7wLyzOF80sVEDlwARAQAB\ntGNEciBXYXNoaW5ndG9uIFlhbWFuZHUgU2FuY2hleiAoMjAxNCBLZXlwYWlyIGZv\nciBuZXcgZW1haWwgYWRkcmVzcykgPHdhc2hpbmd0b24uc2FuY2hlekBvdXRsb29r\nLmNvbT6JAjkEEwECACMFAlMZcEICGw8HCwkIBwMCAQYVCAIJCgsEFgIDAQIeAQIX\ngAAKCRDgeMiuv/IyzzaGEACiYWINH5utgquhNPIGl8oPXQwi3cdHbLROXk9s8K5j\numxO3qyzrZuag+M39eKrDOgMTteLcCuJV+9sgdmSJHsLuH9o9/PPwaKHsY995C0Y\n5ZRsvABRQbHoOJPsdq136gH2Z0kW/RJ2fqQfNrDiqyPJpWTkrnnRZF2XU8OlIAq+\nBsyeVqxOiht1vMIz2TX/LanbP6leas7Wah1GRuzhd68+NCyCUQJ4bnBDv6cbGwXR\nVi7kOOvXYoTilCENdbSuYfGWrq7z54DrefjTP3+0Y/YTWwUQr/yvXi915UCDVU+T\n6jaqCwtqmezr1VjkMrFQOOrOY7jWmYo4AwQfr4hW9iLdiggr6bPmz0YRfT83a9r9\nZ+SmU4zuLWmmJXARiUGBwhXUmyqFQa1yjCVI+50uW8Wx3iDot9qiO7gSB878Zq1s\nKtt3EXolTDGgpVIxZ78do42X02wD8gwGGOdDU3Dzywjy3qcIbVWreuT8tEvCU+Wx\nw0TGzeoBLcHezhLEbaAOmE5jAmKPL9EbRQBGS1nV3uwzW24vu9ftNqmseYXC2afW\nDCulmUHHAQEfleJA/mKii2mYV7Yxclib81+EzkzJBPijgUJBN9A1PxqliF8ZDXF/\nh/jQomASoDBAL8VWo7qwTQlc5CZKZ6xnUZGdUU9lFBmnclw0A6PrMBaZjm1zeKJr\n1Q==\n=7M1T\n-----END PGP PUBLIC KEY BLOCK-----",
                "bitcoin_pubkey": "04a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd5b8dec5235a0fa8722476c7709c02559e3aa73aa03918ba2d492eea75abea235"
            }
        }
    },
    "signatures": {
        "merchant_sig": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nHello\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v2.0.22 (MingW32)\n\niQIcBAEBAgAGBQJUvRKUAAoJEOB4yK6/8jLP+scP/RqnlEKQfTooVm8to7NsPS+m\ngo9QbNPTi+i4bYum1O1xOic55LR4/JLO8nZqFxxd/6dKYU7bWk1hrRAV/ALv6acU\nhXwxgSE2/WHOvlidoxGdfbF65kv9CsYPKpV4iU7EWtN9uiWgk2gGk6heaJS0Alo6\nip71eH24dTxClkraiPMhSi+Dwmr03tnzZ+Ioo/vDcS/DFov21oGnFTwa8S/H4yH4\nP66e+iAcRr4HrjcjajywlH0an+Q1+AWWtHxwUVu4FO5iFhXYRkChsgmaSJltPht1\nqdn11k8yNJhC3MqKUjcBfPHRGtIcWJDXOrPTTnudJE4zjQ0/0L0Od+o4Q96B3XNW\nMU6uPHMdMXm2GfXSs7DxzhwFB2TJc5jQy9DM9qURDeWaT5tulzqIwTOv9gngjvNf\n16LatC8CsqVhE5uRjd+oQKaXwwaGXLBJL9YZTTS2qgaUGA7esiQNfkHwE3nBra/D\njlgfMqxNuCyBRg1yS3Hqe/LmDNJodKZOb0HoJnnKEq//BWXDsYPFn8h8YKCW3nfc\n3LSjRj4MQzGEiauK1MJLZrQuLmSTJsZjloJxi+gklqr3cy/KPCsksPupXSXf8xYE\nBQ+oamxGkyKqONX9+DLaxyHrt1YMWh4vbnt+ODYGbw2jCoRXPk5/d9ZxIzoj0xbG\nKgCcg7XhDm7rxPwfkljq\n=d2aO\n-----END PGP SIGNATURE-----",
        "buyer_sig": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nHello\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v2.0.22 (MingW32)\n\niQIcBAEBAgAGBQJUvRKUAAoJEOB4yK6/8jLP+scP/RqnlEKQfTooVm8to7NsPS+m\ngo9QbNPTi+i4bYum1O1xOic55LR4/JLO8nZqFxxd/6dKYU7bWk1hrRAV/ALv6acU\nhXwxgSE2/WHOvlidoxGdfbF65kv9CsYPKpV4iU7EWtN9uiWgk2gGk6heaJS0Alo6\nip71eH24dTxClkraiPMhSi+Dwmr03tnzZ+Ioo/vDcS/DFov21oGnFTwa8S/H4yH4\nP66e+iAcRr4HrjcjajywlH0an+Q1+AWWtHxwUVu4FO5iFhXYRkChsgmaSJltPht1\nqdn11k8yNJhC3MqKUjcBfPHRGtIcWJDXOrPTTnudJE4zjQ0/0L0Od+o4Q96B3XNW\nMU6uPHMdMXm2GfXSs7DxzhwFB2TJc5jQy9DM9qURDeWaT5tulzqIwTOv9gngjvNf\n16LatC8CsqVhE5uRjd+oQKaXwwaGXLBJL9YZTTS2qgaUGA7esiQNfkHwE3nBra/D\njlgfMqxNuCyBRg1yS3Hqe/LmDNJodKZOb0HoJnnKEq//BWXDsYPFn8h8YKCW3nfc\n3LSjRj4MQzGEiauK1MJLZrQuLmSTJsZjloJxi+gklqr3cy/KPCsksPupXSXf8xYE\nBQ+oamxGkyKqONX9+DLaxyHrt1YMWh4vbnt+ODYGbw2jCoRXPk5/d9ZxIzoj0xbG\nKgCcg7XhDm7rxPwfkljq\n=d2aO\n-----END PGP SIGNATURE-----"
    },
    "stage02_buyer": {
        "guid": "15b3830853a935122da418c36751b30107537c53",
        "handle": "The Dude",
        "legal_address": "Dudeville",
        "pubkeys": {
            "pgp": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (MingW32)\n\nmQINBFMZcEIBEADJlq0oVgLfFDdW9WOBguskPdSSeAfHe4s9w8QlmRuO/Zj548gK\nfofbM84rtP3rHSOSkeOTsu5GwDt48V/md6gyJ69BTZJkJ6qmxFtGaWVRLP/UD4ma\nvW4EAn3PvWY6X7Z8x36U3j2I6vknH1Ufu5Dh5qvQC3WsMliul9ZxlJQZ1/TkQE+q\nI/gBPRmsMFZ/xV2VOEjMtM3qOPoemhYFzU39/ra0isk81sXrotySkvWw6zsrx8Nr\nkBaw9mxhs0kumF06AfKSrBjyt/FIdbJaWtNrCdxJ+NMfzQUHmq9bzpBI2VpNJzFQ\nI4WlO8eRYDS1Z88VxXOjMZchd70JfNNWcXwCUeOA/HUgHO4tWczvb/5/C5pfZRKu\nDqfOLntcMEzpPxbhAbXvU+K5TK394SGgu9ioXl3rdrFj1B1EBPH2BfnOdwCiOOr5\nccWVPUHdG34i4D98ARgeqEDxq9/WZwq8FG9rgSszqkmnGQtSZxz8aoW1kU1h1SQu\nmqs2ZUrEoLGACkNg16kRq2z7RBLc4MAm3/GW3ygeEFQxK0PMief0X2+l0oVo7a0A\nRMLLLx4ckuoX3DIJvBegFPvlp0rO3JihdzNmCqIBTDok7D0k2NiQsm3WDJHAYB+8\nG4ruHVPAOzPNxz5krF+u71jcWmZKO4FRAcXCrWTQCku7wLyzOF80sVEDlwARAQAB\ntGNEciBXYXNoaW5ndG9uIFlhbWFuZHUgU2FuY2hleiAoMjAxNCBLZXlwYWlyIGZv\nciBuZXcgZW1haWwgYWRkcmVzcykgPHdhc2hpbmd0b24uc2FuY2hlekBvdXRsb29r\nLmNvbT6JAjkEEwECACMFAlMZcEICGw8HCwkIBwMCAQYVCAIJCgsEFgIDAQIeAQIX\ngAAKCRDgeMiuv/IyzzaGEACiYWINH5utgquhNPIGl8oPXQwi3cdHbLROXk9s8K5j\numxO3qyzrZuag+M39eKrDOgMTteLcCuJV+9sgdmSJHsLuH9o9/PPwaKHsY995C0Y\n5ZRsvABRQbHoOJPsdq136gH2Z0kW/RJ2fqQfNrDiqyPJpWTkrnnRZF2XU8OlIAq+\nBsyeVqxOiht1vMIz2TX/LanbP6leas7Wah1GRuzhd68+NCyCUQJ4bnBDv6cbGwXR\nVi7kOOvXYoTilCENdbSuYfGWrq7z54DrefjTP3+0Y/YTWwUQr/yvXi915UCDVU+T\n6jaqCwtqmezr1VjkMrFQOOrOY7jWmYo4AwQfr4hW9iLdiggr6bPmz0YRfT83a9r9\nZ+SmU4zuLWmmJXARiUGBwhXUmyqFQa1yjCVI+50uW8Wx3iDot9qiO7gSB878Zq1s\nKtt3EXolTDGgpVIxZ78do42X02wD8gwGGOdDU3Dzywjy3qcIbVWreuT8tEvCU+Wx\nw0TGzeoBLcHezhLEbaAOmE5jAmKPL9EbRQBGS1nV3uwzW24vu9ftNqmseYXC2afW\nDCulmUHHAQEfleJA/mKii2mYV7Yxclib81+EzkzJBPijgUJBN9A1PxqliF8ZDXF/\nh/jQomASoDBAL8VWo7qwTQlc5CZKZ6xnUZGdUU9lFBmnclw0A6PrMBaZjm1zeKJr\n1Q==\n=7M1T\n-----END PGP PUBLIC KEY BLOCK-----",
            "secp256k1_uncompressed": "04f4885bb285b0caef6f9e0ae62907648f1aeb5000e3755e62efd9018d342e6fc737396ae28a2ee117e2982c55a6c8330151575d6800b4725a42da9c0d0b524e8e"
        }
    }
}
```

### Stage 03: The Notary

The notary appends their information and multisignature escrow details to the contract, like so:

```JSON

```



