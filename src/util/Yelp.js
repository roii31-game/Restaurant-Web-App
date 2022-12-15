const apiKey =
  "G-BFuTkRh5Z3xl3nh95lAATnZLrRRiOITrbdCvAtcIxeeQHWvRurYN9hK9WHKM9doHA6t5k5F851CX3IcHhD1xVnGU-4m2mLORwaY0Z_vbUU8Vlp58xSZbT4756bY3Yx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearers ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount,
            };
          });
        }
      });
  },
};
