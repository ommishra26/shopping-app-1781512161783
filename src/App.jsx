import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "shopping app",
  "entry": "home",
  "flow": {
    "home": "detail",
    "detail": "cart",
    "upload": "home",
    "cart": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Products",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidMart Marketplace",
              "subtitle": "Curated deals across everyday marketplace categories.",
              "id": "d2299195-32ad-4d28-97a6-e5ccb0f2fcd5"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Grid",
              "columns": 5,
              "gap": 16,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Electronics",
                  "value": "Audio and devices",
                  "targetScreen": "",
                  "id": "03571899-1f1b-4c4b-8da4-4a962ea000d0"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Fashion",
                  "value": "Shoes and apparel",
                  "targetScreen": "",
                  "id": "00b719ea-6b4e-4291-8444-3ee86121c602"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Home",
                  "value": "Kitchen and decor",
                  "targetScreen": "",
                  "id": "33d835ed-9edb-4129-ac77-9ad41ec7f243"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Sports",
                  "value": "Fitness gear",
                  "targetScreen": "",
                  "id": "ea9f6284-ccef-4ce3-a879-a003422d84e7"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Books",
                  "value": "Fiction and learning",
                  "targetScreen": "",
                  "id": "c27a7342-43bc-48bc-8fdb-efa6f7b696b3"
                }
              ],
              "id": "0cf41747-e58f-4268-968e-344a236f3894",
              "width": "100%"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Featured Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Noise Canceling Headphones",
                  "price": "$129 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "a403cdd6-6c30-4cbf-b85f-578037511cd0"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "d579f813-8ae4-44e5-af8c-d99170973cd7"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "a7c26f68-97a7-4791-b06e-bf422cb3282d"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Kitchen Air Fryer",
                  "price": "$119 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "83330bb8-cb54-4f66-817b-d354cb07a888"
                }
              ],
              "id": "1a43903a-eb34-4596-887e-94bade360b10"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Popular Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "6130fb46-57cf-413e-a54d-d2b790aaecd5"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "c7c1e9ed-5e95-4303-99a9-f1fb9727d4d8"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Wireless Charger",
                  "price": "$29 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "8b147e81-5734-42a8-bfcf-49867ec34028"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Coffee Maker",
                  "price": "$96 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "417da4c6-2990-4699-809c-50a25591a1ff"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Running Shoes",
                  "price": "$68 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "b930bba0-8805-4b83-aab0-67c7d9185d44"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Bestseller Novel",
                  "price": "$18 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "fa7ce543-8e70-4f5c-9af5-cd2d8c2ad2f5"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Yoga Mat Pro",
                  "price": "$34 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "f5f3fe30-1904-4588-9d65-8be4c6f1eb78"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Cotton Hoodie",
                  "price": "$52 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "bebf9738-f82b-4524-b98b-8953433b6349"
                }
              ],
              "id": "c865aafb-1865-4b58-8036-6581f193bebc"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "auto",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "26px",
              "type": "banner",
              "title": "Deal of the Day",
              "subtitle": "Save on top-rated tech bundles before midnight.",
              "id": "6c5a42dc-62ab-4c82-91ae-fdc81d09cb73"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 14,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Sell on RapidMart",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "9dd441c5-2c80-4aaa-86fc-e4e996f22156"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "View Cart",
                  "action": "go-to-screen",
                  "targetScreen": "cart",
                  "id": "137c2848-b41a-47e5-a573-3f8a7aa96408"
                }
              ],
              "id": "ac4de2ed-b8e8-484d-a7c2-ba6eb606a183"
            }
          ],
          "id": "a358e5d2-f2c7-4857-b42b-495e6e5bfe63"
        }
      ]
    },
    "detail": {
      "type": "ecommerce",
      "title": "Product Detail",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "stretch",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "44%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "340px",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "30px",
                      "type": "card",
                      "title": "Product Gallery",
                      "value": "Large product image placeholder",
                      "targetScreen": "",
                      "id": "91ec89e2-917d-4228-b989-24ef13fc6aaf"
                    }
                  ],
                  "id": "9f6573c6-0c28-498d-a435-fdcf5d242c91"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "52%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "Premium wireless audio with adaptive sound and long battery life.",
                      "targetScreen": "",
                      "id": "117bf921-7a81-4ef3-8a38-e207ab149b22"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Price",
                      "value": "$129",
                      "targetScreen": "",
                      "id": "3f8a8f48-5722-4faf-b768-9ce9331dfb72"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Rating",
                      "value": "4.8 stars | 2,481 reviews",
                      "targetScreen": "",
                      "id": "628ae31a-9fdf-4efe-8a7e-98b9e30cb962"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Description",
                      "value": "Active noise cancellation, soft ear cushions, quick charge, and travel case.",
                      "targetScreen": "",
                      "id": "dab1548c-6ab9-4ac8-8bce-e229918dfaab"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Buy Now",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "14b5a92a-b111-408b-8d06-acd321035174"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Add To Cart",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "1f6b2825-e4dc-48bf-a36a-305b654ed672"
                        }
                      ],
                      "id": "32c85922-cf66-4cbd-9d03-aa2a1e7fdbbe"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#334155",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back To Products",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "4e558902-5d01-4795-8b0b-ddeca862f89c"
                    }
                  ],
                  "id": "b26f8c9d-1193-4752-8064-5f533aa878fd",
                  "gap": 18
                }
              ],
              "id": "74d05608-64e2-4595-ad35-008e1ee6ea36"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Related Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "e3500143-1576-48bb-81d4-bfa0dcb02daf"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "ae14903b-31a9-4306-a409-45e5475d1c18"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "20bd93b4-1345-49e1-9077-c2584d12b9d9"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "ebc677f1-3996-454c-9ede-f8e81f7a956f"
                }
              ],
              "id": "1f6747ad-89cd-4c9f-9631-b10eba84f0ae"
            }
          ],
          "id": "1fb56f75-ce9d-4ccf-9260-bc295064e405"
        }
      ]
    },
    "upload": {
      "type": "ecommerce",
      "title": "Upload Product",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Seller Center",
          "subtitle": "Create a polished product listing.",
          "id": "43fca564-83a5-43a5-843b-c5776e837b83"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Product Listing Form",
          "padding": "30px",
          "margin": "0",
          "maxWidth": "740px",
          "backgroundColor": "#1E293B",
          "borderRadius": "16px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "productName",
              "placeholder": "Product name",
              "inputType": "text",
              "id": "35e752d0-2261-4e64-962b-2d11a6e41c66"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "category",
              "placeholder": "Category",
              "inputType": "text",
              "id": "debf5229-ab7d-4925-8d26-4e5bad893b3e"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "price",
              "placeholder": "Price",
              "inputType": "text",
              "id": "01da327c-9174-4fcc-85ce-72e435f3502d"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "description",
              "placeholder": "Short description",
              "inputType": "text",
              "id": "35499142-6cf5-453b-a965-bc2c9166ec08"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "imageUrl",
              "placeholder": "Image upload URL",
              "inputType": "text",
              "id": "8459db50-320a-4979-8cc6-dfa1e2fcf9ec"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Save Product",
                  "action": "none",
                  "targetScreen": "",
                  "id": "5821a256-5636-46a7-9125-37c36f8ead81"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Preview Product",
                  "action": "go-to-screen",
                  "targetScreen": "detail",
                  "id": "129c68bd-8ae8-4c6a-a1e1-7a78c06afff5"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#334155",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Back to Products",
                  "action": "go-to-screen",
                  "targetScreen": "home",
                  "id": "ea5b4300-add5-4978-9187-4cfcc1a560f1"
                }
              ],
              "id": "451572e7-f3a7-4296-82ee-eb7ac80f453b"
            }
          ],
          "id": "db8b6029-4f0e-49f8-8085-1481c1a92ca4"
        }
      ]
    },
    "cart": {
      "type": "ecommerce",
      "title": "Cart / Checkout",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Cart / Checkout",
          "subtitle": "Review items, totals, and checkout actions.",
          "id": "7c440433-512a-4153-8ef6-c89dcfa8cb43"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "start",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "62%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "$129 | Qty 1",
                      "targetScreen": "",
                      "id": "25651d2a-a229-475a-b66d-109f88644ec2"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Travel Backpack",
                      "value": "$74 | Qty 1",
                      "targetScreen": "",
                      "id": "9e03f3e6-a87b-49f5-9fb2-709606ad2eae"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Shipping Address",
                      "value": "Add delivery address during checkout.",
                      "targetScreen": "",
                      "id": "0ea38515-c13b-4552-98fb-3308a1b8ece9"
                    }
                  ],
                  "id": "351fba11-cee1-4709-98e9-a453d2387718"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "34%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Subtotal",
                      "value": "$203",
                      "targetScreen": "",
                      "id": "6f14a40d-7ad3-42f2-9854-ad1b07b82e88"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Shipping",
                      "value": "$8",
                      "targetScreen": "",
                      "id": "13174a97-6a83-45d2-8665-27c44f7e89e3"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Tax",
                      "value": "$17",
                      "targetScreen": "",
                      "id": "9ebdec74-0079-48e4-a783-624dd3bf699d"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#312E81",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "24px",
                      "type": "card",
                      "title": "Total",
                      "value": "$228",
                      "targetScreen": "",
                      "id": "cc7afb63-4b63-43ff-a915-cd89d1480278"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Checkout",
                          "action": "none",
                          "targetScreen": "",
                          "id": "d151a05d-5b80-4504-ad82-36b35ae3bab9"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Continue Shopping",
                          "action": "go-to-screen",
                          "targetScreen": "home",
                          "id": "3bc674a4-471d-4e9b-8972-6f97af97d792"
                        }
                      ],
                      "id": "3dcca544-8ce8-49c3-a883-692d161342ad"
                    }
                  ],
                  "id": "f7e563a6-aa42-4662-9d8e-bac217263b9f",
                  "gap": 18
                }
              ],
              "id": "db8869ba-d6d1-4bea-ad93-3996cb16459d"
            }
          ],
          "id": "303833e6-eff1-4759-a0ff-7e696ccc91c8"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
