import Navbar from '../../../components/Navbar'
import CategoryContent from '../../../components/CategoryContent'
import Footer from '../../../components/Footer'

async function getData(slug) {
  const res = await fetch('http://localhost:3000/api/category/' + slug, { cache: 'no-cache' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function generateMetadata({ params: {slug}}, parent) {
  const postData = await getData(slug);
  const post = postData[0];
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "Disney Dreamer's Guide : "+ post.category,
    description: post.category + " Category",
    openGraph: {
      url: "https://disneydreamersguide.com/category/" + post.categorySlug, 
      title: "Disney Dreamer's Guide : "+ post.category,
      description: post.category + " Category",
      type: "website",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  }
}


export default async function Category({params: { slug }}) {
  const posts = await getData(slug)
  

  return (
    <div className="bg-page-pattern">
      <Navbar />
      <CategoryContent posts={posts}/>
      <Footer />
    </div>  
  )
}
