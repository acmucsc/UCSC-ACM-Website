import ScrollingCarousel from "../components/ScrollingCarousel"
import Navbar from "../components/Navbar/Navbar"
import Bio from "../components/Bio/Bio"

const Welcome = () => {
  return (
    <div>
        <Navbar/>
        <Bio />
        <ScrollingCarousel/>
    </div>
  )
}

export default Welcome