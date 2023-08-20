const domain = 'https://www.disneydreamersguide.com';

async function getData() {
    const res = await fetch('http://localhost:3000/api/post')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  export default async function sitemap() {
    const postsData = await getData()
    const posts = postsData.map(({ slug, updatedAt }) => (
        {
        url: `${domain}/post/${slug}`,
        lastModified: updatedAt,
      }));
     
      const routes = ["", "/magic-kingdom-wait-times", "/epcot-wait-times", "/hollywood-studios-wait-times", "/animal-kingdom-wait-times",].map((route) => ({
        url: `${domain}${route}`,
        lastModified: new Date().toISOString(),
      }));
     
      return [...routes, ...posts];
  }