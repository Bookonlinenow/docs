# Interface Specifications -- Reservation Service

## Technical Overview

### Communication Protocols

The exchange of information between _BnοwConnect_ and PMS happens
through HTTP POST method for the requested operation. Each operation is
called by posting the appropriate request Xml data for the corresponding
operation. The _BnοwConnect_ should return the desired response Xml data
to the particular operation. HTTP content type "text/xml" would be used
for request and response

### Authentication

Authentication and authorization are both implemented using hotel level
credentials. See Hotel Authorization below for details.

### Hotel Authorization

_BnοwConnect_ provides for the authorization of the requests on a per
hotel basis. This is made possible by including a set of credentials in
all _BnοwConnect_ request messages. This allows the _BnοwConnect_ to
authorize the use of the service with respect to a hotel.

## Operations

### Reservation service

This operation allows PMS to pull reservations from BOOKonlinenow.

#### ReadRQ

**Pull reservation request- Xml sample**

```
<ReadRQ  xmlns="http://www.opentravel.org/OTA/2013/05" 
  TimeStamp="2013-05-01T06:39:09" 
  Target="Production" Version="1.1">
   <ReadRequests>
<Authentication Password="test" UserName="bown"/>
 	<HotelReadRequest HotelCode="demohotel"/>
<!-- GlobalReservation-ReadRequest can be sent, but not both. -->
 <!-- By default the request-type should be the HotelReadRequest element, so that all
 bookings which have changed since last request will be listed in the response.-->
<GlobalReservationReadRequest  HotelCode="demohotel" Start="2013-02-13"
                                                             End="2013-02-18"/>
 <!-- If there are any problems with previous HotelReadRequest at the hotel site or
 some other issue, use of the GlobalReservationReadRequest element is recommended.
 --> 
 
<!-- Υou can add the OnlyNotConfirmed="yes" attribute to both HotelReadRequest and  GlobalReservationReadRequest to get only unconfirmed reservations  check [HotelResNotifRQ](#hotelresnotifrq)-->
  </ReadRequests>
</ReadRQ>

```

#### OTA_ResRetrieveRS

**Reservation response - Xml sample**

```
<?xml version="1.0" encoding="utf-8"?>

<OTA_ResRetrieveRS  xmlns="http://www.opentravel.org/OTA/2003/05"  TimeStamp="2021-07-04T13:13:49" Target="Production" 
                    TransactionIdentifier="68ff7d15-e83e-450b-823c-d520d723a399" Version="1.1">

    <POS xmlns="http://www.opentravel.org/OTA/2003/05">
        <Source>
            <RequestorID Type="13" ID="747" Primary="true"/>
            <BookingChannel Type="7">
                <CompanyName Code="BNOW">BookOnlineNow</CompanyName>
            </BookingChannel>
        </Source>
        </POS>
        <Success/>
        <HotelReservations xmlns="http://www.opentravel.org/OTA/2003/05">
            <HotelReservation CreateDateTime="2021-07-04T15:42:55" LastModifyDateTime="2021-07-04T15:42:55" ResStatus="Commit">
                <POS xmlns="http://www.opentravel.org/OTA/2003/05">
                    <Source>
                        <BookingChannel>
                            <CompanyName Code="Booking.com">Booking.com</CompanyName>
                        </BookingChannel>
                    </Source>
                </POS>
                <RoomStays>
                    <RoomStay>
                        <RoomTypes>
                            <RoomType RoomTypeCode="Room_15393" NumberOfUnits="1" />
                            <RoomDescription Name="Deluxe Double Room" />
                        </RoomTypes>
                        <RatePlans>
                            <Ra RatePlanCode="Rate_22939">
                                <MealsIncluded Breakfast="true" />
                            </Ra                                 tePlan>
                        </RatePlans>
                        <RoomRates>
                            <RoomRate RatePlanCode="Rate_22939" RoomTypeCode="Room_15393" NumberOfUnits="1">
                                <Rates>
                                    <Rate EffectiveDate="2021-08-20" ExpireDate="2021-08-21" UnitMultiplier="1" RateTimeUnit="Day">
                                        <Base AmountAfterTax="126.00" CurrencyCode="" />
                                    </Rate>
                                    <Rate EffectiveDate="2021-08-21" ExpireDate="2021-08-22" UnitMultiplier="1" RateTimeUnit="Day">
                                        <Base AmountAfterTax="126.00" CurrencyCode="" />
                                    </Rate>
                                    <Rate EffectiveDate="2021-08-22" ExpireDate="2021-08-23" UnitMultiplier="1" RateTimeUnit="Day">
                                        <Base AmountAfterTax="126.00" CurrencyCode="" />
                                    </Rate>
                                </Rates>
                            </RoomRate>
                        </RoomRates>
                        <Comments>
                            <Comment>
                                <Text>
                                </Text>
                            </Comment>
                        </Comments>
                        <BasicPropertyInfo HotelCode="test" HotelName="test" />
                        <GuestCounts>
                            <GuestCount AgeQualifyingCode="10" Count="2" />
                        </GuestCounts>
                        <TimeSpan Start="2021-08-20" End="2021-08-23" Duration="P3D" />
                    </RoomStay>
                </RoomStays>
                <ResGuests>
                    <ResGuest AgeQualifyingCode="10" PrimaryIndicator="true">
                        <Profiles>
                            <ProfileInfo>
                                <Profile ProfileType="1">
                                    <Customer>
                                        <PersonName>
                                            <GivenName>test</GivenName>
                                            <Surname>test</Surname>
                                        </PersonName>
                                        <Telephone PhoneTechType="1" PhoneNumber="" DefaultInd="true" FormattedInd="false" />
                                        <Email EmailType="1" DefaultInd="true"></Email>
                                        <Address Type="1">
                                            <AddressLine>test</AddressLine>
                                            <CityName>test</CityName>
                                            <PostalCode>12345</PostalCode>
                                            <CountryName Code="GR"></CountryName>
                                        </Address>
                                        <CompanyInfo />
                                    </Customer>
                                </Profile>
                            </ProfileInfo>
                        </Profiles>
                    </ResGuest>
                </ResGuests>
                <ResGlobalInfo>
                    <TimeSpan Start="2021-08-20" End="2021-08-23" Duration="P3D" />
                    <Guarantee GuaranteeCode="Card Type" GuaranteeType="CC/DC/Voucher">
                        <GuaranteesAccepted>
                            <GuaranteeAccepted>
                                <PaymentCard CardType="" CardCode="" CardNumber="" ExpireDate="">
                                    <CardHolderName>NOT AVAILABLE</CardHolderName>
                                </PaymentCard>
                            </GuaranteeAccepted>
                        </GuaranteesAccepted>
                    </Guarantee>
                    <Total AmountAfterTax="378.00" CurrencyCode="" />
                    <HotelReservationIDs>
                        <HotelReservationID ResID_Type="14" ResID_Value="RES444721R3272" />
                        <UniqueID Type="14" ID="327253" ID_Context="GroupNumber" />
                    </HotelReservationIDs>
                </ResGlobalInfo>
            </HotelReservation>
        </HotelReservations>
</OTA_ResRetieveRS>

```

### Services as separate elements

** This is a confurable feature per property.  **
By default the API is adding all extras (ServicePricingType="Per stay") price at the base rate of the first day, and the board type price (ServicePricingType="Per person per night") at the base rate of each stay. If you need to get the services as a separate element in the response a configuration from our support is required

**With the services configuration active, extra services and board type will be deliver in a separate element and
 
•	Service cost is included in the ResGlobalInfo Total
•	Service cost is not included in the RoomRate Base.
**

```
<Services>
<Service ServiceInventoryCode="388" ServicePricingType="Per stay" Quantity="2" Inclusive="false">
<ServiceDetails>
             <Comments>
               <Comment Name="Fresh Fruits Upon Arrival" />
             </Comments>
             <TimeSpan Start="2025-02-12" End="2025-02-15" />
        </ServiceDetails>
        <Price>
          <Total AmountAfterTax="44.00" CurrencyCode="EUR" />
        </Price>
      </Service>
 </Services>

```


| @Quantity     /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service                                    | The number of   services, also serves as the number of persons when pricing class is per   person per night.                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @Inclusive     /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service                                   | Always false                                                                                                                                                                                                                                |
| @ServiceInventoryCode      /OTA_ResRetrieveRS / HotelReservations / HotelReservation/ Services / Service                        | The UID of   the specific service being reserved see (HotelServiceListGetRQ)                                                                                                                                                                |
| @ServicePricingType   /OTA_ResRetrieveRS / HotelReservations / HotelReservation/Services/ Service                               | An enumerated   type that defines how a service is priced. Values: Per stay, Per person per   night                                                                                                                                         |
| @Name      /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service / ServiceDetails / Comments / Comment | Service   description                                                                                                                                                                                                                       |
| @Start    /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service / ServiceDetails / TimeSpan            | The start date of the date range for which the data applies.                                                                                                                                                                                |
| @End   /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service / ServiceDetails / TimeSpan               | The end date of the date range for which the data applies.                                                                                                                                                                                  |
| @AmountAfterTax    /OTA_ResRetrieveRS / HotelReservations / HotelReservation / Services / Service / Price / Total               | The total price for the service     To get the service daily price     ServicePricingType="Per   person per night" :     AmountAfterTax /number of   nights/ Quantity     ServicePricingType="Per   stay" :     AmountAfterTax /Quantity    |



Τo get ServiceInventoryCodes if needed use **HotelServiceListGetRQ**

 
```
<?xml version="1.0" encoding="utf-8" ?>
<HotelServiceListGetRQ   xmlns="http://www.opentravel.org/OTA/2013/05" 
                                TimeStamp="2024-05-01T06:39:09" Target="Production" Version="1.1">
  <Authentication UserName="test" Password="test" />
  <HotelServiceListRequest HotelCode="testhotel" />
</HotelServiceListGetRQ>

**Response**

<?xml version="1.0" encoding="UTF-8"?>
<HotelServiceListGetRS xmlns="http://www.opentravel.org/OTA/2013/05" Target="Production" TimeStamp="2025-02-07T10:41:07" Version="1.1" TransactionIdentifier="c13b6624-ed47-4dce-b838-5419ea03f201">
    <HotelServices HotelCode="testhotel">
        <Service ServiceInventoryCode="386" ServicePricingType="Per stay">Pay TV</Service>
        <Service ServiceInventoryCode="387" ServicePricingType="Per stay">Taxi Transfer from OR to Airport:</Service>
        <Service ServiceInventoryCode="388" ServicePricingType="Per stay">Fresh Fruits Upon Arrival</Service>
        <Service ServiceInventoryCode="389" ServicePricingType="Per stay">2 persons Special Treatment Pack OFFER</Service>
        <Service ServiceInventoryCode="4092" ServicePricingType="Per stay">Taxi Transfer</Service>
        <Service ServiceInventoryCode="4094" ServicePricingType="Per stay">test</Service>
        <Service ServiceInventoryCode="4095" ServicePricingType="Per stay">test</Service>
        <Service ServiceInventoryCode="5228" ServicePricingType="Per stay">1 day free car rental</Service>
        <Service ServiceInventoryCode="240" ServicePricingType="Per person per night">Half board (dinner)</Service>
        <Service ServiceInventoryCode="525" ServicePricingType="Per person per night">Breakfast</Service>
        <Service ServiceInventoryCode="580" ServicePricingType="Per person per night">FULL BOARD</Service>
        <Service ServiceInventoryCode="2019" ServicePricingType="Per person per night">test</Service>
    </HotelServices>
</HotelServiceListGetRS>

```

















































































































































































































































































































































































































































































































































↧ Expand ↧
 GeneratePut tabs between columnsCompact modeLine breaks as 
Result (click "Generate" to refresh) Copy to clipboard  Preview
| **0TA_ResRetrieveRS**                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                            | Description         |   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|---|
| **Element/@Attribute   Parent XPath**                                                                                                                           | **Description**                                                                                                                                                                                                                                                                                                                            | The reservation ID. |   |
| @TimeStamp   / OTA_ResRetrieveRS                                                                                                                                | Time of the transaction in xml schema date-time format.                                                                                                                                                                                                                                                                                    |                     |   |
| @Version   / OTA_ResRetrieveRS                                                                                                                                  | The schema version. Mandatory.                                                                                                                                                                                                                                                                                                             |                     |   |
| @Target   / OTA_ResRetrieveRS                                                                                                                                   | The environment to target this message to.  For this version of the specification always set to “Production”.                                                                                                                                                                                                                              |                     |   |
| POS   / OTA_ResRetrieveRS                                                                                                                                       | Element for including the channel from which booking is received.                                                                                                                                                                                                                                                                          |                     |   |
| @Source   / OTA_ResRetrieveRS / POS                                                                                                                             | Source details.                                                                                                                                                                                                                                                                                                                            |                     |   |
| @RequestorID   / OTA_ResRetrieveRS / POS / Source                                                                                                               | Identify the origin of the reservation.                                                                                                                                                                                                                                                                                                    |                     |   |
| @Type   / OTA_ResRetrieveRS / POS / Source / RequestorID                                                                                                        | Unique ID type 14 = Reservation                                                                                                                                                                                                                                                                                                            |                     |   |
| @ID   / OTA_ResRetrieveRS / POS / Source / RequestorID                                                                                                          | The ID is the identifier of the user.                                                                                                                                                                                                                                                                                                      |                     |   |
| BookingChannel   / OTA_ResRetrieveRS / POS / Source                                                                                                             | Booking channel details.                                                                                                                                                                                                                                                                                                                   |                     |   |
| CompanyName   / OTA_ResRetrieveRS / POS / Source / BookingChannel                                                                                               | Will contain the name of the channel.                                                                                                                                                                                                                                                                                                      |                     |   |
| @Code   / OTA_ResRetrieveRS / POS / Source / BookingChannel / CompanyName                                                                                       | Bookonlinenow code.                                                                                                                                                                                                                                                                                                                        |                     |   |
| HotelReservations   / OTA_ResRetrieveRS                                                                                                                         | Contains the hotel reservations.                                                                                                                                                                                                                                                                                                           |                     |   |
| HotelReservation   / OTA_ResRetrieveRS / HotelReservations                                                                                                      | Reservation record.  A HotelReservations element may contain many HotelReservation elements.                                                                                                                                                                                                                                               |                     |   |
| @CreateDateTime   / OTA_ResRetrieveRS / HotelReservations / HotelReservation                                                                                    | Time of Booking.                                                                                                                                                                                                                                                                                                                           |                     |   |
| @LastModifyDateTime   / OTA_ResRetrieveRS / HotelReservations / HotelReservation                                                                                | Last updated time of booking.                                                                                                                                                                                                                                                                                                              |                     |   |
| POS   / OTA_ResRetrieveRS / HotelReservation                                                                                                                    | Element for including the channel from which booking is received.  (Optional depends if BOOKONLINE is the only reservation source or there are other reservations sources like booking.com, expedia etc)                                                                                                                                   |                     |   |
| @Source   / OTA_ResRetrieveRS / HotelReservation / POS                                                                                                          | Source details.                                                                                                                                                                                                                                                                                                                            |                     |   |
| BookingChannel   / OTA_ResRetrieveRS / HotelReservation / POS / Source                                                                                          | Booking channel details.                                                                                                                                                                                                                                                                                                                   |                     |   |
| CompanyName   / OTA_ResRetrieveRS / HotelReservation / POS / Source / BookingChannel                                                                            | Will contain the name of the channel.                                                                                                                                                                                                                                                                                                      |                     |   |
| @Code   / OTA_ResRetrieveRS / HotelReservation / POS / Source / BookingChannel / CompanyName                                                                    | Bookonlinenow code.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @ResStatus                                                                                                                                                      | Reservation Status. Will be one of:  Commit Modify Cancel                                                                                                                                                                                                                                                                                  |                     |   |
| RoomStays   / OTA_ResRetrieveRS / HotelReservations / HotelReservation                                                                                          | Contains RoomStay elements.                                                                                                                                                                                                                                                                                                                |                     |   |
| RoomStay   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays                                                                               | Room stay details.                                                                                                                                                                                                                                                                                                                         |                     |   |
| RoomTypes   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                   | Contains RoomType elements.                                                                                                                                                                                                                                                                                                                |                     |   |
| RoomType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomTypes                                                        | RoomType details.                                                                                                                                                                                                                                                                                                                          |                     |   |
| @RoomTypeCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomTypes / RoomType                                        | Room type code of this room stay.                                                                                                                                                                                                                                                                                                          |                     |   |
| @NumberOfUnits   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomTypes / RoomType                                       | This is the number of rooms booked for the room type listed in the RoomTypeCode attribute.                                                                                                                                                                                                                                                 |                     |   |
| RoomDescription   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomTypes / RoomType                                      | Description of the RoomType.                                                                                                                                                                                                                                                                                                               |                     |   |
| @Name   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomTypes / RoomType / RoomDescription                              | Name of the RoomType.                                                                                                                                                                                                                                                                                                                      |                     |   |
| RatePlans   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                   | Contains Rate Plans.                                                                                                                                                                                                                                                                                                                       |                     |   |
| RatePlan   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans                                                        | Rate Plan details.                                                                                                                                                                                                                                                                                                                         |                     |   |
| @RatePlanCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans / RatePlan                                        | The Rate Plan Code.                                                                                                                                                                                                                                                                                                                        |                     |   |
| MealsIncluded   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans / RatePlan                                        | Used to identify meals that are included.                                                                                                                                                                                                                                                                                                  |                     |   |
| @Breakfast   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans / RatePlan / MealsIncluded                           | When true, indicates breakfast is included.                                                                                                                                                                                                                                                                                                |                     |   |
| @Lunch   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans / RatePlan / MealsIncluded                               | When true, indicates lunch is included.                                                                                                                                                                                                                                                                                                    |                     |   |
| @Dinner   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RatePlans / RatePlan / MealsIncluded                              | When true, indicates dinner is included.                                                                                                                                                                                                                                                                                                   |                     |   |
| RoomRates   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                   | Contains RoomRate elements associated with this room stay.                                                                                                                                                                                                                                                                                 |                     |   |
| RoomRate   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates                                                        | Room Rate.                                                                                                                                                                                                                                                                                                                                 |                     |   |
| @RoomTypeCode                                                                                                                                                   | Room type code of this room stay.                                                                                                                                                                                                                                                                                                          |                     |   |
| @NumberOfUnits   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate                                       | This is the number of rooms booked for the room type listed in the RoomTypeCode attribute.                                                                                                                                                                                                                                                 |                     |   |
| @RatePlanCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate                                        | Rate type code of this room stay.                                                                                                                                                                                                                                                                                                          |                     |   |
| Rates   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate                                                | Contains Rate elements.                                                                                                                                                                                                                                                                                                                    |                     |   |
| Rate   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates                                         | Rate for each of the Stay Dates.                                                                                                                                                                                                                                                                                                           |                     |   |
| @EffectiveDate   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates / Rate                        | The EffectiveDate attribute indicates the start of the date range for which this specific rate is applied.  A RoomStay could have different rates applied for different stay dates. EffectiveDate and ExpireDate of each rate element together define for which dates of the stay that rate is applicable.                                 |                     |   |
| @ExpireDate   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates / Rate                           | The ExpireDate attribute indicates the end of the date range for which this specific rate is applied.                                                                                                                                                                                                                                      |                     |   |
| Base   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates / Rate                                  | The base amount charged for the accommodation or service per unit of time.                                                                                                                                                                                                                                                                 |                     |   |
| @CurrencyCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates / Rate / Base                  | Indicates the currency of the rate.                                                                                                                                                                                                                                                                                                        |                     |   |
| @AmountAfterTax   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / RoomRates / RoomRate / Rates / Rate / Base                | Amount including tax of the room stay.                                                                                                                                                                                                                                                                                                     |                     |   |
| GuestCounts   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                 | Contains the guest counts of the room stay.                                                                                                                                                                                                                                                                                                |                     |   |
| GuestCount   / OTA_HotelResNotifRQ / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                | GuestCounts contains the type and number of guests included in the room stay. Will be repeated for each Type of guest.                                                                                                                                                                                                                     |                     |   |
| @AgeQualifyingCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / GuestCounts / GuestCount                               | 10 = Adult 8 = Child                                                                                                                                                                                                                                                                                                                       |                     |   |
| @Count   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / GuestCounts / GuestCount                                           | Guest Count                                                                                                                                                                                                                                                                                                                                |                     |   |
| TimeSpan   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                    | The Time Span which covers the Room Stay. Used to specify a time window range by specifying an earliest and latest date for the start date and end date.                                                                                                                                                                                   |                     |   |
| @Start   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / TimeSpan                                                           | Check-in date for this room stay.                                                                                                                                                                                                                                                                                                          |                     |   |
| @End   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / TimeSpan                                                             | Check-out date for this room stay.                                                                                                                                                                                                                                                                                                         |                     |   |
| Total   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                       | The total amount charged for the Room Stay.                                                                                                                                                                                                                                                                                                |                     |   |
| @CurrencyCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / Total                                                       | Indicates the currency of the total.                                                                                                                                                                                                                                                                                                       |                     |   |
| @AmountAfterTax   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / Total                                                     | Total amount including tax of the room stay.                                                                                                                                                                                                                                                                                               |                     |   |
| BasicPropertyInfo   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                           | Property Information for the reservation.  An abbreviated short summary of hotel descriptive information.                                                                                                                                                                                                                                  |                     |   |
| @HotelCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / BasicPropertyInfo                                              | Hotel Code for this reservation. This code is assigned by BNOW.                                                                                                                                                                                                                                                                            |                     |   |
| @HotelName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / BasicPropertyInfo                                              | The name of the Hotel.                                                                                                                                                                                                                                                                                                                     |                     |   |
| Comments   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay                                                                    | A collection of comments.                                                                                                                                                                                                                                                                                                                  |                     |   |
| Comment   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / Comments                                                          | A comment which applies to the room stay.                                                                                                                                                                                                                                                                                                  |                     |   |
| Text   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / RoomStays / RoomStay / Comments / Comment                                                   | Comment text.                                                                                                                                                                                                                                                                                                                              |                     |   |
| ResGuests   / OTA_ResRetrieveRS / HotelReservations / HotelReservation                                                                                          | Contains guest information elements. Will always contain at least one element with the primary guest information.                                                                                                                                                                                                                          |                     |   |
| ResGuest   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests                                                                               | One guest-information will be sent.                                                                                                                                                                                                                                                                                                        |                     |   |
| @AgeQualifyingCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests                                                                     | 10=Adult 8=Child                                                                                                                                                                                                                                                                                                                           |                     |   |
| @PrimaryIndicator   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest                                                           | Will be true for primary guest. Only one ResGuest element in the ResGuests container will have the value of primary indicator set to true.                                                                                                                                                                                                 |                     |   |
| Profiles   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest                                                                    | Mandatory for the primary guest and optional for other guests.                                                                                                                                                                                                                                                                             |                     |   |
| ProfileInfo   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles                                                      | Only one ProfileInfo element is allowed for each guest.                                                                                                                                                                                                                                                                                    |                     |   |
| Profile   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo                                            | Profile information. This is used to pass the profile info for the guest, the Company or the Travel agency. For the individual guest the code used in ProfileType is the OTA PRT code 1-[Customer]. For a company it is PRT Code – 3 [Corporation]. For a travel agency it is PRT code 4 – [Travel agent].                                 |                     |   |
| @ProfileType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile                             | The Type attribute refers to OTA code type UIT and the choices recommended by HTNG are:  1 = Customer 4 = Company 5 = Travel Agency                                                                                                                                                                                                        |                     |   |
| Customer   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profile / ProfileInfo / Profile                                  | Profile details of a guest. This path is used to transmit the Customer details.                                                                                                                                                                                                                                                            |                     |   |
| PersonName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer                    | Name of guest.                                                                                                                                                                                                                                                                                                                             |                     |   |
| NamePrefix   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / PersonName       | This field would be used to pass the guest’s name prefix.                                                                                                                                                                                                                                                                                  |                     |   |
| GivenName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / PersonName        | Person name Part of guest name. This field would be used to pass the guest’s first name.                                                                                                                                                                                                                                                   |                     |   |
| SurName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / PersonName          | Surname part of guest name.                                                                                                                                                                                                                                                                                                                |                     |   |
| Telephone   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer                     | Guest phone number.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @PhoneNumber   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Telephone      | The actual phone number.                                                                                                                                                                                                                                                                                                                   |                     |   |
| @PhoneTechType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo/ Profile / Customer / Telephone     | 1: Voice                                                                                                                                                                                                                                                                                                                                   |                     |   |
| @DefaultInd   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Telephone       | DefaultInd is optional and would indicate whether the phone number is the primary phone number for the profile.                                                                                                                                                                                                                            |                     |   |
| Email   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer                         | Guest Email                                                                                                                                                                                                                                                                                                                                |                     |   |
| @EmailType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation/ ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Email             | 1:personal – code                                                                                                                                                                                                                                                                                                                          |                     |   |
| @DefaultInd   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Email           | DefaultInd is optional and would indicate whether the email is the primary email for the profile.                                                                                                                                                                                                                                          |                     |   |
| Address   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer                       | Address of the guest.                                                                                                                                                                                                                                                                                                                      |                     |   |
| @Type   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address               | 1 - Home  2 - Business  3 - Other                                                                                                                                                                                                                                                                                                          |                     |   |
| AddressLine   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address         | Will contain 1 to 3 Address lines.  Will contain at least 1 line.                                                                                                                                                                                                                                                                          |                     |   |
| CityName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address            | City Name                                                                                                                                                                                                                                                                                                                                  |                     |   |
| PostalCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address          | Postal Code                                                                                                                                                                                                                                                                                                                                |                     |   |
| CountryName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address         | Country name                                                                                                                                                                                                                                                                                                                               |                     |   |
| @Code   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGuests / ResGuest / Profiles / ProfileInfo / Profile / Customer / Address / CountryName | ISO Country code                                                                                                                                                                                                                                                                                                                           |                     |   |
| ResGlobalInfo   / OTA_ResRetrieveRS / HotelReservations / HotelReservation                                                                                      | ResGlobalInfo is a container for various information elements that affect the Reservation as a whole. These include global comments, counts, reservation IDs, loyalty programs, and payment methods.                                                                                                                                       |                     |   |
| HotelReservationIDs   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo                                                                | Contains reservation ID elements. For new reservations, this will only contain BNOW confirmation number. For modifications and cancellations, original BNOW confirmation numbers will be included.                                                                                                                                         |                     |   |
| HotelReservationID   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs                                           | The BNOW confirmation number assigned to this booking.                                                                                                                                                                                                                                                                                     |                     |   |
| @ResID_Type   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs / HotelReservationID                             | 14 - for reservation confirmation number If there is external reservation source like booking.com or expedia then it can be configured this ID to be the OTA reference and not the BOOKonlinenow reference. In this case there will be two elements one with ID=14 for the external ID and one with ID=34 for the bookonlinenow reference. |                     |   |
| @ResID_Value   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs / HotelReservationID                            | ResID_Value would be the confirmation number of the reservation identified by the ResID_Type.                                                                                                                                                                                                                                              |                     |   |
| Guarantee   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo                                                                          | The guarantee information associated to the Room Stay.                                                                                                                                                                                                                                                                                     |                     |   |
| @GuaranteeType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee                                                         | This is the attribute that indicates what guarantee is provided with the reservation.  All reservations are CC guaranteed "CC/DC/Voucher”.                                                                                                                                                                                                 |                     |   |
| @GuaranteeCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee                                                         | Always card type.                                                                                                                                                                                                                                                                                                                          |                     |   |
| GuaranteesAccepted   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee                                                     | A collection of guarantee elements.                                                                                                                                                                                                                                                                                                        |                     |   |
| GuaranteeAccepted   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted                                 | Guarantee detail.                                                                                                                                                                                                                                                                                                                          |                     |   |
| PaymentCard   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard     | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @CardType   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard       | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @CardCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard       | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @CardNumber   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard     | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| @ExpireDate   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard     | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| CardHolderName   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Guarantee / GuaranteesAccepted / GuaranteeAccepted / PaymentCard  | Empty not provided.                                                                                                                                                                                                                                                                                                                        |                     |   |
| SpecialRequests   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo                                                                    | Contains SpecialRequest elements. The collection of all special requests associated with any part of the reservation (the reservation in its entirety, one or more guests, or one or more room stays).                                                                                                                                     |                     |   |
| SpecialRequest   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / SpecialRequests                                                   | If SpecialRequests element is present, at least 1 SpecialRequest must be present.                                                                                                                                                                                                                                                          |                     |   |
| Text   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / SpecialRequests / SpecialRequest                                            | Contains the text of the Special Request.                                                                                                                                                                                                                                                                                                  |                     |   |
| TimeSpan   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo                                                                           | The Time Span which covers the Room Stay. Used to specify a time window range by either specifying an earliest and latest date for the start date and end date or by giving a date with a time period that can be applied before and/or after the start date.                                                                              |                     |   |
| @Start   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / TimeSpan                                                                  | Check-in date for this room stay.                                                                                                                                                                                                                                                                                                          |                     |   |
| @End   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / TimeSpan                                                                    | Check-out date for this room stay.                                                                                                                                                                                                                                                                                                         |                     |   |
| @Duration   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / TimeSpan                                                               | Total night stay for this reservation.                                                                                                                                                                                                                                                                                                     |                     |   |
| Total   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo                                                                              | The total amount charged for the Room Stay.                                                                                                                                                                                                                                                                                                |                     |   |
| @CurrencyCode   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Total                                                              | Indicates the currency of the total.                                                                                                                                                                                                                                                                                                       |                     |   |
| @AmountAfterTax   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / Total                                                            | Total amount including tax.                                                                                                                                                                                                                                                                                                                |                     |   |
| UniqueID   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs                                                     | Contains reservation group ID elements. This can be used to group multiple reservation for the same customer. Each reservation get a Reservation id. All multiple reservations have the same UniqueID.                                                                                                                                     |                     |   |
| @Type   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs / UniqueID                                             | 14 - for reservation                                                                                                                                                                                                                                                                                                                       |                     |   |
| @ID_Context   / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs / UniqueID                                       | Defines the type of the ID. Currently only GroupNumber.                                                                                                                                                                                                                                                                                    |                     |   |
| @ID / OTA_ResRetrieveRS / HotelReservations / HotelReservation / ResGlobalInfo / HotelReservationIDs / UniqueID                                                 | The Reservation Group ID.                                                                                                                                                                                                                                                                                                                  |                     |   |
You can now import Markdown table code directly using File/Paste table data... dialog.

How to use it?
Using the Table menu set the desired size of the table.
Enter the table data into the table:
select and copy (Ctrl+C) a table from the spreadsheet (e.g. Google Docs, LibreOffice Calc, webpage) and paste it into our editor -- click a cell and press Ctrl+V
or just double click any cell to start editing it's contents -- Tab and Arrow keys can be used to navigate table cells
Adjust text alignment and table borders using the options from the menu and using the toolbar buttons -- formatting is applied to all the selected cells.
Click "Generate" button to see the generated table -- select it and copy to your document.
Markdown tables support
As the official Markdown documentation states, Markdown does not provide any special syntax for tables. Instead it uses HTML <table/> syntax. But there exist Markdown syntax extensions which provide additional syntax for creating simple tables.

One of the most popular is Markdown Here — an extension for popular browsers which allows you to easily prepare good-looking e-mails using Markdown syntax.

Similar table syntax is used in the Github Flavored Markdown, in short GFM tables.

Example
GFM Markdown table syntax is quite simple. It does not allow row or cell spanning as well as putting multi-line text in a cell. The first row is always the header followed by an extra line with dashes "-" and optional colons ":" for forcing column alignment.

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
    

**0TA_ResRetrieveRS response indicating failure**

```
<?xml version="1.0" encoding="utf-8" ?>

    <0TA_ResRetrieveRS xmlns="http://www.opentravel.org/OTA/2013/05"
                        TimeStamp="2013-05-01T06:39:09"Target="Production" Version="1.1">
    <Errors>
        <Error Type="3" Code="392">
            Invalid hotel code
        </Error>
    </Errors>
</0TA_ResRetrieveRS >

```

| **0TA_ResRetrieveRS**                                   |                                                                                                                                                                            |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Element / @Attribute <br /><br />Parent XPath**       | **Description**                                                                                                                                                            |
| @TimeStamp <br /><br />/ 0TA_ResRetrieveRS              | Time of the transaction in xml schema date-time format.                                                                                                                    |
| @Version <br /><br />/ 0TA_ResRetrieveRS                | For this version of the specification set to “1.1”,                                                                                                                        |
| Errors <br /><br />/ HotelUpdateRS                      | If included, this element will indicate that the request message could not be processed.<br />Either a Success element or an Errors element is required in every response. |
| Error <br /><br />/ 0TA_ResRetrieveRS / Errors          | Description of cause for a fatal problem during request message processing. <br />If an Errors element is included, at least one Error element is required.                |
| @Type <br /><br /> / 0TA_ResRetrieveRS / Errors / Error | This is an enumeration of error types.                                                                                                                                     |
| @Code <br /><br />/ 0TA_ResRetrieveRS / Errors / Error  | This is an enumeration of error codes.                                                                                                                                     |



### <a name="HotelResNotifRQ"></a> HotelResNotifRQ

This service is used to confirmed an already pulled reservation from Readrq service so us with ```OnlyNotConfirmed="yes"``` attribute in Readrq you can get only not confirmed reservations 

** Confirm reservation - Xml sample **

```
<?xml version="1.0" encoding="utf-8" ?>
<HotelResNotifRQ xmlns="http://www.opentravel.org/OTA/2013/05"  TimeStamp="2013-05-01T06:39:09" Target="Production" Version="1.1">
  <Authentication UserName="test"  Password="test" /> 
  <HotelReservationIDs HotelCode="testhotel">
  <HotelReservationID ResID_Value="RES425223924R899"/>
  <HotelReservationID ResID_Value="RES425120924R899"/>
  </HotelReservationIDs>
<!-- ResID_Value is the one get from OTA_ResRetrieveRS -->
</HotelResNotifRQ>
```

** Confirm reservation success - Xml sample **

```
<?xml version="1.0" encoding="UTF-8"?>
<HotelResNotifRS xmlns="http://www.opentravel.org/OTA/2013/05" Target="Production" TimeStamp="2025-01-03T13:21:37" Version="1.1" TransactionIdentifier="7329091c-b33c-4a8e-a572-6d0ff9d580e0">
    <Success />
</HotelResNotifRS>
```