//store categories fill out automatically from the Shopify storefront API (gastby-source-shopify2)

const navigationMap = {
  "store": ["edibles", "pet", "to go", "drink", "vape"],
  "about": ["who we are", "why us", "follow"],
  "news": [],
  "whatiscbd": [],
}

const navigationFooterLinks = {
  'Home': '/',
  'Contact Us': '/contact',
  'Sign up for our Newsletter': '/subscribe',
  'What is CBD?': '/whatiscbd',
  'Privacy Policy': '/privacypolicy',
  'Terms and Conditions': '/termsandconditions',
}

export {
  navigationMap,
  navigationFooterLinks
}