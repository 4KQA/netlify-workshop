import { MiddlewareRequest } from "@netlify/next";
import { products } from "./products";

export async function middleware(nextRequest) {
    
  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();
  
  if (nextRequest.nextUrl.pathname.indexOf("/marketing-page") !== -1) {
      const city = request.geo.city;

      const res = await fetch('https://api.api-ninjas.com/v1/weather?' + new URLSearchParams({
        city: city || '',
        year: '2022',
        type: 'public_holiday',
        }), {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': '1wotrGpcssqBHQG6Ze+Acw==DcADxCCX2wi82g1t'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
        
        const weatherInfo = await res.json();
        
        const seasonProducts = products.filter(product => product.maxTemp >= weatherInfo.temp && product.minTemp <= weatherInfo.temp)

        response.setPageProp("products", seasonProducts);
  }

  return response
}