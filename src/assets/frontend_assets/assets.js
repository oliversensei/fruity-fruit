import basket_icon from './basket_icon.png'
import logo from './logo.png'
import search_icon from './search_icon.png'

import food_1 from './b1-lemonade.png'
import food_2 from './bg-watermelon.png'
import food_3 from './Poster_ads_3.png'
import food_4 from './Poster_ads_4.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Lemonade",
        menu_image: 'https://icons.veryicon.com/png/o/food--drinks/fresh-1/lemon-29.png'
    },
    {
        menu_name: "Watermelon",
        menu_image: 'https://img.freepik.com/premium-vector/watermelon-vector-watermelon-with-red-flesh-is-halved-isolate_68708-673.jpg?w=2000'
    }]

export const food_list = [
    {
        _id: "1",
        name: "Lemonade",
        image: food_1,
        price: 30,
        description: `A sour, yellow fruit often used for juicing, flavoring, or as garnish in drinks and food.`,
        category: "Lemonade"
    },
    {
        _id: "2",
        name: "Watermelon",
        image: food_2,
        price: 30,
        description: `A sweet, refreshing fruit with high water content, perfect for hydration during hot days.`,
        category: "Watermelon"
    }, 
]
