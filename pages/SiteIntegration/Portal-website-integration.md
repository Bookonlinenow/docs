# Portal Website Integration

---

### 4.1 Portal Edition Booking Mask

There is a set of possible parameters to link a booking form to the list of hotels of the
portal booking engine. These parameters are explained below in detail.
Below is an example of a portal booking engine URL:

```
https://portalname.book-onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&portal=18&orderby=random&
arrival=17/03/2015&departure=18/03/2015&adults=2&kids=
```

| **Name**      | **Type** | **Values** | **Required** | **Default** | **Example**            | **Notes**                                                                                                    |
| ------------- | -------- | ---------- | ------------ | ----------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Page**      | Int      | 22         | Yes          | 22          | Page=22                | Fixed value                                                                                                  |
| **lan_id**    | String   |            | Yes          | lan_id=     | lan_id = en-US         | Selected Language                                                                                            |
| **promo**     | String   |            | No           | promo=      |                        | Promo Code or Agent Code                                                                                     |
| **arrival**   | Date     |            | Yes          |             | arrival=29/05/2013     | Format <br/>dd/MM/yyyy                                                                                       |
| **departure** | Date     |            | Yes          |             |                        | Format <br/>dd/MM/yyyy                                                                                       |
| **rooms**     | Int      |            | Yes          |             | rooms=1                | Number of Rooms                                                                                              |
| **adults**    | Int      |            | Yes          |             | adults=3               | Number of Adults                                                                                             |
| **kids**      | Int      |            | Yes          |             | kids=1                 | Number of Children                                                                                           |
| **Extra**     | Int      | 0          | Yes          |             |                        | Fixed value                                                                                                  |
| **cot**       | Int      | 0          | Yes          |             |                        | Fixed value                                                                                                  |
| **Area**      | String   |            | Yes          |             |                        | Area, acts as a filter leave empty for all areas                                                             |
| **City**      | String   |            | Yes          |             |                        | City, acts as a filter leave empty for all cities                                                            |
| **Villa**     | String   |            | Yes          |             |                        | Hotel name, acts as a filter for selected hotel - Leave empty for all hotels                                 |
| **Portal**    | String   |            | Yes          |             |                        | Portal ID – unique fixed value                                                                               |
| **orderby**   | String   |            | Yes          |             | orderby=totalprice asc | Possible values: totalprice, random, stars <br/>Default is “random”<br/>Asc or Desc can be used in ordering. |

### 4.2 Portal Edition Direct Link

To launch the Bookonlinenow portal edition booking engine with no dates, the link
should follow the format:

```
https://portalname.book-onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&
portal=9&adults=2&kids=0&lan_id=&orderby=random
```

The link is redirected to the portal edition, showing the results for the following
criteria:
Arrival date is the current date, Overnights = 1

### 4.3 Portal Edition – Available hotels and order

There are two parameters in the Portal Link that works as follows:
**onlyavail=no** : Displays all hotels regardless their availability
**onlyavail=yes** : Displays only available hotels
**orderby=totalprice desc** : Displays hotels from higher to lower price
**orderby=totalprice asc** : Displays hotels from lower to higher price
**orderby=random** : Displays hotels on a random order

#### Examples

Show all hotels from higher to lower price:

```
https://portalname.book-onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&
portal=XX&adults=2&kids=0&orderby=totalprice desc&onlyavail=no
```

Show all hotels from lower to higher price:

```
https:// portalname.book-onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&
portal=XX&adults=2&kids=0&orderby=totalprice asc&onlyavail=no
```

Show all hotels with random order:

```
https:// portalname.book-onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&
portal=XX&adults=2&kids=0&orderby=random&onlyavail=no
```

Show only available hotels with random order:

```
https:// portalname.book-
onlinenow.net/index.aspx?Page=22&Area=&City=&Villa=&portal=XX&adults=2&kids=0&
orderby=random&onlyavail=yes
```

where XX is the portal ID
