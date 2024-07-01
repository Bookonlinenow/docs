# Property Information

Endpoint
All the call must be made to the the following end point using https procotol.

### Get property information

Retuns the information of a property

```
Authorization: Basic Zm9vOmJhcg==
```

Response Formats json/xml
Response format is defined by the request Accept header

### Header

```
Content-Type: application/x-www-form-urlencoded
```

### GET

```
/Property/:id
```

### Parameter

| Field |  Type  |                                     Description                                     | Description                                                                         |     |
| :---: | :----: | :---------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------- | --- |
|  id   | String | The Property-ID. (NOTE: CALL /property WITHOUT ANY PARAMETER TO GET ALL PROPERTIES) | The Property-ID. (NOTE: CALL /property WITHOUT ANY PARAMETER TO GET ALL PROPERTIES) |

Get property information

Retuns the information of a property

# Success Response (200)

|  **Field**  |  **Type**   |             **Description**             |
| :---------: | :---------: | :-------------------------------------: |
|  hotel_id   |   Number    |         unique hotel identifier         |
|    name     |   string    |          The name of the hotel          |
|   street    |   string    |        The address of the hotel.        |
|    city     |   string    |           City of the hotel.            |
|   country   |   string    |          Country of the hotel           |
|  latitude   |   Number    |          Latitude of the hotel          |
|  longitude  |   Number    |         Longitude of the hotel          |
|     url     |   string    |   The bookonline now URL of the hotel   |
|    phone    |   String    |       Phone number of the hotel.        |
|    email    |   String    |       email address of the hotel.       |
|     fax     |   String    |         Fax number of the hotel         |
|  postcode   |   String    |      Postcode number of the hotel       |
|   photos    | Photo array | An array of photo objects for the hotel |
| description |   string    |          Description of Hotel.          |
|  amenities  |   string    |           Amenities of Hotel.           |

### Response

```
{
    "hotel_id": "899",
    "name": "City Luxury Grand Hotel",
    "street": "Akti Miaouli 3",
    "city": "Athens",
    "state": "Greece",
    "country": "Greece",
    "latitude": 22.795053,
    "longitude": 37.566628,
    "url": "https://demov3.book-onlinenow.net",
    "email": "skalog@bookonlinenow.net",
    "phone": "+2109920411",
    "fax": "no information",
    "postcode": "21100",
    "description": "The<b> Luxury V Hotel</b> is located in a beautiful dream beach of Greece in a magical site with magnificent views of the \"Bride of Thermaikos\" in the area of 15 acres just 5 minutes from the International Airport \"Macedonia\" and 15 minutes from downtown. \n<br>Luxury V Hotel is an ideal place for those who want to combine their vocation with entertainment and shopping.The famous beaches of Sithonias,Kassandreias and Peninsula of Athos, are situated not far from the hotel, and within 5 minutes there is one of the best and most modern commercial centres in Europe "COSMOS `` and a well-known recreational park "Water land”, which is visited by thousands of people from all over the world. \n<br>The Luxury V Hotel is open all the year round and offers an ideal opportunity for those who wish to pass unforgettable and unique moments during their classical, alternative, religious etc. holydays. \nThe hotel also has rooms for professional events such as seminars, conferences, meetings etc, and social events such as marriages, christening, cutting of pie etc.\n<br>The very friendly personnel will welcome you in the entrance of the hotel and will make your stay in the hotel an unforgettable experience.",
    "photos": [
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/Aleenta+Pool.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1148757_11_z.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1148757_20_z.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/4454220.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337416.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337461.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337480.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/18034199.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/18034280.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/4+(1).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/img_backtrans10.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/6+(1).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/11_501_Lobby_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/13_108_Deluxe_Guestroom_Wenge_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/17_107_Elite_Superior_Guestroom_Sea_View_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    }
    ]
    }
```

# Property

### Search Properties

Retuns a list of properties that match the search criteria

### Header
```
Content-Type: application/x-www-form-urlencoded
```

### GET
```
/Property/:id
```

### Parameter

|  Field  |  Type  |                                        Description                                       |
|:-------:|:------:|:----------------------------------------------------------------------------------------:|
|   area  | String |                             the search area e.g. &amp;attiki                             |
|   city  | String |                             the search city e.g. &amp;athens                             |
|   name  | String | The hotel name. all hotels that contain that name will be in the list e.g. &amp;name=kea |
| country | String |                   ISO 3166-1-alpha-2 country code e.g. &amp;country=GR                   |


### Success Response (200)

|  Field |           Type           |   Description   |
|:------:|:------------------------:|:---------------:|
| hotels |  array of hotel objects  | the hotel list  |


```
    {
    "hotels": [
    {
    "hotel_id": "899",
    "name": "City Luxury Grand Hotel",
    "street": "Akti Miaouli 3",
    "city": "Athens",
    "state": "Greece",
    "country": "Greece",
    "latitude": 22.795053,
    "longitude": 37.566628,
    "url": "https://demov3.book-onlinenow.net",
    "email": "skalog@bookonlinenow.net",
    "phone": "+2109920411",
    "fax": "no information",
    "postcode": "21100",
    "description": "The Luxury V Hotel is located in a beautiful dream beach of Greece in a magical site with magnificent views of the \"Bride of Thermaikos\" in the area of 15 acres just 5 minutes from the International Airport \"Macedonia\" and 15 minutes from downtown. \n
Luxury V Hotel is an ideal place for those who want to combine their vocation with entertainment and shopping.The famous beaches of Sithonias,Kassandreias and Peninsula of Athos, are situated not far from the hotel, and within 5 minutes there is one of the best and most modern commercial centres in Europe "COSMOS `` and a well-known recreational park "Water land”, which is visited by thousands of people from all over the world. \n
The Luxury V Hotel is open all the year round and offers an ideal opportunity for those who wish to pass unforgettable and unique moments during their classical, alternative, religious etc. holydays. \nThe hotel also has rooms for professional events such as seminars, conferences, meetings etc, and social events such as marriages, christening, cutting of pie etc.\n
The very friendly personnel will welcome you in the entrance of the hotel and will make your stay in the hotel an unforgettable experience.",
    "photos": [
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/Aleenta+Pool.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1148757_11_z.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1148757_20_z.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/4454220.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337416.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337461.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/9337480.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/18034199.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/18034280.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/1.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/4+(1).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/img_backtrans10.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/6+(1).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/11_501_Lobby_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/13_108_Deluxe_Guestroom_Wenge_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov3.book-onlinenow.net/Webpages/899/17_107_Elite_Superior_Guestroom_Sea_View_ELYSIUM.jpg",
    "width": 500,
    "height": 300
    }
    ]
    },
    {
    "hotel_id": "1932",
    "name": "Hotel Athena",
    "street": "124 Ionias ave, Alimos, 17456 Athens,Greece ",
    "city": "Alimos",
    "state": "Alimos, Athens",
    "country": "Greece",
    "latitude": 23.737411920776367,
    "longitude": 37.920899687782708,
    "url": "https://demov5.book-onlinenow.net",
    "email": "support@bookonlinenow.net",
    "phone": "+30 210.992.04.11",
    "fax": "no information",
    "postcode": "17456",
    "description": "The Luxury V Hotel is located in a beautiful dream beach of Greece in a magical site with magnificent views of the \"Bride of Thermaikos\" in the area of 15 acres just 5 minutes from the International Airport \"Macedonia\" and 15 minutes from downtown. \n
Luxury V Hotel is an ideal place for those who want to combine their vocation with entertainment and shopping.The famous beaches of Sithonias,Kassandreias and Peninsula of Athos, are situated not far from the hotel, and within 5 minutes there is one of the best and most modern commercial centres in Europe "COSMOS `` and a well-known recreational park "Water land”, which is visited by thousands of people from all over the world. \n
The Luxury V Hotel is open all the year round and offers an ideal opportunity for those who wish to pass unforgettable and unique moments during their classical, alternative, religious etc. holydays. \nThe hotel also has rooms for professional events such as seminars, conferences, meetings etc, and social events such as marriages, christening, cutting of pie etc.\n
The very friendly personnel will welcome you in the entrance of the hotel and will make your stay in the hotel an unforgettable experience.",
    "photos": [
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(25).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(1).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(23).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(24).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(26).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(27).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(28).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(29).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(30).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(31).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(32).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(33).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(34).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(35).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(36).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(37).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(38).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(39).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(40).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(41).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(42).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(43).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(44).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(45).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(46).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(47).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/athenaeum+(48).jpg",
    "width": 500,
    "height": 300
    },
    {
    "url": "https://demov5.book-onlinenow.net/Webpages/1932/img_backtrans.jpg",
    "width": 500,
    "height": 300
    }
    ]
    }
    ]
    }
```

### Get property Rooms and Rates

Returns the Rooms and Rates information of a property

### Header
```
Content-Type: application/x-www-form-urlencoded
```


### GET
```
/PropertyInformation/:id
```

### Parameter
| Field |   Type   |    Description   |
|:-----:|:--------:|:----------------:|
| id    |  String  | The Property-ID  |


### Success Response (200)
|         Field         |    Type   |                                        Description                                       |
|:---------------------:|:---------:|:----------------------------------------------------------------------------------------:|
| Property              |  Number   | unique hotel identifier                                                                  |
| RoomID                |  int      | unique room identifier                                                                   |
| Name                  |  string   | Short description                                                                        |
| Description           |  string   | Long description                                                                         |
| Capacity              |  string   | Capacity of the room.                                                                    |
| Occupancy             |  string   | Persons the room can accomodate                                                          |
| PhotoURL              |  Number   | List of room photo links                                                                 |
| Language              |  string   | Alpha-2 code of the text language                                                        |
| RateID                |  int      | unique rate identifier                                                                   |
| Refundable            |  Boolean  | false if the rate is not refundable                                                      |
| Refundable_until_days |  int      | If refundable is true specifies the days before arrival the reservation can be refunded  |
| boardType             |  String   | RO:room Only, BB:Bed&amp;amp;Breakfast, HB:Half Board, FB:Full Board, AI: All Inclusive  |

### Response
```
 {
    "PropertyDataSet": [
        {
            "HotelID": "1557",
            "RoomData": [
                {
                    "RoomID": "5989",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "CLASSIC MATRIMONIAL",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Modern and comfortable room with king size bed fully equipped to enjoy your stay for business or tourism. 301 ft2Keycard lockCentral Air ConditioningBuffet breakfast includedFree Wi FiMini-BarBath kit includedTelephoneLCD TVSoundproof Windows",
                                "Language": "en"
                            },
                            {
                                "TheText": "Moderna y confortable habitación con cama King Size totalmente equipada para que pueda disfrutar de su estadía de trabajo o turismo en la ciudad.28 m2Cerradura con tarjeta magnéticaClimatización CentralizadaDesayuno buffet incluídoFree Wi FiFrigobarKit de baño incluidoTeléfonoTelevisor LCDVentanas con aislamiento acústico",
                                "Language": "es"
                            },
                            {
                                "TheText": "Moderno e confortável quarto com cama King Size e totalmente equipado para que você possa desfrutar sua estadia de trabalho ou turismo na cidade.28 m2Fechadura com cartão magnéticoAr Condicionado CentralCafé da manhã tipo bufê americano incluídoFree Wi FiFrigobarKit de toilette incluídoTelefoneTV LCDJanelas com isolamento acústico",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "4",
                    "Occupancy": "4",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18Dazzler+Montevideo+hab1_retocada.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/B_302338.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "5990",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "CLASSIC TWIN",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Modern and comfortable twin room fully equipped to enjoy your stay for business or tourism. 301 ft2Keycard lockCentral Air ConditioningBuffet breakfast includedFree Wi FiMini-BarBath kit includedTelephoneLCD TVSoundproof Windows",
                                "Language": "en"
                            },
                            {
                                "TheText": "Moderna y confortable habitación con camas Twin totalmente equipada para que pueda disfrutar de su estadía de trabajo o turismo en la ciudad.•\t28 m2•\tCerradura con tarjeta magnética•\tClimatización Centralizada•\tDesayuno buffet incluído•\tFree Wi Fi•\tFrigobar•\tKit de baño incluido•\tTeléfono•\tTelevisor LCD•\tVentanas con aislamiento acústico",
                                "Language": "es"
                            },
                            {
                                "TheText": "Moderno e confortável quarto com camas Twin e totalmente equipado para que você possa desfrutar sua estadia de trabalho ou turismo na cidade.•\t28 m2•\tFechadura com cartão magnético•\tAr Condicionado Central•\tCafé da manhã tipo bufê americano incluído•\tFree Wi Fi•\tFrigobar•\tKit de toilette incluído•\tTelefone•\tTV LCD•\tJanelas com isolamento acústico",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "2",
                    "Occupancy": "2",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+hab3+(1).jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "5991",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "CLASSIC TRIPLE",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Triple bed room fully equipped to enjoy your stay for business or tourism. 301 ft2Keycard lockCentral Air ConditioningBuffet breakfast includedFree Wi FiMini-BarBath kit includedTelephoneLCD TVSoundproof Windows",
                                "Language": "en"
                            },
                            {
                                "TheText": "Habitaciones triples totalmente equipadas para que pueda disfrutar de su estadía de trabajo o turismo en la ciudad. 28 m2Cerradura con tarjeta magnéticaClimatización CentralizadaDesayuno buffet incluídoFree Wi FiFrigobarKit de baño incluidoTeléfonoTelevisor LCDVentanas con aislamiento acústico",
                                "Language": "es"
                            },
                            {
                                "TheText": "Quartos triplos totalmente equipados para que você possa desfrutar sua estadia de trabalho ou turismo na cidade.28 m2Fechadura com cartão magnéticoAr Condicionado CentralCafé da manhã tipo bufê americano incluídoFree Wi FiFrigobarKit de toilette incluídoTelefoneTV LCDJanelas com isolamento acústico",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "3",
                    "Occupancy": "3",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+hab2+(1).jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "5992",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "SUPERIOR MATRIMONIAL",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Room with king size bed, strategically located on higher floors with stunning views of Punta Carretas. Fully equipped for you to enjoy your stay for business or tourism. The room has coffee machine to use at any moment of the day. 301 ft2Keycard lockSoundproof WindowsLocated on the higher floorsLCD TV Additional HD Channels, Movies, Football.Bath kit includedMini-BarTelephoneFree Wi FiBuffet breakfast includedCentral Air ConditioningCoffee Machine",
                                "Language": "en"
                            },
                            {
                                "TheText": "Habitaciones con cama King Size estratégicamente ubicadas en pisos más altos con increíbles vistas del barrio de Punta Carretas totalmente equipadas para que pueda disfrutar de su estadía de trabajo o turismo en la ciudad. Además, la habitación ofrece una máquina de café para que disfrute en cualquier momento del día.28 m2Cerradura con tarjeta magnéticaVentanas con aislamiento acústicoUbicada en los pisos más altosTelevisor LCDCanales Adicionales de HD, Películas, FútbolKit de baño incluidoFrigobarTeléfonoFree Wi FiDesayuno buffet incluídoClimatización CentralizadaMáquina de Café",
                                "Language": "es"
                            },
                            {
                                "TheText": "Quartos com cama King Size estrategicamente localizados em pisos mais altos com incrível vista do bairro de Punta Carretas e totalmente equipado para que você possa desfrutar sua estadia de trabalho ou turismo na cidade. O quarto também dispõe de uma máquina de café que pode ser usada em qualquer momento do dia.28 m2Cerradura con tarjeta magnéticaVentanas con aislamiento acústicoUbicada en los pisos más altosTelevisor LCDCanales Adicionales de HD, Películas, FútbolKit de baño incluidoFrigobarTeléfonoFree Wi FiDesayuno buffet incluídoClimatización CentralizadaMáquina de Café",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "3",
                    "Occupancy": "3",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+hab1+(2).jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/B_302314.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18Dazzler+Montevideo+hab1_retocada.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "5993",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "SUPERIOR TWIN",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Twin bed room, strategically located on higher floors with stunning views of Punta Carretas. Fully equipped to enjoy your stay for business or tourism. The room has coffee machine to use at any moment of the day. 301 ft2Keycard lockSoundproof WindowsLocated on the higher floorsLCD TV Additional HD Channels, Movies, Football.Bath kit includedMini-BarTelephoneFree Wi FiBuffet breakfast includedCentral Air ConditioningCoffee Machine",
                                "Language": "en"
                            },
                            {
                                "TheText": "Habitaciones con camas Twin estratégicamente ubicadas en pisos más altos con increíbles vistas del barrio de Punta Carretas totalmente equipadas para que pueda disfrutar de su estadía de trabajo o turismo en la ciudad. Además, la habitación ofrece una máquina de café para que disfrute en cualquier momento del día.•\t28 m2•\tCerradura con tarjeta magnética•\tVentanas con aislamiento acústico•\tUbicada en los pisos más altos•\tTelevisor LCD•\tCanales Adicionales de HD, Películas, Fútbol•\tKit de baño incluido•\tFrigobar•\tTeléfono•\tFree Wi Fi•\tDesayuno buffet incluído•\tClimatización Centralizada•\tMáquina de Café",
                                "Language": "es"
                            },
                            {
                                "TheText": "Quartos com camas Twin estrategicamente localizados em pisos mais altos com incrível vista do bairro de Punta Carretas e totalmente equipado para que você possa desfrutar sua estadia de trabalho ou turismo na cidade. O quarto também dispõe de uma máquina de café que pode ser usada em qualquer momento do dia.•\t28 m2•\tCerradura con tarjeta magnética•\tVentanas con aislamiento acústico•\tUbicada en los pisos más altos•\tTelevisor LCD•\tCanales Adicionales de HD, Películas, Fútbol•\tKit de baño incluido•\tFrigobar•\tTeléfono•\tFree Wi Fi•\tDesayuno buffet incluído•\tClimatización Centralizada•\tMáquina de Café",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "2",
                    "Occupancy": "2",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+hab3+(1).jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "5994",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "VIP",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Modern and spacious suite of 183,727 sq. ft. , divided into two rooms fully equipped to enjoy your stay for business or tourism. The suite also has coffee machine to use at any moment of the day. 603 ft2Two roomsLCD TVTelephoneLiving room with toiletCoffee MachineBath kit includedRoom with bathMini-BarFree Wi FiBuffet breakfast includedCentral Air ConditioningKeycard lockSoundproof Windows",
                                "Language": "en"
                            },
                            {
                                "TheText": "Moderna y amplia Suite de 56 m2, dividida en dos ambientes totalmente equipada para que disfrute de su estadía de trabajo o turismo en la ciudad. Además, la suite ofrece una máquina de café para que la utilice en cualquier momento del día.56 m22 ambientesTelevisor LCDTeléfonoSala de estar con toiletMáquina de CaféKit de baño incluidoHabitación con bañoFrigobarFree Wi FiDesayuno buffet incluídoClimatización CentralizadaCerradura con tarjeta magnéticaVentanas con aislamiento acústico",
                                "Language": "es"
                            },
                            {
                                "TheText": "Moderna e ampla suíte de 56m2, dividida em dois ambientes e totalmente equipada para que desfrutes sua estadia de trabalho ou turismo. O quarto também dispõe de uma máquina de café que pode ser usada em qualquer momento do dia.56 m2Dois ambientesTV LCDTelefonSala de estar com toiletMaquina de CaféKit de toilette incluídoQuarto com casa de banhoFrigobarFree Wi FiCafé da manhã tipo bufê americano incluídoAr Condicionado CentralFechadura com cartão magnéticoJanelas com isolamento acústico",
                                "Language": "pt"
                            }
                        ]
                    },
                    "Capacity": "4",
                    "Occupancy": "4",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/B_302903.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/B_302854.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/B_302314.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/02.SuiteDazzlerMontevideo.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18Dazzler+Montevideo+hab1_retocada.jpg"
                        },
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/D18.Dazzler+Montevideo+habBa.jpg"
                        }
                    ]
                },
                {
                    "RoomID": "15452",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "τερσ",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "",
                                "Language": "en"
                            }
                        ]
                    },
                    "Capacity": "1",
                    "Occupancy": "1",
                    "PhotoURL": [
                        {
                            "URL": "https://bonhotel.book-onlinenow.net/Webpages/1557/"
                        }
                    ]
                }
            ],
            "RateData": [
                {
                    "RateID": "20975",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Standard Rate with Breakfast",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children   Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n\t\t\n\t\t\t\t\t\t\n\n\n  \n\n\n\n\t\t\t\t\t\t\tRegister for extra secret discount!\n\t\t\t\t\t\t\n\t\t\t\t\t",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20976",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Limited last minute - Free Cancellation",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children   Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n\t\t\n\t\t\t\t\t\t\n\n\n  \n\n\n\n\t\t\t\t\t\t\tRegister for extra secret discount!\n\t\t\t\t\t\t\n\t\t\t\t\t",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": true,
                        "Refundable_until_days": "1"
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20978",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Phone/Email Free Cancellation Rate",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children   Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n\t\t\n\t\t\t\t\t\t\n\n\n  \n\n\n\n\t\t\t\t\t\t\tRegister for extra secret discount!\n\t\t\t\t\t\t\n\t\t\t\t\t",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": true,
                        "Refundable_until_days": "2"
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20979",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Saver : Early Bird Promotion",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children   Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n\t\t\n\t\t\t\t\t\t\n\n\n  \n\n\n\n\t\t\t\t\t\t\tRegister for extra secret discount!\n\t\t\t\t\t\t\n\t\t\t\t\t",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "RO"
                },
                {
                    "RateID": "20980",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Advanced Purchase Rate",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children   Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n\t\t\n\t\t\t\t\t\t\n\n\n  \n\n\n\n\t\t\t\t\t\t\tRegister for extra secret discount!\n\t\t\t\t\t\t\n\t\t\t\t\t",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "RO"
                },
                {
                    "RateID": "20981",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Romance for Two",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Romantic Package for couples for 2 nights \n- Unlimited access to the ClubWell zone (pool, whirlpool, Finnish sauna, aroma sauna, steam bath, relaxation room)",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": true,
                        "Refundable_until_days": "2"
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20982",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Gourmet Package for Two",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Gastronomy Rhapsody for true gourmets.Homemade truffles and a bottle of Prosecco in the room1x dinner - 4-course tasting menu including wine in the Tetu Brisssy restaurantand more!",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": true,
                        "Refundable_until_days": "2"
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20983",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Mountains for Seniors",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Thanks to thousands of miles of public and ancient footpaths, walking is an integral part of the British way of life. With rolling hills, scattered stone villages and a wealth of historic monuments and buildings from prehistoric times to the present day, there is no better countryside to roam than that of the Cotswolds and the Duchy of Cornwall.",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "20984",
                    "Name": {
                        "Text": [
                            {
                                "TheText": "Active Holidays",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Unlimited access to the ClubWell zone (pool, whirlpool, Finnish sauna, vario sauna, steam bath, relaxation room)Unlimited access to the EnerGym zone (cardio fitness, weight room)",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "BB"
                },
                {
                    "RateID": "23802",
                    "Name": {
                        "Text": [
                            {
                                "TheText": " MEMBER CLUB RATE",
                                "Language": "en"
                            }
                        ]
                    },
                    "Description": {
                        "Text": [
                            {
                                "TheText": "Rates are in euro (€) including all fees  Breakfast Included  Special pricing children  Unlimited access to the ClubWell zone (pool, whirlpool, Finnish sauna, vario sauna, steam bath, relaxation room)  Unlimited access to the EnerGym zone (cardio fitness, weight room)\n\n\n\n\n  Welcome Drink offered on arrival\n\n.glyphicon.glyphicon-ok{\ncolor:green;}\n    \n",
                                "Language": "en"
                            }
                        ]
                    },
                    "Refundable": {
                        "Available": false
                    },
                    "BoardType": "BB"
                }
            ]
        }
    ]
}
```

# AVAILABILITY

### Get availability

Retuns Booking Availability

### Header
```
Content-Type: application/x-www-form-urlencoded
```

### POST
```
/Availability
```
&amp;
```
/AvailabilityMulti
```

There are 2 availability calls with the same parameters. The difference is that the first (/Availability) returns results for one room to accommodate all the rooms requests with total prices based on the occupancy request. E.g. for two rooms for adults=1 and adults=2 only rooms that can accommodate the maximum adults in the request ,in this case 2, will be in the results with the total price to book two rooms of the same type. The second (/AvailabilityMulti) returns different rooms for each room request with the addition of the room request number in the results hosted in the response parameter room_request, room_request is not part of the (/Availability) response.

### Body
```
api_version=1 
&hotels=899,1,1174 
&start_date=2016-01-21 
&end_date=2016-01-23 &party=[{"adults":2, "children" : [ 1 ]}] 
&lang=en_US 
&currency=EUR 
&user_country=GR 
&booking_source=1 
&promo_code=thePromo
```

### Parameter

|      Field     |      Type     |                                                                                                                                                                                                           Description                                                                                                                                                                                                          | Mandatory |
|:--------------:|:-------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|
| api_version    |  number       | The version of the API used by this request. Set to 1                                                                                                                                                                                                                                                                                                                                                                          |   true    |
| hotel          |  String       | comma seperated list of hotels to search                                                                                                                                                                                                                                                                                                                                                                                       |   true    |
| start_date     |  String       | The user's check-in date in YYYY-MM-DD                                                                                                                                                                                                                                                                                                                                                                                         |   true    |
| end_date       |  String       | The user's check-out date in YYYY-MM-DD                                                                                                                                                                                                                                                                                                                                                                                        |   true    |
| party          |  Party array  | Array of JSON objects including number of adults and children requested. Each party object represents the occupation for a separate room. For example, "party":[{"adults": 3}] is a request for one room that accommodates three adults, or "party":[{"adults": 2},{"adults": 2, "children": [11,8]}] is a request for one room for two adults and one room for two adults and two children aged 11 and 8.&amp;nbsp;&amp;nbsp; |   true    |
| lang           |  String       | Language code (see Supported Languages), which identifies the corresponding language and POS.                                                                                                                                                                                                                                                                                                                                  |   true    |
| user_country   |  String       | SO 3166-1 alpha-2 country code corresponding to the user making this request. Can include and exclude rates base on rate setup                                                                                                                                                                                                                                                                                                 |   false   |
| booking_source |  Number       | a number defined by bookonlinenow that can be used to differentiate the rate and promotion provided. If not specified the public available rates and promotion will be retuned                                                                                                                                                                                                                                                 |   False   |
| promo_code     |  String       | a string defined by bookonlinenow that can be used to differentiate the rates and promotion provided.                                                                                                                                                                                                                                                                                                                          |   false   |
| currency       |  String       | ISO 4217 currency code. All prices, taxes, fees, and discount amounts should be returned in this requested currency.                                                                                                                                                                                                                                                                                                           |   true    |


### Success Response (200)
|     Field    |      Type      |                                                    Description                                                   | Mandatory |
|:------------:|:--------------:|:----------------------------------------------------------------------------------------------------------------:|:---------:|
| api_version  |  number        |   Version of the API used.                                                                                       |   true    |
| hotel        |  String        |   Echo the hotels list                                                                                           |   true    |
| start_date   |  String        |   The user's check-in date in YYYY-MM-DD                                                                         |   true    |
| end_date     |  String        |   Echo the check-out date                                                                                        |   true    |
| party        |  Party array   |   Echo the party array&amp;nbsp;&amp;nbsp;                                                                       |   true    |
| lang         |  String        |   Language code The language of the response, if language not available English are returned&amp;nbsp;&amp;nbsp; |   true    |
| user_country |  String        |   Echo the user country                                                                                          |   true    |
| currency     |  String        |   Echo the currency.                                                                                             |   true    |
| hotels       |  Hotels array  |   Object of all offers per hotel listed in hotel_ids                                                             |   true    |


### Hotels
|    Field   |       Type       |                                                                                      Description                                                                                     | Mandatory |
|:----------:|:----------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|
| hotelid    |  number          | the unique hotelid                                                                                                                                                                   |   true    |
| room_types |  RoomType array  | An array of objects detailing the different kinds of rooms that are available for the entire party. The short description must be unique for each room type available in the hotel.  |   true    |


### RoomType
|          Field          |         Type         |                                                                    Description                                                                   |              Mandatory              |
|:-----------------------:|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------:|
| room_request            |  string              | party request that the room accommodates based on the number of rooms in the party array                                                         |   true only for /AvailabilityMulti  |
| name                    |  string              | Short description of the room type.                                                                                                              |   true                              |
| board_type              |  string              | RO:room Only, BB:Bed&amp;amp;Breakfast, HB:Half Board, FB:Full Board, AI: All Inclusive                                                          |   true                              |
| final_price_at_booking  |  Price object        | Contains the entire price to be paid at time of booking, including taxes and fees.&amp;nbsp;&amp;nbsp;                                           |   true                              |
| final_price_at_checkout |  Price object        | Contains the entire price to be paid at checkout (usually city taxes)&amp;amp;nbsp;&amp;amp;nbsp;                                                |   true                              |
| profit_margin           |  Price object        | this is the profit margin (the amount of discount you get of the original price)&amp;nbsp;&amp;nbsp;                                             |   true                              |
| description             |  string              | Contains information about room                                                                                                                  |   true                              |
| rooms_available         |  Number              | The number of rooms remaining/available.                                                                                                         |   true                              |
| partner_data            |  object              | Must be provide provided when a booking submit request is sent. to validate the request                                                          |   true                              |
| line_items              |  LineItem array      | Contains the detailed breakdown of charges. An array of LineItem objects will contain a separate LineItem for each of rate, tax, and fee types.  |   true                              |
| photos                  |  Photo array         | An array of photo objects for the room                                                                                                           |   true                              |
| cancellation            |  Cancellation        | Specifies the penalty users have to pay at time of cancellation.                                                                                 |   true                              |
| occupancy               |  Occupancy           | The occupancy for this room                                                                                                                      |   true                              |
| discounts               |  array of discounts  | the discounts applied                                                                                                                            |   true                              |


### Price
|   Field  |   Type   |                Description               | Mandatory |
|:--------:|:--------:|:----------------------------------------:|:---------:|
| amount   |  number  |   The value of the price.                |   true    |
| currency |  string  |   ISO 4217 currency code for the price.  |   true    |


### LineItem
|       Field      |    Type   |                                             Description                                             | Mandatory |
|:----------------:|:---------:|:---------------------------------------------------------------------------------------------------:|:---------:|
| price            |  Price    |   Contains the price of the line item.                                                              |   true    |
| type             |  string   |   "net_rate" - Net rate or "vat" - VAT amount                                                       |   true    |
| paid_at_checkout |  boolean  |   true, if specific lineItem is to be paid at hotel; false, if it has to be paid at booking time.   |   true    |
| description      |  string   |   A textual description of the charge.                                                              |   true    |


### Photo
|    Field    |   Type   |                Description               | Mandatory |
|:-----------:|:--------:|:----------------------------------------:|:---------:|
| url         |  string  |   URL for the image.                     |   true    |
| width       |  number  |   Width in pixels of full size image     |   false   |
| height      |  number  |   Height in pixels of full size image    |   false   |
| description |  string  |   A textual description of the charge.   |   true    |


### Cancellation
|   Field   |       Type      |                                   Description                                   | Mandatory |
|:---------:|:---------------:|:-------------------------------------------------------------------------------:|:---------:|
| policy    |  string         |   text to describe the cancellation policy.                                     |   false   |
| penalties |  Penalty array  |    Array to describe the costs user has to pay if the rate is being cancelled.  |   true    |


### Penalty
|   Field   |   Type   |                                                          Description                                                         |                                Mandatory                                |
|:---------:|:--------:|:----------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------:|
| from      |  string  |   Date determined from which time stamp this penalty is applied. Must be in ISO-8601 format, e.g. 2015-05-25T16:00:00+0000   |   true, if penalty is not applied from the starting time of a booking.  |
| penalties |  Price   |   Object containing amount &amp; currency of the fee the user has to pay if rate is being cancelled.                         |   true                                                                  |


### Occupancy
|       Field      |    Type   |                                     Description                                     | Mandatory |
|:----------------:|:---------:|:-----------------------------------------------------------------------------------:|:---------:|
| standard_persons |  integer  |   The standard occupancy for this room                                              |   true    |
| max_persons      |  integer  |   The maximum number of persons (adults and children) allowed to stay in the room.  |   true    |
| max_adults       |  integer  |   The maximum number of adults allowed to stay in the room.                         |   true    |
| max_children     |  integer  |   The maximum number of children allowed to stay in the room                        |   true    |
| max_children_age |  integer  |   The maximum age for a person to be considered as child                            |   true    |


### Discount 
|      Field     |   Type   |               Description               | Mandatory |
|:--------------:|:--------:|:---------------------------------------:|:---------:|
| marketing_text |  string  |   A short description of the discount   |   true    |
| final_rate     |  number  |   Tthe total amount of the discount     |   true    |


### Response
```
{
        "api_version": 1,
        "hotel_ids": "899",
        "start_date": "2019-11-01",
        "end_date": "2019-11-02",
        "lang": "en_US",
        "currency": "EUR",
        "party": [
            {
                "adults": 2,
                "children": [
                    1
                ]
            }
        ],
        "hotels": [
            {
                "hotel_id": 899,
                "room_types": [
                    {
                        "name": "Two-unit Suite-Saver : Early Bird Promotion",
                        "final_price_at_booking": {
                            "amount": 129.0,
                            "currency": "EUR"
                        },
                        "final_price_at_checkout": {
                            "amount": 15.5,
                            "currency": "EUR"
                        },
                        "profit_margin": {
                            "amount": 36.0,
                            "currency": "EUR"
                        },
                        "description": "The rooms are spacious, furnished with modern design and decoration and are equipped with all modern facilities and amenities. View: City viewRoom Size: 67 sq/m roomBeds: 1 large double, 1 single bed and 1 sofa bed",
                        "rooms_available": 4,
                        "partner_data": {
                            "hotelID": "899",
                            "roomType": "3025",
                            "ratetype": "8775",
                            "rateDetail": "33949",
                            "price": "129",
                            "discount": "6986",
                            "discount2": "0"
                        },
                        "occupancy": {
                            "standard_persons": 4,
                            "max_persons": 4,
                            "max_adults": 4,
                            "max_children": 2,
                            "max_children_age": 12
                        },
                        "line_items": [
                            {
                                "price": {
                                    "amount": 117.0,
                                    "currency": "EUR"
                                },
                                "type": "net_rate",
                                "paid_at_checkout": false,
                                "description": "Total amount at check-in"
                            },
                            {
                                "price": {
                                    "amount": 12.0,
                                    "currency": "EUR"
                                },
                                "type": "vat",
                                "paid_at_checkout": false,
                                "description": "Total tax at check-in"
                            },
                            {
                                "price": {
                                    "amount": 0.5,
                                    "currency": "EUR"
                                },
                                "type": "city_tax",
                                "paid_at_checkout": true,
                                "description": "city tax"
                            },
                            {
                                "price": {
                                    "amount": 15.0,
                                    "currency": "EUR"
                                },
                                "type": "service_fee",
                                "paid_at_checkout": true,
                                "description": "cleaning"
                            }
                        ],
                        "photos": [
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/family-hotel-cork-city.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/Triple-Room-2048x1024.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/4.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/images3.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/images2.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/01IMG_TS_7919.jpg",
                                "width": 500,
                                "height": 300
                            }
                        ],
                        "cancellation": {
                            "policy": "This rate is available only on a non-refundable basis. \nFull prepayment is required for this special rate. Upon booking entire stay amount will be charged to your credit card (full prepayment). The reservation is non changeable and, in case of cancellation, modification or non-show the prepayment is non refundable.\n",
                            "penalties": [
                                {
                                    "fee": {
                                        "amount": 117.0,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "discounts": [
                            {
                                "marketing_text": "",
                                "final_rate": 63.0
                            }
                        ]
                    },
                    {
                        "name": "Deluxe Apartment-Saver : Early Bird Promotion",
                        "final_price_at_booking": {
                            "amount": 215.0,
                            "currency": "EUR"
                        },
                        "final_price_at_checkout": {
                            "amount": 15.5,
                            "currency": "EUR"
                        },
                        "profit_margin": {
                            "amount": 60.0,
                            "currency": "EUR"
                        },
                        "description": "3 Bedrooms - accommodates up to 6 personGroundfloor: 1 twin beds bedroom, shower WC, kitchen, living room. Upper floor: 1 Double bed bedroom, 1 twin bed bedroom, bathroom with bathtub, balcony. Extra facilities: Private swimming pool, dishwasher",
                        "rooms_available": 7,
                        "partner_data": {
                            "hotelID": "899",
                            "roomType": "3026",
                            "ratetype": "8775",
                            "rateDetail": "33950",
                            "price": "215",
                            "discount": "6986",
                            "discount2": "0"
                        },
                        "occupancy": {
                            "standard_persons": 6,
                            "max_persons": 6,
                            "max_adults": 6,
                            "max_children": 2,
                            "max_children_age": 12
                        },
                        "line_items": [
                            {
                                "price": {
                                    "amount": 195.0,
                                    "currency": "EUR"
                                },
                                "type": "net_rate",
                                "paid_at_checkout": false,
                                "description": "Total amount at check-in"
                            },
                            {
                                "price": {
                                    "amount": 20.0,
                                    "currency": "EUR"
                                },
                                "type": "vat",
                                "paid_at_checkout": false,
                                "description": "Total tax at check-in"
                            },
                            {
                                "price": {
                                    "amount": 0.5,
                                    "currency": "EUR"
                                },
                                "type": "city_tax",
                                "paid_at_checkout": true,
                                "description": "city tax"
                            },
                            {
                                "price": {
                                    "amount": 15.0,
                                    "currency": "EUR"
                                },
                                "type": "service_fee",
                                "paid_at_checkout": true,
                                "description": "cleaning"
                            }
                        ],
                        "photos": [
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/9d7510205d2616cb23d2.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/60af54122f254401ea3b.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/c982be60be86587be748.jpg",
                                "width": 500,
                                "height": 300
                            }
                        ],
                        "cancellation": {
                            "policy": "This rate is available only on a non-refundable basis. \nFull prepayment is required for this special rate. Upon booking entire stay amount will be charged to your credit card (full prepayment). The reservation is non changeable and, in case of cancellation, modification or non-show the prepayment is non refundable.\n",
                            "penalties": [
                                {
                                    "fee": {
                                        "amount": 195.0,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "discounts": [
                            {
                                "marketing_text": "",
                                "final_rate": 105.0
                            }
                        ]
                    },
                    {
                        "name": "Junior Elegance Suite-Saver : Early Bird Promotion",
                        "final_price_at_booking": {
                            "amount": 222.0,
                            "currency": "EUR"
                        },
                        "final_price_at_checkout": {
                            "amount": 15.5,
                            "currency": "EUR"
                        },
                        "profit_margin": {
                            "amount": 62.0,
                            "currency": "EUR"
                        },
                        "description": "The rooms are spacious, furnished with modern design and decoration and are equipped with all modern facilities and amenitiesView: Port viewRoom Size: 45 sq/m roomBeds: 1 large double and 1 single bed",
                        "rooms_available": 6,
                        "partner_data": {
                            "hotelID": "899",
                            "roomType": "3023",
                            "ratetype": "8775",
                            "rateDetail": "33947",
                            "price": "222",
                            "discount": "6986",
                            "discount2": "0"
                        },
                        "occupancy": {
                            "standard_persons": 4,
                            "max_persons": 4,
                            "max_adults": 4,
                            "max_children": 2,
                            "max_children_age": 12
                        },
                        "line_items": [
                            {
                                "price": {
                                    "amount": 202.0,
                                    "currency": "EUR"
                                },
                                "type": "net_rate",
                                "paid_at_checkout": false,
                                "description": "Total amount at check-in"
                            },
                            {
                                "price": {
                                    "amount": 20.0,
                                    "currency": "EUR"
                                },
                                "type": "vat",
                                "paid_at_checkout": false,
                                "description": "Total tax at check-in"
                            },
                            {
                                "price": {
                                    "amount": 0.5,
                                    "currency": "EUR"
                                },
                                "type": "city_tax",
                                "paid_at_checkout": true,
                                "description": "city tax"
                            },
                            {
                                "price": {
                                    "amount": 15.0,
                                    "currency": "EUR"
                                },
                                "type": "service_fee",
                                "paid_at_checkout": true,
                                "description": "cleaning"
                            }
                        ],
                        "photos": [
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/isrotel-tower-hotel.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/Junior-Suite-City-View2.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/junior-city-view-double.jpg",
                                "width": 500,
                                "height": 300
                            }
                        ],
                        "cancellation": {
                            "policy": "This rate is available only on a non-refundable basis. \nFull prepayment is required for this special rate. Upon booking entire stay amount will be charged to your credit card (full prepayment). The reservation is non changeable and, in case of cancellation, modification or non-show the prepayment is non refundable.\n",
                            "penalties": [
                                {
                                    "fee": {
                                        "amount": 202.0,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "discounts": [
                            {
                                "marketing_text": "",
                                "final_rate": 108.0
                            }
                        ]
                    },
                    {
                        "name": "Master Suite -Saver : Early Bird Promotion",
                        "final_price_at_booking": {
                            "amount": 343.0,
                            "currency": "EUR"
                        },
                        "final_price_at_checkout": {
                            "amount": 15.5,
                            "currency": "EUR"
                        },
                        "profit_margin": {
                            "amount": 96.0,
                            "currency": "EUR"
                        },
                        "description": "The Master Suites feature large furnished terrace with seating and dining area perfect for enjoying romantic sunsets or a delicious dinner. They include kitchen, WC, shower and lovely bedroom has a king size bed, work desk and luxurious open bathroom with bathtub with Jacuzzi and shower.View: Sea viewRoom Size: 45sq.m. roomBeds: 1 double ,3rd person in sofa bed Max Persons: 2+1extras",
                        "rooms_available": 10,
                        "partner_data": {
                            "hotelID": "899",
                            "roomType": "3024",
                            "ratetype": "8775",
                            "rateDetail": "33948",
                            "price": "343",
                            "discount": "6986",
                            "discount2": "0"
                        },
                        "occupancy": {
                            "standard_persons": 3,
                            "max_persons": 3,
                            "max_adults": 3,
                            "max_children": 2,
                            "max_children_age": 12
                        },
                        "line_items": [
                            {
                                "price": {
                                    "amount": 312.0,
                                    "currency": "EUR"
                                },
                                "type": "net_rate",
                                "paid_at_checkout": false,
                                "description": "Total amount at check-in"
                            },
                            {
                                "price": {
                                    "amount": 31.0,
                                    "currency": "EUR"
                                },
                                "type": "vat",
                                "paid_at_checkout": false,
                                "description": "Total tax at check-in"
                            },
                            {
                                "price": {
                                    "amount": 0.5,
                                    "currency": "EUR"
                                },
                                "type": "city_tax",
                                "paid_at_checkout": true,
                                "description": "city tax"
                            },
                            {
                                "price": {
                                    "amount": 15.0,
                                    "currency": "EUR"
                                },
                                "type": "service_fee",
                                "paid_at_checkout": true,
                                "description": "cleaning"
                            }
                        ],
                        "photos": [
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/17E_113_Presidential_Suite_ELYSIUM.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/17F_114_Presidential_Suite_ELYSIUM.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/17G_115_Presidential_Suite_ELYSIUM.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/18_601_Elite_Club_Reception_ELYSIUM.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/20180529_145113.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/20180529_145149.jpg",
                                "width": 500,
                                "height": 300
                            },
                            {
                                "url": "https://demov3.book-onlinenow.net/Webpages/899/20180529_150225.jpg",
                                "width": 500,
                                "height": 300
                            }
                        ],
                        "cancellation": {
                            "policy": "This rate is available only on a non-refundable basis. \nFull prepayment is required for this special rate. Upon booking entire stay amount will be charged to your credit card (full prepayment). The reservation is non changeable and, in case of cancellation, modification or non-show the prepayment is non refundable.\n",
                            "penalties": [
                                {
                                    "fee": {
                                        "amount": 312.0,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "discounts": [
                            {
                                "marketing_text": "",
                                "final_rate": 168.0
                            }
                        ]
                    }
                ]
            }
        ]
    }
```


# Availability Calendar

Retuns Booking Availability Calendar

### Get availability calendar 

### Header
```
Content-Type: application/x-www-form-urlencoded
```

### Post
```
/Calendar
```

Returns the minimum price and availability for the specified period and parameters


### Body
```
api_version=1
&hotelid=899
&start_date=2016-01-21
&end_date=2016-01-23
&Adults=2
&Kids=0
&Infants=0
&currency=EUR
&booking_source=1
&promo_code=thePromo
```


### Parameter
|      Field     |                                          Type                                         |                                                                                    Description                                                                                    | Mandatory |
|:--------------:|:-------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|
| api_version    |  number                                                                               |   The version of the API used by this request. Set to 1                                                                                                                           |   true    |
| hotelid        |  String                                                                               |   Bookonlinenow hotelid                                                                                                                                                           |   true    |
| start_date     |  String                                                                               |   Calendar start date in YYYY-MM-DD                                                                                                                                               |   true    |
| end_date       |  String                                                                               |   Calendar end date in YYYY-MM-DD                                                                                                                                                 |   true    |
| Adults         |  Number                                                                               |   Number of adults.&amp;nbsp;&amp;nbsp;                                                                                                                                           |   true    |
| kids           |  Number                                                                               |   Number of childer, reflects to kid category 2 in bon                                                                                                                            |   false   |
| Infants        |  Number                                                                               |   Number of Infants, reflects to kid category 1 in bon                                                                                                                            |   false   |
| booking_source |  Number                                                                               |   a number defined by bookonlinenow that can be used to differentiate the rate and promotion provided. If not specified the public available rates and promotion will be retuned  |   false   |
| promo_code     |  String                                                                               |   a string defined by bookonlinenow that can be used to differentiate the rates and promotion provided.                                                                           |   false   |
| roomtype       |  comma seperated list of room types to search (roomID from request Property listing)  |   limits the response to specified room types                                                                                                                                     |   false   |
| ratetype       |  comma seperated list of rate types to search (rateID from request Property listing)  |   limits the response to specified rates types                                                                                                                                    |   false   |
| currency       |  String                                                                               |   ISO 4217 currency code. All prices, taxes, fees, and discount amounts should be returned in this requested currency.                                                            |   false   |
| lengthOfStay   |  Number                                                                               |   The length Of Stay. this affects the special offer that can be applied                                                                                                          |   false   |


### Success Response (200)
|     Field     |   Type   |                         Description                        | Mandatory |
|:-------------:|:--------:|:----------------------------------------------------------:|:---------:|
| date          |  String  |   Availability date in YYYY-MM-DD                          |   true    |
| totalPrice    |  Number  |   Daily rate before discount                               |   true    |
| totalDiscount |  Number  |   Daily rate after discount&amp;nbsp;&amp;nbsp;            |   true    |
| lang          |  Number  |   Minimun stay restriction                                 |   true    |
| availability  |  Number  |   The number of available rooms                            |   true    |
| mode          |  String  |   OP:Open, CL:Closed, MI:minimum stay restriction applied  |   true    |


### Response
```
 [
    {
        "date": "2023-09-10",
        "totalPrice": "107.14",
        "totalDiscount": "77.41",
        "minimumStay": 1,
        "availability": 2,
        "mode": "OP"
    },
    {
        "date": "2023-09-11",
        "totalPrice": "107.14",
        "totalDiscount": "77.41",
        "minimumStay": 1,
        "availability": 2,
        "mode": "OP"
    },
    {
        "date": "2023-09-12",
        "totalPrice": "107.14",
        "totalDiscount": "77.41",
        "minimumStay": 1,
        "availability": 2,
        "mode": "OP"
    },
    {
        "date": "2023-09-13",
        "totalPrice": "107.14",
        "totalDiscount": "77.41",
        "minimumStay": 1,
        "availability": 2,
        "mode": "OP"
    },
    {
        "date": "2023-09-14",
        "totalPrice": "107.14",
        "totalDiscount": "77.41",
        "minimumStay": 1,
        "availability": 1,
        "mode": "OP"
    }
]
```


# Booking


### Booking Submit 
Post a booking request

### Header 
```
Content-Type: application/json
```

### POST
```
/booking_submit
```


### Request
```
{
        "checkin_date":"2018-11-01",
        "checkout_date":"2018-11-02",
        "hotel_id":"899",
        "reference_id":"12345678",
        "partner_data":{
            "hotelID":"899",
            "roomType":"3022",
            "ratetype":"1822",
            "rateDetail":"6093",
            "price":"183",
            "discount":"4812",
            "discount2":"0"
        },
        "payment":{
            "parameters":{
                "card_type":"MasterCard",
                "card_number":"54307xxxxxxxx9993",
                "cardholder_name":"Stelios Kalogeropoulos",
                "expiration_month":"09",
                "expiration_year":"2025",
                "cvv":"507"
            },
            "billing_address":{
                "address1":"124 Alimou",
                "city":"Athens",
                "state":"Attiki",
                "postal_code":"18345",
                "country":"GR"
            }
        },
        "customer":{
            "first_name":"stelios",
            "last_name":"kalogeropoulos",
            "phone_number":"6947275998",
            "email":"skalog74@gmail.com",
            "country":"GR"
        },
        "rooms":[
        {
            "party":{
                "adults":2,
                "children":[
                    4
                ]
                },
            "traveler_first_name":"stelios",
            "traveler_last_name":"kalogeropoulos"
        }
        ],
        "final_price_at_booking":{
            "amount":183,
            "currency":"EUR"
        }
    }
```


### Parameter
|          Field         |       Type       |                                     Description                                     | Mandatory |
|:----------------------:|:----------------:|:-----------------------------------------------------------------------------------:|:---------:|
| checkin_date           |  string          |   The user's check-in date in YYYY-MM-DD                                            |   true    |
| checkout_date          |  String          |   The user's check-out date in YYYY-MM-DD                                           |   true    |
| hotel_id               |  string          |   the hotel_id                                                                      |   true    |
| reference_id           |  String          |   partner identifier for the booking                                                |   true    |
| customer               |  Customer        |   The user booking the reservation&amp;nbsp;&amp;nbsp;                              |   true    |
| rooms                  |  RoomStay array  |   An array of rooms to be booked..                                                  |   true    |
| payment                |  Payment object  |   Defines the payment method of the user                                            |   true    |
| final_price_at_booking |  Price           |   Contains the full price to be paid at time of booking, including taxes and fees.  |   true    |
| partner_data           |  object          |   Echoed partner_data from the booking availability request                         |   true    |


### Customer
|     Field    |    Type    |                                   Description                                  | Mandatory |
|:------------:|:----------:|:------------------------------------------------------------------------------:|:---------:|
| first_name   |  string    |   First name of the user submitting the booking                                |   true    |
| last_name    |  String    |   Last name of the user submitting the booking.                                |   true    |
| phone_number |  string    |   Phone number of the user submitting the booking                              |   true    |
| email        |  String    |   E-mail address of the user submitting the booking&amp;nbsp;&amp;nbsp;        |   true    |
| country      |  Customer  |   ISO 3166 country code of the user submitting the booking&amp;nbsp;&amp;nbsp; |   true    |


### RoomStay
|        Field        |   Type   |                             Description                            | Mandatory |
|:-------------------:|:--------:|:------------------------------------------------------------------:|:---------:|
| party               |  Party   |   Contains the number of adults and children staying in this room  |   true    |
| traveler_first_name |  String  |   First name of the primary user staying in this room.             |   true    |
| traveler_last_name  |  string  |   Last name of the primary user staying in this room               |   true    |


### Payment

You can send "-" for all Fields if cc details are not available Fields are still mandatory part of the request

|       Field      |   Type   |                                        Description                                       | Mandatory |
|:----------------:|:--------:|:----------------------------------------------------------------------------------------:|:---------:|
| card_type        |  string  |   Diners Club MasterCard Discover AURA ELO American Express VISA JBC&amp;nbsp;&amp;nbsp; |   true    |
| card_number      |  String  |   Credit card number used for the booking.                                               |   true    |
| cardholder_name  |  string  |   Name on the credit card holder.                                                        |   true    |
| expiration_month |  String  |   Expiration month as a two-digit string (e.g. 01, 02, .. 12)&amp;nbsp;&amp;nbsp;        |   true    |
| expiration_year  |  string  |   Expiration year as four digit string.&amp;nbsp;&amp;nbsp;                              |   true    |
| cvv              |  string  |   The cvv number of the credit card used for the booking.&amp;nbsp;&amp;nbsp;            |   true    |


### Response
```
    {
      "reference_id": "12345678",
      "status": "success",
      "reservation": {
        "reservation_id": "RES1221151018R899",
        "hotel_id": "899",
        "status": "Booked",
        "confirmation_url": "https://demov3.book-onlinenow.net/index.aspx?Page=18&member=res899h511&pass=812486",
        "checkin_date": "2018-11-01",
        "checkout_date": "2018-11-02",
        "customer": {
          "first_name": "stelios",
          "last_name": "kalogeropoulos",
          "phone_number": "3-(292)055-6386",
          "email": "skalog74@gmail.com",
          "country": "GR"
        },
        "rooms": [
          {
            "party": {
              "adults": 2,
              "children": [
                4
              ]
            },
            "traveler_first_name": "stelios",
            "traveler_last_name": "kalogeropoulos"
          }
        ],
        "receipt": {
          "line_items": [
            {
              "price": {
                "amount": 166,
                "currency": "EUR"
              },
              "type": "net_rate",
              "paid_at_checkout": false,
              "description": "Total amount at check-in"
            },
            {
              "price": {
                "amount": 16.6,
                "currency": "EUR"
              },
              "type": "vat",
              "paid_at_checkout": false,
              "description": "Total tax at check-in"
            }
          ],
          "final_price_at_booking": {
            "amount": 182.6,
            "currency": "EUR"
          },
        }
      }
    }
```

### Parameters
|     Field    |       Type      |                                                     Description                                                     |                Mandatory               |
|:------------:|:---------------:|:-------------------------------------------------------------------------------------------------------------------:|:--------------------------------------:|
| problems     |  Problem array  |   An array containing issues that occurred&amp;nbsp;&amp;nbsp;                                                      |   true, only if 'status' is "Failure"  |
| reference_id |  String         |   Echo the reference_id                                                                                             |   true                                 |
| status       |  string         |   Success Failure&amp;nbsp;&amp;nbsp;                                                                               |   true                                 |
| reservation  |  Reservation    |   Contains details associated with the reservation ( e.g. receipt, date of stay, guests, etc.).&amp;nbsp;&amp;nbsp; |   true, only if 'status' is "Success"  |


### Problem


|    Field    |   Type   |                            Description                           | Mandatory |
|:-----------:|:--------:|:----------------------------------------------------------------:|:---------:|
| problem     |  string  |   supported problem type&amp;nbsp;&amp;nbsp;                     |   true    |
| explanation |  String  |   details of the problem that could be displayed to an end user  |   true    |
| detail      |  string  |   techical details of the problem&amp;nbsp;&amp;nbsp;            |   true    |


### Receipt
|          Field         |       Type       |                                                                  Description                                                                 | Mandatory |
|:----------------------:|:----------------:|:--------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|
| line_items             |  LineItem array  |   An array of LineItem objects containing a separate LineItem for each of rate, tax, and fee types.&amp;nbsp;&amp;nbsp;                      |   true    |
| final_price_at_booking |  Price           |   Object containing the entire price to be paid at time of booking, including taxes and fees. This will be used to validate the line items.  |   true    |


### Reservation
|       Field      |       Type       |                       Description                      | Mandatory |
|:----------------:|:----------------:|:------------------------------------------------------:|:---------:|
| reservation_id   |  string          |    unique id for this reservation                      |   true    |
| status           |  string          |    Booked Cancelled                                    |   true    |
| status           |  string          |    Booked Cancelled                                    |   true    |
| confirmation_url |  string          |    Deep link to the reservation confirmation page.     |   true    |
| checkin_date     |  string          |    The check-in date of the user in YYYY-MM-DD.        |   true    |
| checkout_date    |  string          |    The check-out date of the user in YYYY-MM-DD.       |   true    |
| Hotel_id         |  string          |    Unique identifier for this hotel                    |   true    |
| customer         |  Customer        |    Contains the customer booking the reservation       |   true    |
| rooms            |  RoomStay array  |    An array of RoomStay objects.                       |   true    |
| receipt          |  Receipt         |    Information about the pricing on the reservation.   |   true    |


### Get reservation information

In order to check if a booking has been submitted successfully, API offers the possibility to immediately verify the booking status once the booking was submitted by sending an additional "/booking_verify" request.

### Header
```
Content-Type: application/x-www-form-urlencoded
```

### GET
```
/booking_verify/:reservation_id
```

### Parameter
|      Field     |   Type   |       Description      |   |
|:--------------:|:--------:|:----------------------:|---|
| reservation_id |  String  |   The reservation ID.  |   |


### Success Response (200)

Same as reservations creation response

### Response
```
{
      "reference_id": "12345678",
      "status": "success",
      "reservation": {
        "reservation_id": "RES1221151018R899",
        "hotel_id": "899",
        "status": "Booked",
        "confirmation_url": "https://demov3.book-onlinenow.net/index.aspx?Page=18&member=res899h511&pass=812486",
        "checkin_date": "2018-11-01",
        "checkout_date": "2018-11-02",
        "customer": {
          "first_name": "stelios",
          "last_name": "kalogeropoulos",
          "phone_number": "3-(292)055-6386",
          "email": "skalog74@gmail.com",
          "country": "GR"
        },
        "rooms": [
          {
            "party": {
              "adults": 2,
              "children": [
                4
              ]
            },
            "traveler_first_name": "stelios",
            "traveler_last_name": "kalogeropoulos"
          }
        ],
        "receipt": {
          "line_items": [
            {
              "price": {
                "amount": 166,
                "currency": "EUR"
              },
              "type": "net_rate",
              "paid_at_checkout": false,
              "description": "Total amount at check-in"
            },
            {
              "price": {
                "amount": 16.6,
                "currency": "EUR"
              },
              "type": "vat",
              "paid_at_checkout": false,
              "description": "Total tax at check-in"
            }
          ],
          "final_price_at_booking": {
            "amount": 182.6,
            "currency": "EUR"
          },
        }
      }
    }
```


### Cancel a reservation

Cancel a reservation. Verify can also be used to verify that reservation was canceled

### Header
```
Content-Type: application/x-www-form-urlencoded
```


### GET
```
/booking_cancel/:reservation_id
```


### Parameter
|      Field     |   Type   |       Description      |   |
|:--------------:|:--------:|:----------------------:|---|
| reservation_id |  String  |   The reservation ID.  |   |


### Success response (200)

Simple success message


### Response
```
{success}
```


# Error Responses

### Error Responses Response (500)
```
{ 
    "error_code": 1, 
    "message": "An error occured" 
}
```


### Authorization Error Response Response (401)
```
{ 
    "error_code": 10, 
    "message": "Unauthorized" 
}
```
