import { MiddlewareRequest } from "@netlify/next";
import { products } from "./products";

export async function middleware(nextRequest) {
    
  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();
  const countryCode = request.geo.country;
  
  if (nextRequest.nextUrl.pathname.indexOf("/marketing-page") !== -1) {
      const countryCode = request.geo.country;
      console.log(request, 'request.geo');

      const res = await fetch('https://api.api-ninjas.com/v1/holidays?' + new URLSearchParams({
        country: countryCode || '',
        year: '2022',
        type: 'public_holiday',
        }), {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': '1wotrGpcssqBHQG6Ze+Acw==DcADxCCX2wi82g1t'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
      // use correct API.
        const something = res.json().then(res => console.log(res, 'RES'))

        const season = 'SUMMER';
        
        const seasonProducts = products.filter(product => product.season === season)
        console.log(products, 'prod');
        console.log(seasonProducts, 'SEASON PRODUCTS')

        response.setPageProp("products", seasonProducts);
  }

  return response
}