# Interface Specifications -- Portal Service

## Technical Overview

### Communication Protocols

The exchange of information between _BNOWConnect_ and PMS happens
through HTTP POST method for the requested operation. Each operation is
called by posting the appropriate request Xml data for the corresponding
operation. _BNOWConnect will_ return the desired response Xml data to
the particular operation. HTTP content type "text/xml" would be used for
request and response.

### Authentication

Authentication and authorization are both implemented using user level
credentials. See Hotel Authorization below for details

## Operations

### Products List

This operation allows PMS - CRS _to_ request from bookonlinenow to
return a list of hotels available.

#### PortalRequestRQ

Portal **request - Xml sample**

```
<?xml version="1.0"?>

<PortalRequestRQ Version="**1.1**" Target="**Production**"
        TimeStamp="**2016-06-03T06:39:09**"xmlns="**http://www.opentravel.org/OTA/2013/05**">
    <Authentication Password="**demo**" UserName="**demo**"/>
    <PortalGetRequest Adults="**2**" End="**2013-06-03**"Start="**2016-06-02**" Area="**Athens**"/>
</PortalRequestRQ>

```

| **PortalRequestRQ**                                      |                                                                                                                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element / @Attribute <br /><br />Parent XPath**        | **Description**                                                                                                                                                 |
| @TimeStamp <br /><br />/ PortalRequestRQ                 | Time of the transaction in xml schema date-time format.                                                                                                         |
| @Version <br /><br />/ PortalRequestRQ                   | For this version of the specification set to “1.1”.                                                                                                             |
| Authentication <br /><br />/ PortalRequestRQ             | All BNOWConnect request messages would include an Authentication element.<br />A set of UserName and Password are passed.                                       |
| @UserName <br /><br />/ PortalRequestRQ / Authentication | The UserName part of the credentials.<br />UserName and Password combination (credentials) required to authorize the request are sent in these attributes.      |
| @Password <br /><br />/ PortalRequestRQ / Authentication | The Password part of the credential.                                                                                                                            |
| PortalRequestRQ <br /><br />/ PortalGetRequest           | Contains the request element.<br />Only one request element will be sent in one message.                                                                        |
| @Area <br /><br />/ PortalRequestRQ / PortalGetRequest   | The requested area.<br />This is a mandoatory field.                                                                                                            |
| @Start <br /><br />/ PortalRequestRQ / PortalGetRequest  | The start date of the date range for which the data applies.<br />The date range includes the start date. Default to the current date if not specified.         |
| @End <br /><br />/ PortalRequestRQ / PortalGetRequest    | The end date of the date range for which the data applies.<br />The date range does not include the end date. Default to the current + 1 date if not specified. |
| @Adults <br /><br />/ PortalRequestRQ / PortalGetRequest | The adults of the request.<br />Defaults to 2 if not specified.                                                                                                 |
| @Kids <br /><br />/ PortalRequestRQ / PortalGetRequest   | The kids of the request.<br />Defaults to 0 if not specified.                                                                                                   |

#### HotelProductListGetRS

**Product list response - Xml sample**

```
<?xml version="1.0" encoding="UTF-8"?>

<PortalRequestRS Version="1.1"TransactionIdentifier="ad44b173-a3ca-4743-a466-91746cfc3262"
        Target="Production" TimeStamp="2016-07-03T10:28:43"xmlns="http://www.opentravel.org/OTA/2003/05">
<hotels>
    <hotel>
        <noOfRooms>4</noOfRooms>
        <noOfAdults>4</noOfAdults>
        <website>http://www.keahotels.is/en/hotels/hotel-nordurland</website>
        <url>https://keahotelnordurland.book-onlinenow.net</url>
        <imageReference>https://keahotelnordurland.book-onlinenow.net/Webpages/1170/HotelNordurland-47.jpg</imageReference>
        <description>Hotel Nordurland is conveniently located right in the very center of Akureyri, the bustling capital of the North.
        The hotel is in very close vicinity to variety of cafés, restaurants, businesses and shops. Guests can also get a discount at the spa located in the hotel garden.
        The hotel has 41 comfortable rooms all equipped with private facilities, coffee and tea sets, telephone, Satellite TV and radio.
        Akureyri Airport is located just 1.5 miles from Hotel Nordurland.
        Golf course within 3 km
        Skiing area within 6km Christmas garden within 10 km<br /><br />Let us help you making your stay at Akureyri pleasant and memorable.</description>

        <hotelID>1170</hotelID>
        <hotelName>Hotel Nordurland</hotelName>
        <city>Akureyri</city>
        <area>Akureyri</area>
        <address>Geislagata 7, Akureyri, Iceland</address>
        <availability>0</availability>
        <dailyMinPrice>219.00</dailyMinPrice>
        <totalPrice>219.00</totalPrice>
        <totalDiscount>0.00</totalDiscount>
        <roomTypes>
            <roomType>
                <rateID>3630</rateID>
                <roomID>4097</roomID>
                <roomDailyMinPrice>219.00</roomDailyMinTotal>
                <roomTotalPrice>219.00</roomTotalPrice>
                <roomDiscount>0.00</roomDiscount>
                <roomRateDescription>Flexible rate</roomRateDescription>
                <roomTypedescription>Double or Twin Room</roomTypedescription>
                <roomAvailability>0</roomAvailability>
                <roomImageReference>https://keahotelnordurland.book-onlinenow.net/Webpages/1170/doubleroom.jpg</roomImageReference>
                <paymentPolicy>This rate is available only on a non-refundable basis.
                100% of the total amount of your stay will be charged at the time of the booking.
                All rates are NET (non-commission-able) and include tax and service charges.</paymentPolicy>
                <roomCancellationPolicy>If you cancel this reservation upto 24 hours (until: [until]) before date of arrival no fees or penalties will be charged.
                Cancellations received after this time and no-shows will be billed one nights charge plus applicable taxes.
                No-shows will be charged to the Company or Credit Card guaranteeing the reservation.
                In the case that the guest cannot arrive to the hotel (ie: due to force majeure, flight cancellation), the client is still liable to inform the hotel in order to avoid a no show charge.</roomCancellationPolicy>
            </roomType>
        </roomTypes>
    </hotel>
</hotels>
</PortalRequestRS>

```

| **HotelProductListGetRS**                                                                   |                                                                                              |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Element/@Attribute <br /><br />Parent XPath**                                             | **Description**                                                                              |
| @TimeStamp <br /><br />/ PortalRequestRS                                                    | Time of the transaction in xml schema date-time format.                                      |
| @Version <br /><br />/ PortalRequestRS                                                      | For this version of the specification set to “1.1”.                                          |
| Success <br /><br />/ PortalRequestRS                                                       | If included, this element will indicate that the request message was successfully processed. |
| Hotels <br /><br />/ PortalRequestRS / Hotels                                               | Contains the hotels.                                                                         |
| Hotel <br /><br />/ PortalRequestRS / Hotels / Hotel                                        | Contains the hotel information.                                                              |
| noOfRooms <br /><br />/ PortalRequestRS / Hotels / Hotel                                    | Number of rooms in the hotel.                                                                |
| noOfAdults <br /><br />/ PortalRequestRS / Hotels / Hotel                                   | Maximum room Occupancy.                                                                      |
| Website <br /><br />/ PortalRequestRS / Hotels / Hotel                                      | Hotel website.                                                                               |
| url / PortalRequestRS / Hotels / Hotel                                                      | BON url.                                                                                     |
| imageReference <br /><br />/ PortalRequestRS / Hotels / Hotel                               | BON image reference.                                                                         |
| Description <br /><br />/ PortalRequestRS / Hotels / Hotel                                  | BON description (html).                                                                      |
| hotelID <br /><br />/ PortalRequestRS / Hotels / Hotel                                      | BON unique hotel ID.                                                                         |
| hotelName <br /><br />/ PortalRequestRS / Hotels / Hotel                                    | BON hotel name.                                                                              |
| City <br /><br />/ PortalRequestRS / Hotels / Hotel                                         | City                                                                                         |
| Area <br /><br />/ PortalRequestRS / Hotels / Hotel                                         | Area                                                                                         |
| Address <br /><br />/ PortalRequestRS / Hotels / Hotel                                      | Address                                                                                      |
| Availability <br /><br />/ PortalRequestRS / Hotels / Hotel                                 | Availability                                                                                 |
| dailyMinPrice <br /><br />/ PortalRequestRS / Hotels / Hotel                                | Daily Min Price (discount is taken into account)                                             |
| totalPrice <br /><br />/ PortalRequestRS / Hotels / Hotel                                   | Total Price for the request period Price (discount is taken into account)                    |
| totalDiscount <br /><br />/ PortalRequestRS / Hotels / Hotel                                | Total Discount for the requested period.                                                     |
| roomTypes <br /><br />/ PortalRequestRS / Hotels / Hotel                                    | Room types element.                                                                          |
| Room Type <br /><br />/ PortalRequestRS / Hotels / Hotel/ roomTypes                         | Contains room type information.                                                              |
| / PortalRequestRS /Hotels/Hotel/ roomTypes/roomType                                         |                                                                                              |
| rateID <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType                | Unique rate ID.                                                                              |
| roomID <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType                | Unique room ID.                                                                              |
| roomDailyMinPrice <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType     | Room minimum daily price.                                                                    |
| roomTotalPrice <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType        | Room total price for the date range.                                                         |
| roomDiscount <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType          | Room price discount.                                                                         |
| roomRateDescription <br /><br />/ PortalRequestRS / Hotels / Hotel/ roomTypes / roomType    | Rate description (html).                                                                     |
| roomTypedescription <br /><br />/ PortalRequestRS / Hotels / Hotel/ roomTypes / roomType    | Room description (html).                                                                     |
| roomAvailability <br /><br />/ PortalRequestRS / Hotels / Hotel / roomTypes / roomType      | Room Availabilty                                                                             |
| roomImageReference <br /><br />/ PortalRequestRS / Hotels /Hotel / roomTypes / roomType     | Room Image Reference                                                                         |
| paymentPolicy <br /><br />/ PortalRequestRS / Hotels /Hotel / roomTypes / roomType          | Rate Payment policy                                                                          |
| roomCancellationPolicy <br /><br />/ PortalRequestRS / Hotels /Hotel / roomTypes / roomType | Cancellation Policy                                                                          |

## Code Lists

### Error Types

| **Error type** | **Description**        |
| -------------- | ---------------------- |
| 1              | Unknown                |
| 2              | No implementation      |
| 3              | Biz rule               |
| 4              | Authentication         |
| 10             | Required field missing |

### Error Codes

| **Error code** | **Description**        |
| -------------- | ---------------------- |
| 321            | Required field missing |
| 136            | Invalid Start Date     |
| 135            | Invalid End Date       |
| 497            | Authorization error    |
| 392            | Invalid hotel code     |
