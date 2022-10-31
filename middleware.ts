import type { NextRequest } from "next/server";
import { MiddlewareRequest } from "@netlify/next";

export async function middleware(nextRequest: NextRequest) {
    
  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();

  const countryCode = request.geo.country;

  const res = await fetch('https://api.api-ninjas.com/v1/holidays?' + new URLSearchParams({
    country: 'AU',//countryCode || '',
    year: '2022',
    type: 'public_holiday',
    }), {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': '1wotrGpcssqBHQG6Ze+Acw==DcADxCCX2wi82g1t'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    })

    const something = res.json().then(res => console.log(res, 'RES'))

//   const countryCodeFetch = await fetch(`https://api.api-ninjas.com/v1/holidays?country=
//   ${(countryCode || '').trim()}&year=${new Date().getFullYear()}&type=public_holiday`);

//   console.log(countryCodeFetch, 'countryCodeFetch');
}