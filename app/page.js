import Navbar from '../components/Navbar'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'

async function getData() {
  const domain = process.env.API_DOMAIN
  const res = await fetch("/api/post",{ next: { revalidate: 900 } })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const metadata = {
  title: "Disney Dreamer's Guide",
  description: "A guide to help you plan your next Disney vacation.",
  URL: "https://www.disneydreamersguide.com/",
  type: "website",
}

export default async function Home() {
  //const posts = await getData()
  

  return (
    <div className="bg-page-pattern">
      <Navbar />
      {/*
      <HomeContent posts={posts}/>
      */}
      <Footer />
    </div>  
  )
}
