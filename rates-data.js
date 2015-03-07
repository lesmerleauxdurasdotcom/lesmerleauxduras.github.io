
var __rates__ =  [

    {
        name: 'Easter',
        start: new Date (2015, 3-1, 28),
        end: new Date (2015, 4-1, 12),
        minimumStay: '1 Week',
        // changeOverDay: 'Saturday',
        rates: {
            GBP: {
                weekly: 1500
                //weekdayNight: 0,
                //weekendNight: 0

            },

            EUR: {
                weekly: 2050
            }
        }
    },

    {
        name: 'Summer',
        start: new Date (2015, 7-1, 1),
        end: new Date (2015, 9-1, 1),
        minimumStay: '4 Nights',
        // changeOverDay: 'Saturday',
        rates: {
            GBP: {
                weekly: 1700,
                weekdayNight: 290,
                weekendNight: 290

            },

            EUR: {
                weekly: 2360
            }
        }
    },

    {
        name: 'Other',
        minimumStay: '4 Nights',
        // changeOverDay: 'Saturday',
        rates: {
            GBP: {
                weekly: 1200,
                weekdayNight: 215,
                weekendNight: 215

            },

            EUR: {
                weekly: 1670
            }
        }
    }
];
