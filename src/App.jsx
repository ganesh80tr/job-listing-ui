import Card from "./components/Card";

function App() {

  const jobs = [
  {
    logo: "https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png",
    companyName: "Amazon",
    days: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    price: "₹120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    companyName: "Google",
    days: "2 days ago",
    position: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    price: "₹150/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    companyName: "Microsoft",
    days: "1 week ago",
    position: "UI Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    price: "₹130/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    companyName: "Facebook",
    days: "3 days ago",
    position: "UX Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    price: "₹140/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/020/335/987/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    days: "4 days ago",
    position: "Product UI Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    price: "₹160/hr",
    location: "Pune, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
    companyName: "X-Twitter",
    days: "6 days ago",
    position: "UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    price: "₹110/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://img.freepik.com/premium-vector/round-linkedin-logo-isolated-white-background_469489-985.jpg?semt=ais_rp_50_assets&w=740&q=80",
    companyName: "LinkedIn",
    days: "1 day ago",
    position: "Interaction Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    price: "₹125/hr",
    location: "Gurgaon, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png",
    companyName: "Whatsapp",
    days: "2 days ago",
    position: "Visual Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    price: "₹170/hr",
    location: "Noida, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    companyName: "Nike",
    days: "1 week ago",
    position: "UI Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    price: "₹180/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/018/930/582/non_2x/reddit-logo-reddit-icon-transparent-free-png.png",
    companyName: "Reddit",
    days: "3 days ago",
    position: "Services",
    tag1: "Full Time",
    tag2: "Mid Level",
    price: "₹100/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    companyName: "Discord",
    days: "10 days ago",
    position: "UX Architect",
    tag1: "Full Time",
    tag2: "Lead Level",
    price: "₹200/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/h-m.svg",
    companyName: "H&M",
    days: "7 days ago",
    position: "UI Architect",
    tag1: "Full Time",
    tag2: "Low Level",
    price: "₹220/hr",
    location: "Noida, India"
  }
];


console.log(jobs);
  return (
    <div className="parent">
      {
        jobs.map(function(ele){
          return <Card 
                      logo={ele.logo}
                      company={ele.companyName} 
                      day={ele.days}
                      pos={ele.position}
                      t1={ele.tag1}
                      t2={ele.tag2}
                      price={ele.price}
                      loc={ele.location}
                 />
        })
      }
    </div>
  )
}

export default App
