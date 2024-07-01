# Hotel Website Integration with Links

---

### 1. Direct Link

The easiest way to launch the booking engine is a simple link:

```
https://hotelname.book-onlinenow.net
```

The link is redirected to the 1st step of the booking engine

### 2. 2nd Step Redirection

To launch the booking engine in the 2nd step directly, the link should follow the format:

```
https://hotelname.book-onlinenow.net/index.aspx?Page=19
```

The link is redirected to the 2nd step of the booking engine, showing the results of room types and rate plans according to the Default Search Criteria:

```
Arrival date is the current date
Overnights = 1
Adults = 2 (default number of adults configured in back-end)
```

For example:

```
https://demov3.book-onlinenow.net/index.aspx?Page=19
```

### 3. Language Based Links

To launch the booking engine for a **specific language** , the following argument should
be added:

```
lan_id=xx-XX
```

where xx-XX is the language code. See **Appendix I** at the end of the document for a
list with all supported languages.

The link should follow the format:

```
_https://hotelname.book-onlinenow.net/index.aspx?lan_id=xx-XX_
```

For example:

```
https://demov3.book-onlinenow.net/index.aspx?lan_id=fr-FR
```

### 4. Booking Sources Based Links

To launch the booking engine for a **specific booking source** , the following argument
should be added:
src=XX
where XX is the booking source. See **Appendix II** at the end of the document for a
list with all default booking sources.
Using BookOnlineNow extranet you can create and configure any booking source (
for example: for VIP Gold Members, a Campaign, a special Link, a 3rd Party Affiliation
or any other reason)

The link should follow the format:

```
https://hotelname.book-onlinenow.net/index.aspx?src=XX
```

For example:

```
https://demov3.book-onlinenow.net/index.aspx?src=
```

### 5. Special Offers Based Links

**Special Offers**

To launch the booking engine for a **specific special offer** , the following argument
should be added:

```
specialoffer=<SpecialOfferName>
```

where SpecialOfferName is the Special Offer Name as displayed in the Special Offer
section of Bookonlinenow extranet

The link should follow the format:

```
https://hotelname.book-onlinenow.net/index.aspx?specialoffer=SpecialOfferName

```

For example:

```
https://demov3.book-onlinenow.net/index.aspx?specialoffer=EarlyBooking
```

**Special Offers with Promo Code**

If there is a **special offer with a Promo Code** , to launch the booking engine for the
special offer including the promo code, the following argument should be added:

```
promocode=<PromoCodeName>
```

where PromoCodeName is the Promo Code Abbreviation

The link should follow the format:

```

https://hotelname.book-onlinenow.net/index.aspx?specialoffer=SpecialOfferName&promocode=PromoCodeName

```

For example:

```

https://demov3.book-onlinenow.net/index.aspx?specialoffer=EarlyBooking&promocode=promo2020

```

### 6. Room Types Based Links

To launch the booking engine for a **specific room type** , the following argument should be added:
selectedroom=RoomType>'
where RoomType is the Abbreviation of the selected Room Type

The link should follow the format:

```

https://hotelname.book-onlinenow.net/index.aspx?selectedroom=RoomType

```

For example:

```

https://demov3.book-onlinenow.net/index.aspx?selectedroom=DoubleStudio

```

### 7. Combined Arguments

Any **combination** of the above arguments is supported

Example:
To launch the booking engine for French Language, for Booking Source 202 directly in the 2nd step you can use the Link:

```

https://hotelname.book-onlinenow.net/index.aspx?Page=19&lan_id=fr-FR&src=2

```
