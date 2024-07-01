# Interface Specifications - ARI Service

## Technical Overview

### Communication Protocols

The exchange of information between _BNOWConnect_ and PMS happens
through HTTP POST method for the requested operation. Each operation is
called by posting the appropriate request Xml data for the corresponding
operation. _BNOWConnect will_ return the desired response Xml data to
the particular operation. HTTP content type "text/xml" would be used for
request and response.

### Authentication

Authentication and authorization are both implemented using hotel level
credentials. See Hotel Authorization below for details.

### Hotel Authorization

_BnοwConnect_ provides for the authorization of the requests on a per
hotel basis. This is made possible by including a set of credentials in
all _BnοwConnect request_ messages. This allows the _BnοwConnect_ to
authorize the use of the service with respect to a hotel.

## Operations

### Products List

This operation allows PMS - CRS _to_ request from bookonlinenow to
return a list of products available. **A product is defined as the
combination of a room type and a rate catalogue.**

#### HotelProductListGetRQ

**Product list request - Xml sample**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelProductListGetRQ xmlns="http://www.opentravel.org/OTA/2013/05"
            TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">
    <Authentication UserName="bown" Password="test" />
    <HotelProductListRequest HotelCode="demo" />
</HotelProductListGetRQ>

```

| HotelProductListGetRQ                                                    |                                                                                                                                                            |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element / @Attribute <br /><br />Parent XPath**                        | **Description**                                                                                                                                            |
| @TimeStamp <br /><br />/ HotelProductListGetRQ                           | Time of the transaction in xml schema date-time format.                                                                                                    |
| @Version <br /><br />/ HotelProductListGetRQ                             | For this version of the specification set to “1.1”.                                                                                                        |
| Authentication <br /><br />/ HotelProductListGetRQ                       | All BNOWConnect request messages would include an Authentication element.<br />A set of UserName and Password are passed.                                  |
| @UserName <br /><br />/ HotelProductListGetRQ / Authentication           | The UserName part of the credentials.<br />UserName and Password combination (credentials) required to authorize the request are sent in these attributes. |
| @Password <br /><br />/ HotelProductListGetRQ / Authentication           | The Password part of the credential.                                                                                                                       |
| HotelProductListRequest <br /><br />/ HotelProductListGetRQ              | Contains the request element.<br />Only one request element will be sent in one message.                                                                   |
| @HotelCode <br /><br />/ HotelProductListRequest / HotelProductListGetRQ | Hotel code of the property provided by BNOW.                                                                                                               |

#### HotelProductListGetRS

**Product list response - Xml sample**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelPropertyListGetRSxmlns="http://www.opentravel.org/OTA/2013/05"
        TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">

    <Success/>
    <HotelProducts HotelCode="demo ">
        <HotelProduct>
            <ProductReference InvTypeCode="Room_1414" RatePlanCode="Rate_461"/>
            <RateTypeName>BAR</RateTypeName>
            <RoomTypeName>STD</RoomTypeName>
        </HotelProduct>
        <HotelProduct>
            <ProductReference InvTypeCode="Room_1416" RatePlanCode="Rate_461"/>
            <RateTypeName>BAR</RateTypeName>
            <RoomTypeName>DBL</RoomTypeName>
        </HotelProduct>
    </HotelProducts>
</HotelPropertyListGetRS>

```

| HotelProductListGetRS                                                                               |                                                                                                                     |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Element/@Attribute <br /><br />Parent XPath**                                                     | **Description**                                                                                                     |
| @TimeStamp <br /><br />/ HotelProductListGetRS                                                      | Time of the transaction in xml schema date-time format.                                                             |
| @Version <br /><br />/ HotelProductListGetRS                                                        | For this version of the specification set to “1.1”.                                                                 |
| Success <br /><br />/ HotelProductListGetRS                                                         | If included, this element will indicate that the request message was successfully processed.                        |
| HotelProducts <br /><br />/ HotelProductListGetRS                                                   | Contains the hotel product elements.                                                                                |
| @HotelCode <br /><br />/ HotelProductListGetRS / HotelProducts                                      | Hotel code of the property provided by BNOW.                                                                        |
| HotelProduct <br /><br />/ HotelProductListGetRS / HotelProducts                                    | Contains the hotel product.                                                                                         |
| ProductReference <br /><br />/ HotelProductListGetRS / HotelProducts / HotelProduct                 | This element contains the part of the hotel product that is used across requests and uniquely identifies a product. |
| @InvTypeCode <br /><br />/ HotelProductListGetRS / HotelProducts / HotelProduct / ProductReference  | The room type code.<br />This is assigned by BNOW.                                                                  |
| @RatePlanCode <br /><br />/ HotelProductListGetRS / HotelProducts / HotelProduct / ProductReference | The rate type code.<br />This is assigned by BNOW.                                                                  |
| RoomTypeName <br /><br />/ HotelProductListGetRS / HotelProducts / HotelProduct                     | The name of the room type.<br />This is assigned by BNOW.                                                           |
| RateTypeName <br /><br />/ HotelProductListGetRS / HotelProducts / HotelProduct                     | The name of the rate type or rate plan.<br />This is assigned by BNOW.                                              |

### Get

This operation allows PMS to query the BNOW system for the existing
information for a set of products for a date range.

#### HotelGetRQ

PMS would request the currently loaded information from BNOW using this
message.

**Get request- Xml sample**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelGetRQ xmlns="http://www.opentravel.org/OTA/2013/05"
        TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">

    <Authentication UserName="test" Password="test" />
    <HotelGetRequests HotelCode="demohotel" >
        <HotelGetRequest>
            <ProductReference InvTypeCode="SIG_112" RatePlanCode="STD_120"></ProductReference>
            <ApplicationControl Start="2014-12-02" End="2014-12-10"/>
        </HotelGetRequest>
    </HotelGetRequests>
</HotelGetRQ>

```

| HoteGetRQ                                                                                      |                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element/@Attribute <br /><br />Parent XPath**                                                | **Description**                                                                                                                                            |
| @TimeStamp <br /><br />/ HotelGetRQ                                                            | Time of the transaction in xml schema date-time format.                                                                                                    |
| @Version <br /><br />/ HotelGetRQ                                                              | For this version of the specification set to “1.1”.                                                                                                        |
| Authentication<br /><br />/ HotelGetRQ                                                         | All BNOWConnect request messages would include an Authentication element.<br />A set of UserName and Password are passed.                                  |
| @UserName <br /><br />/ HotelGetRQ / Authentication                                            | The UserName part of the credentials.<br />UserName and Password combination (credentials) required to authorize the request are sent in these attributes. |
| @Password <br /><br />/ HotelGetRQ / Authentication                                            | The Password part of the credential.                                                                                                                       |
| HotelGetRequests <br /><br />/ HotelGetRQ                                                      | Container element for fetch requests for a given hotel.<br />For this version of the specification, only one HotelGetRequest would be sent.                |
| @HotelCode <br /><br />/ HotelGetRQ / HotelGetRequests                                         | Hotel code of the property provided by BNOW.                                                                                                               |
| HotelGetRequest <br /><br />/ HotelGetRQ/HotelGetRequests                                      | Contains a fetch request for a given hotel.<br />For this version of the specification, only one HotelGetRequest would be sent.                            |
| ProductReference <br /><br />/ HotelGetRQ / HotelGetRequests / HotelGetRequest                 | Identifies the product for which the BNOW is requested.                                                                                                    |
| @InvTypeCode<br /><br />/ HotelGetRQ / HotelGetRequests / HotelGetRequest / ProductReference   | Identifies the room type for which the BNOW information requested.                                                                                         |
| @RatePlanCode <br /><br />/ HotelGetRQ / HotelGetRequests / HotelGetRequest / ProductReference | Identifies the rate type for which all information is requested.                                                                                           |
| ApplicationControl <br /><br />/ HotelGetRQ / HotelGetRequests / HotelGetRequest               | Identifies the date range.                                                                                                                                 |
| @Start <br /><br />/ HotelGetRQ / HotelGetRequests / HotelGetRequest / ApplicationControl      | The start date of the date range for which the data applies.<br />The date range includes the start date.                                                  |
| @End / HotelGetRQ / HotelGetRequests / HotelGetRequest / ApplicationControl                    | The end date of the date range for which the data applies.<br />The date range includes the end date.                                                      |

#### HotelGetRS

BNOW will respond to this request by sending a HotelGetRS message.
Response messages indicating failures contain at least one error
element. It is possible to return more than one error element. After
validating the hotel code and the product, the BNOW will return a
HotelGetRS message with a single Success element and return the
information for the products for the hotel in the request. The response
message includes one `<HotelDataSet>` node. Inside this element, one
HotelData node will be included for EACH date in the date range. In case
there is no data loaded for any given date, the HotelData node will be
replaced with a HotelStatus node. As mentioned earlier, BNOW identifies
a product by a room type and a rate type.

**Get response indicating success**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelGetRS xmlns="http://www.opentravel.org/OTA/2013/05"
        TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">
<Success />
    <HotelDataSet HotelCode =" demohotel ">
        <HotelData ItemIdentifier="1">
            <ProductReference InvTypeCode="SIG_11" RatePlanCode="STD_4"></ProductReference>
            <ApplicationControl Start="2014-12-02" End="2014-12-02"Sun="true"
                    Mon="true" Tue="true" Wed="true" Thu="true"Fri="true" Sat="true" />
            <RateAmounts Currency="EUR">
                <Base OccupancyCode="SR" Amount="220.00"></Base>
                <Additional OccupancyCode="AC" Amount="110.00"></Additional>
            </RateAmounts>
            <Availability Master="Open"/>
            <BookingLimit>
                <TransientAllotment Allotment="7" />
            </BookingLimit>
            <BookingRules>
            </BookingRules>
        </HotelData>
        <HotelStatus>
        <ProductReference InvTypeCode="SIG_11" RatePlanCode="STD_4" />
        <ApplicationControl Start="2014-12-03" End="2014-12-03" />
        <Status Code="842">No inventory loaded for the requested dates</Status>
        </HotelStatus>
    </HotelDataSet>
</HotelGetRS>

```

**Get response indicating failure**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelGetRS xmlns="http://www.opentravel.org/OTA/2013/05"
        TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">
    <Errors>
        <Error Type="3" Code="426">Invalid room code ROOM_110
        </Error>
    </Errors>
</HotelGetRS>

```

| HotelGetRS                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| **Element/@Attribute <br /><br />Parent XPath**                                               | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| @TimeStamp <br /><br />/ HotelGetRS                                                           | Time of the transaction in xml schema date-time format.                                                                                                                                                                                                                                                                                                                                                                                        |     |
| @Version <br /><br />/ HotelGetRS                                                             | For this version of the specification set to “1.1”.                                                                                                                                                                                                                                                                                                                                                                                            |     |
| Success <br /><br />/ HotelGetRS                                                              | If included, this element will indicate that the request message was successfully processed.<br />If this element is returned, a Products element must also be returned.<br />Either a Success element or an Errors element is required in every response.                                                                                                                                                                                     |     |
| Errors <br /><br />/ HotelGetRS                                                               | If included, this element will indicate that the request message could not be processed.<br />Either a Success element or an Errors element is required in every response.                                                                                                                                                                                                                                                                     |     |
| Error <br /><br />/ HotelGetRS / Errors                                                       | Description of cause for a fatal problem during request message processing.<br />If an Errors element is included, at least one Error element is required.                                                                                                                                                                                                                                                                                     |     |
| @Type <br /><br />/ HotelGetRS / Errors / Error                                               | This is an enumeration of error types.                                                                                                                                                                                                                                                                                                                                                                                                         |     |
| @Code <br /><br />/ HotelGetRS / Errors / Error                                               | This is an enumeration of error codes.                                                                                                                                                                                                                                                                                                                                                                                                         |     |
| HotelDataSet <br /><br />/ HotelGetRS / HotelDataSet                                          | This element contains bookonlinenow products information.                                                                                                                                                                                                                                                                                                                                                                                      |     |
| @HotelCode <br /><br />/ HotelGetRS / HotelDataSet                                            | Hotel code of the property provided by BNOW.                                                                                                                                                                                                                                                                                                                                                                                                   |     |
| HotelData <br /><br />/ HotelGetRS / HotelDataSet                                             | The element is used to transfer BNOW information for a product for a date range (with day of week applicability).                                                                                                                                                                                                                                                                                                                              |     |
| @ItemIdentifier <br /><br />/ HotelGetRS / HotelDataSet / HotelData                           | A number identifying a HotelData element in a HotelDataSet collection.<br />Useful for correlating request and response message items.                                                                                                                                                                                                                                                                                                         |     |
| ProductReference <br /><br />/ HotelGetRS / HotelDataSet / HotelData                          | Identifies the BNOW product.                                                                                                                                                                                                                                                                                                                                                                                                                   |     |
| @InvTypeCode <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ProductReference           | Identifies the BNOW room type.                                                                                                                                                                                                                                                                                                                                                                                                                 |     |
| @RatePlanCode <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ProductReference          | Identifies the BNOW rate.                                                                                                                                                                                                                                                                                                                                                                                                                      |     |
| ApplicationControl <br /><br />/ HotelGetRS / HotelDataSet / HotelData                        | Identifies the date range that the Data applies to.                                                                                                                                                                                                                                                                                                                                                                                            |     |
| @Start <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl               | The start date of the date range for which the data applies.<br />The date range includes the start date.                                                                                                                                                                                                                                                                                                                                      |     |
| @End <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | The end date of the date range for which the data applies.<br />The date range includes the end date.                                                                                                                                                                                                                                                                                                                                          |     |
| @Sun <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies to Sundays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                   |     |
| @Mon <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies Mondays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                      |     |
| @Tue <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies Tuesdays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                     |     |
| @Wed <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies to Wednesdays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                |     |
| @Thu <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies to Thursdays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                 |     |
| @Fri <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies to Fridays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                   |     |
| @Sat <br /><br />/ HotelGetRS / HotelDataSet / HotelData / ApplicationControl                 | Indicates whether the data applies to Saturdays.<br />Boolean.                                                                                                                                                                                                                                                                                                                                                                                 |     |
| RateAmounts <br /><br />/ HotelGetRS / HotelDataSet / HotelData                               | This element contains the rates and meal plan information.                                                                                                                                                                                                                                                                                                                                                                                     |     |
| @Currency <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts                   | The currency of the rates.<br />This must be the primary currency of the hotel. Three letter ISO code.                                                                                                                                                                                                                                                                                                                                         |     |
| @Base <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts                       | The base rates. The rates could be expressed as “Room” rates or occupancy based prices (OBP).<br />Single Adult, Two Adults etc. are commonly used base occupancies.                                                                                                                                                                                                                                                                           |     |
| @OccupancyCode <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts / Base       | The code of the base occupancy.<br />See the Code Lists section for supported values. Code list Occupancy Codes.                                                                                                                                                                                                                                                                                                                               |     |
| @Amount <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts / Base              | The rate amount for this occupancy.                                                                                                                                                                                                                                                                                                                                                                                                            |     |
| @Additional <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts                 | Rate amounts for additional occupancies.<br />Extra Adult, Extra Child etc. are commonly used additional occupancies.                                                                                                                                                                                                                                                                                                                          |     |
| @OccupancyCode <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts / Additional | The code of the additional occupancy.<br />See the Code Lists section for supported values. Code list Occupancy Codes.                                                                                                                                                                                                                                                                                                                         |     |
| @Amount <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts / Additional        | The rate amount for this occupancy.                                                                                                                                                                                                                                                                                                                                                                                                            |     |
| @Discount <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts                   | This element contains discount Information.<br />This is commonly used to express the discount off the regular rate.                                                                                                                                                                                                                                                                                                                           |     |
| @Amount <br /><br />/ HotelGetRS / HotelDataSet / HotelData / RateAmounts / Discount          | The discount as a fixed amount.                                                                                                                                                                                                                                                                                                                                                                                                                |     |
| Availability <br /><br />/ HotelGetRS / HotelDataSet / HotelData                              | This element provides information regarding the availability.                                                                                                                                                                                                                                                                                                                                                                                  |     |
| @Master <br /><br />/ HotelGetRS / HotelDataSet / HotelData / Availability                    | This is the master availability.<br />If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element. BNOW will retain the information when the master availability is changed from ‘Open’ to ‘Closed’, so that when the availability becomes ‘Open’ once again, the previously set values of price and other restrictions could be restored. |     |
| @Arrival <br /><br />/ HotelGetRS / HotelDataSet / HotelData / Availability                   | This is the arrival availability. (Open,Closed) <br />If arrival availability is ‘Closed’, the product is not bookable for reservation with this arrival date.<br />Default value is Open, if a Closed request is send then it will remain Closed for arrival until an Open request is send.                                                                                                                                                   |     |
| @Departure <br /><br />/ HotelGetRS / HotelDataSet / HotelData / Availability                 | This is the departure availability. (Open,Closed)<br />If departure availability is ‘Closed’, the product is not bookable for reservation with this departure date. Default value is Open, if a Closed request is send then it will remain Closed for departure until an Open request is send.                                                                                                                                                 |     |
| BookingLimit <br /><br />/ HotelGetRS / HotelDataSet / HotelData                              | This element contains information on Allocation of inventory to the BNOW.                                                                                                                                                                                                                                                                                                                                                                      |     |
| TransientAllotment <br /><br />/ HotelGetRS / HotelDataSet / HotelData / BookingLimit         | This element is used to transfer information on any dynamically allocated hotel.                                                                                                                                                                                                                                                                                                                                                               |     |
| BookingRules <br /><br />/ HotelGetRS / HotelDataSet / HotelData / HotelData                  | This element contains booking rules.<br />Booking rules are additional restrictions placed by the.<br />It is assumed that the minimum possible length of stay is 1 and that a MinLoS of 0 is functionally equivalent to MinLoS of 1.                                                                                                                                                                                                          |     |
| MinLoSThrough <br /><br />/ HotelGetRS / HotelDataSet / HotelData / BookingRules              | This element indicates the minimum number of nights for which a stay must be booked to obtain this rate.                                                                                                                                                                                                                                                                                                                                       |     |
| HotelStatus <br /><br />/ HotelGetRS / HotelDataSet / HotelStatus                             | This element is used to return status information where data is not available or cannot be returned.                                                                                                                                                                                                                                                                                                                                           |     |
| ApplicationControl <br /><br />/ HotelGetRS / HotelDataSet / HotelStatus                      | The date range for which the status is sent is specified in this element.<br />Please refer to the description of this element under HotelData above.                                                                                                                                                                                                                                                                                          |     |
| Status <br /><br />/ HotelGetRS / HotelDataSet / HotelStatus                                  | The status of data.<br />This can be used to return an error if the information is not available.                                                                                                                                                                                                                                                                                                                                              |     |
| @Code <br /><br />/ HotelGetRS / HotelDataSet / HotelStatus / Status                          | This is an enumeration of error codes.<br />See Code Lists below for supported values. Code list Error Codes.                                                                                                                                                                                                                                                                                                                                  |     |

### Update

This operation allows PMS _to_ update bookonlinenow availability and
rates information for a single product for a date range. **A product is
defined as the combination of a room type and a rate catalogue.**

#### HotelUpdateRQ

PMS would request BookOnlineNow to update the availability and rates
information using this message.

**Update request - Xml sample**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelUpdateRQ xmlns="http://www.opentravel.org/OTA/2013/05"
        TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">

    <Authentication UserName="bown" Password="test" />
    <HotelUpdateRequest HotelCode="demohotel" UpdateType="Partial" >
        <HotelData ItemIdentifier="1">
            <ProductReference InvTypeCode="SIG_112" RatePlanCode="STD_120"></ProductReference>
            <ApplicationControl Start="2013-12-02" End="2013-12-02"Sun="true" Mon="true" Tue="true" Wed="true" Thu="true"Fri="true" Sat="true" />
            <RateAmounts Currency="EUR">
            <Base OccupancyCode="SR" Amount="220.00"></Base>
            <Additional OccupancyCode="AC" Amount="110.00"></Additional>
            </RateAmounts>
            <Availability Master="Open"/>
            <BookingLimit>
                <TransientAllotment Allotment="7" />
            </BookingLimit>
            <BookingRules>
                <MinLoSThrough>3</MinLoSThrough>
            </BookingRules>
        </HotelData>
        <HotelData ItemIdentifier="2">
            <ProductReference InvTypeCode="SIG_112" RatePlanCode="STD_120"></ProductReference>
            <ApplicationControl Start="2013-12-03" End="2013-12-03"Sun="true" Mon="true" Tue="true" Wed="true" Thu="true"Fri="true" Sat="true" />
            <RateAmounts Currency="EUR">
            <Base OccupancyCode="SR" Amount="200.00"></Base>
            <Additional OccupancyCode="AA" Amount="100.00"></Additional>
            </RateAmounts>
            <Availability Master="Closed"/>
            <BookingLimit>
            </BookingLimit>
            <BookingRules>
            </BookingRules>
            </HotelData>
    </HotelUpdateRequest>
</HotelUpdateRQ>

```

| HotelUpdateRQ                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element / @Attribute <br /><br />Parent XPath**                                                      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| @TimeStamp <br /><br />/ HotelUpdateRQ                                                                 | Time of the transaction in xml schema date-time format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| @Version <br /><br />/ HotelUpdateRQ                                                                   | For this version of the specification set to “1.1”.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Authentication <br /><br />/ HotelUpdateRQ                                                             | All BNOWConnect request messages would include an Authentication element.<br />A set of UserName and Password are passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| @UserName <br /><br />/ HotelUpdateRQ / Authentication                                                 | The UserName part of the credentials.<br />UserName and Password combination (credentials) required to authorize the request are sent in these attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| @Password <br /><br />/ HotelUpdateRQ/ Authentication                                                  | The Password part of the credential.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HotelUpdateRequest<br /><br />/ HotelUpdateRQ                                                          | Contains rate changes for a given hotel.<br />Only the updates of a single product are sent in one request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| @HotelCode <br /><br />/ HotelUpdateRQ / HotelUpdateRequest                                            | Hotel code of the property provided by BNOW.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| @UpdateType <br /><br />/ HotelUpdateRQ/ HotelUpdateRequest                                            | Specifies the type of update. Can be “Complete” or “Partial”.<br /><br />If update type is “Complete”, ΒΝΟW will remove all old values and populate the hotel information with the values specified by the HotelData elements. If any element or attribute is missing, they are assumed to have their default values. For example if MinLoSOnArrival is not passed it is set to 1.<br /><br />If update type is “Partial”, ΒΝΟW will overwrite only the values which are specifically passed in the update and retain previously set values for other information. If any element or attribute is missing, they are assumed to retain their previously set values. For example, if Availability information is not passed in the update ΒΝΟW will continue to apply the previously set values of Availability for the dates specified. |
| @HotelData <br /><br />/ HotelUpdateRQ / HotelUpdateRequest                                            | The element is used to transfer BNOW information for a product for a date range (with day of week applicability).<br />If different set of values needs to be specified for a single date range based on different days of week applicability, separate HotelData elements must be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| @ItemIdentifier<br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                            | A number identifying a HotelData element in a HotelDataSet collection.<br />Useful for correlating request and response message items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ProductReference<br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                           | Identifies the product for which the BNOW information is given.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| @InvTypeCode <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ProductReference           | Identifies the room type for which the BNOW information is given.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| @RatePlanCode <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ProductReference          | Identifies the rate type for which all information is given.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ApplicationControl <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                        | Identifies the date range that the data applies to.<br />If any one of the day of week attributes are passed, they all must be passed.<br />If no day of week attribute is passed, it is assumed that the data applies to all dates within the start date and end dates.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| @Start <br /><br />HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | The start date of the date range for which the data applies.<br />The date range includes the start date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| @End <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | The end date of the date range for which the data applies.<br />The date range includes the end date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| @Sun <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies to Sundays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| @Mon <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies Mondays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| @Tue <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies Tuesdays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| @Wed <br /><br />/ HotelUpdateRQ / HotelUpdateRequest/ HotelData / ApplicationControl                  | Indicates whether the data applies to Wednesdays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| @Thu <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies to Thursdays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| @Fri <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies to Fridays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| @Sat <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / ApplicationControl                 | Indicates whether the data applies to Saturdays. Boolean.<br />If any one of the day of week attributes are passed, they all must be passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RateAmounts <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                               | This element contains the rates and meal plan information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| @Currency <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts                   | The currency of the rates.<br />This must be the primary currency of the hotel. Three letter ISO code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| @Base <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts                       | The base rates. The rates could be expressed as “Room” rates or occupancy based prices (OBP). Single Adult, Two Adults etc. are commonly used base occupancies.<br />If the UpdateType is “Partial”, BNOW will only update the occupancies which are passed and must retain the old prices for the other occupancies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| @OccupancyCode <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts / Base       | The code of the base occupancy.<br />See the Code Lists section for supported values. Code list Occupancy Codes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| @Amount <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts / Base              | The rate amount for this occupancy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Additional <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts                  | Rate amounts for additional occupancies. Extra Adult, Extra Child etc. are commonly used additional occupancies.<br />If the UpdateType is “Partial”, BNOW will only update the occupancies which are passed and retain the old prices for the other occupancies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| @OccupancyCode <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts / Additional | The code of the additional occupancy.<br />See the Code Lists section for supported values. Code list Occupancy Codes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| @Amount <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts / Additional        | The rate amount for this occupancy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Discount <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts                    | This element contains discount Information.<br />This is commonly used to express the discount off the regular rate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| @Amount <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / RateAmounts / Discount          | The discount as a fixed amount.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Availability <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                              | This element provides information regarding the availability.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| @Master <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / Availability                    | This is the master availability.<br />If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element.<br />BNOW will retain the information when the master availability is changed from ‘Open’ to ‘Closed’, so that when the availability becomes ‘Open’ once again, the previously set values of price and other restrictions could be restored.                                                                                                                                                                                                                                                                                                                                                                                    |
| @Arrival <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / Availability                   | This is the arrival availability. (Open,Closed)<br />If arrival availability is ‘Closed’, the product is not bookable for reservation with this arrival date.<br />Default value is Open, if a Closed request is send then it will remain Closed for arrival until an Open request is send.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| @Departure <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / Availability                 | This is the departure availability. (Open,Closed)<br />If departure availability is ‘Closed’, the product is not bookable for reservation with this departure date.<br />Default value is Open, if a Closed request is sent then it will remain Closed for departure until an Open request is send.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| @BookingLimit <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                             | This element contains information on Allocation of inventory to the BNOW.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| TransientAllotment <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / BookingLimit         | This element is used to transfer information on any dynamically allocated hotel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| BookingRules <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData                              | This element contains booking rules. Booking rules are additional restrictions placed by the hotel on bookings of this product.<br />If the Update Type is “Partial”, the BNOW will only update the values of the restrictions that are passed in the update.<br />It is assumed that the minimum possible length of stay is 1 and that a MinLoS of 0 is functionally equivalent to MinLoS of 1.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| @MinLoSThrough <br /><br />/ HotelUpdateRQ / HotelUpdateRequest / HotelData / BookingRules             | This element indicates the minimum number of nights for which a stay must be booked to obtain this rate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### HotelUpdateRS

BNOW will respond to this request by sending a HotelUpdateRS message.
Response messages indicating failures must contain at least one error
element. It is possible to return more than one error element. If any of
the requested updates cannot be completed successfully, BNOW will ensure
that no update is made to information at all.

After updating the information, BNOW will return a Hotel UpdateRS
message with a single Success element.

**Update response indicating success**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelUpdateRS xmlns="http://www.opentravel.org/OTA/2013/05"
     TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">
<Success/>
</HotelUpdateRS>

```

**Update response indicating failure**

```
<?xml version="1.0" encoding="utf-8" ?>

<HotelUpdateRS xmlns="http://www.opentravel.org/OTA/2013/05"
    TimeStamp="2013-05-01T06:39:09" Target="Production"Version="1.1">
    <Errors>
        <Error Type="3" Code="426">Invalid room code ROOM_110
        </Error>
    </Errors>
</HotelUpdateRS>

```

| HotelUpdateRS                                      |                                                                                                                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element/@Attribute <br /><br />Parent XPath**    | **Description**                                                                                                                                                       |
| @TimeStamp <br /><br />/ HotelUpdateRS             | Time of the transaction in xml schema date-time format.                                                                                                               |
| @Version <br /><br />/ HotelUpdateRS               | For this version of the specification set to “1.1”.                                                                                                                   |
| Success <br /><br />/ HotelUpdateRS                | If included, this element will indicate that the request message was successfully processed.                                                                          |
| Errors <br /><br />/ HotelUpdateRS                 | If included, this element will indicate that the request message could not be processed. Either a Success element or an Errors element is required in every response. |
| Error <br /><br />/ HotelUpdateRQ / Errors         | Description of cause for a fatal problem during request message processing.<br />If an Errors element is included, at least one Error element is required.            |
| @Type <br /><br />/ HotelUpdateRQ / Errors / Error | This is an enumeration of error types.                                                                                                                                |
| @Code <br /><br />/ HotelUpdateRQ / Errors / Error | This is an enumeration of error codes.                                                                                                                                |

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

| **Error code** | **Description**                                                                  |
| -------------- | -------------------------------------------------------------------------------- |
| 321            | Required field missing                                                           |
| 136            | Invalid Start Date                                                               |
| 135            | Invalid End Date                                                                 |
| 320            | Unable to process - can not be set MinLosThrough greater than 1 when Avalable=No |
| 143            | Price incorrect for room/unit                                                    |
| 144            | Unable to process - Room Rate and OPB can not be set at the same time            |
| 497            | Authorization error                                                              |
| 392            | Invalid hotel code                                                               |
| 425            | No match found for product                                                       |
| 426            | Invalid room type code                                                           |
| 249            | Invalid rate type code                                                           |

### Occupancy Codes

| **Occupancy** | **Type**   | **Description**                                                                       |
| ------------- | ---------- | ------------------------------------------------------------------------------------- |
| A1            | Base       | Single Adult                                                                          |
| A2            | Base       | Two Adults                                                                            |
| A3            | Base       | Three Adults                                                                          |
| A4            | Base       | Four Adults                                                                           |
| A5            | Base       | Five Adults                                                                           |
| A6            | Base       | Six Adults                                                                            |
| A7            | Base       | Seven Adults                                                                          |
| A8            | Base       | Eight Adults                                                                          |
| A9            | Base       | Nine Adults                                                                           |
| A10           | Base       | Ten Adults                                                                            |
| A11           | Base       | Eleven Adults                                                                         |
| A12           | Base       | Twelve Adults                                                                         |
| SR            | Base       | Base Room price.<br />Occupancy based prices are not used, the price is for the room. |
| AC            | Additional | Additional Child                                                                      |
| AA            | Additional | Additional Adult                                                                      |
