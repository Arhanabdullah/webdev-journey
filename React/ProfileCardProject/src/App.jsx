import React from 'react'
import Section1 from './Components/Section 1/section1'


const App = () => {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    desc: "Software Engineer with 4+ years of experience in full-stack web development.",
    tag: "Tech"
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    desc: "Product Manager focused on agile workflows and user-centric product design.",
    tag: "Management"
  },
  {
    img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Data Analyst skilled in Excel, SQL and Power BI, helping businesses make data-driven decisions.",
    tag: "Analytics"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100403716-15caecbc3101?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Creative UI/UX Designer passionate about crafting intuitive digital experiences.",
    tag: "Design"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661600558982-b52f4764f8c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    desc: "HR Specialist focused on recruitment, employee engagement and workplace culture.",
    tag: "HR"
  },
  {
    img: "https://images.unsplash.com/photo-1719845202038-d57a8b79b83f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    desc: "Cybersecurity Expert ensuring safe and compliant IT infrastructure for enterprises.",
    tag: "Security"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661576445274-3fd93c31512d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Digital Marketing Lead specializing in brand growth, SEO, and campaign strategy.",
    tag: "Marketing"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661576406738-aada678ce366?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Finance Consultant advising clients on budgeting, investments, and risk management.",
    tag: "Finance"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "DevOps Engineer experienced in CI/CD automation and cloud deployment pipelines.",
    tag: "DevOps"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675713554352-e3351772eadd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29udGVudCUyMHdyaXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Content Writer with expertise in technical writing, blogs, and B2B content strategy.",
    tag: "Writing"
  }
];

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
