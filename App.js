import React from "react";
import ReactDOM from "react-dom/client";

/**Header
 * --logo
 * --Nav Items
 * Body
 * --search
 * --RestaurantContainer
 * --Restaurant card
 * Footer
 * --Copyright
 * --Links
 * --Address
 * --Contact
 **/
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                   className="logo" 
                   src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
                />
            </div>
        
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>    
)
}

// style={{backgroundColor:"#f0f0f0"}}>

const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo"   src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                +resData.info.cloudinaryImageId}/>
        <div className="food-details">
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.avgRating}stars</h4>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.deliveryTime}</h4>
        <h4>30 minutes</h4>
        </div>
        </div>
    )
}


const reslist=[
{
    "type":"restaurant",
        "info": {
          "id": "405798",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Malleshwaram",
          "areaName": "Malleshwaram",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "61955",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-19 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹199"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-4f00f7f2-b8e0-4f0e-a4d4-fb801c363e8e"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "type":"restaurant",
    "info": {
        "id": "10575",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Shanti Nagar",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      "availability": {
        "nextCloseTime": "2024-05-19 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-4f00f7f2-b8e0-4f0e-a4d4-fb801c363e8e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "type":"restaurant",
   
    "info": {
        "id": "82499",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "x0y6ioip45p0xqipdymj",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "10804",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      "availability": {
        "nextCloseTime": "2024-05-19 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-4f00f7f2-b8e0-4f0e-a4d4-fb801c363e8e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},

{
    "type":"restaurant",
    "info": {
        "id": "502957",
        "name": "Andhra Gunpowder",
        "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
        "locality": "Shivananda Circle",
        "areaName": "Seshadripuram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Andhra",
          "Biryani",
          "South Indian"
        ],
        "avgRating": 4.4,
        "parentId": "10496",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      "availability": {
        "nextCloseTime": "2024-05-19 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-4f00f7f2-b8e0-4f0e-a4d4-fb801c363e8e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{
    "type":"restaurant",
    "info": {
        "id": "667962",
        "name": "Paris Panini - Gourmet Sandwiches & Wraps",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Church Street",
        "areaName": "Central Bangalore",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Continental",
          "Pastas",
          "Salads",
          "Snacks",
          "Desserts",
          "Fast Food",
          "French"
        ],
        "avgRating": 4.6,
        "parentId": "21019",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      "availability": {
        "nextCloseTime": "2024-05-19 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-4f00f7f2-b8e0-4f0e-a4d4-fb801c363e8e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

}];
    




const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="Res-container">
            {/* <RestaurantCard  resData={reslist[0]}/> */}
            {reslist.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
            </div>
        </div>
    )
}


const AppLayout=()=>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)