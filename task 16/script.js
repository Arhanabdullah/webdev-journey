const students = [
  {
    name: "Arhan Abdullah",
    marks: 89,
    class: 10,
    address: "Kolkata, West Bengal",
  },
  { name: "Tazakka Arsh", marks: 94, class: 12, address: "Delhi" },
  { name: "Rohan Das", marks: 76, class: 8, address: "Bengaluru, Karnataka" },
  { name: "Priya Sen", marks: 82, class: 9, address: "Mumbai, Maharashtra" },
  { name: "Ayaan Khan", marks: 91, class: 11, address: "Hyderabad, Telangana" },
  {
    name: "Sneha Mukherjee",
    marks: 87,
    class: 7,
    address: "Pune, Maharashtra",
  },
  { name: "Aditya Roy", marks: 79, class: 10, address: "Ahmedabad, Gujarat" },
  {
    name: "Fatima Ahmed",
    marks: 93,
    class: 12,
    address: "Chennai, Tamil Nadu",
  },
  {
    name: "Ritik Sharma",
    marks: 72,
    class: 6,
    address: "Lucknow, Uttar Pradesh",
  },
  { name: "Nusrat Jahan", marks: 95, class: 11, address: "Jaipur, Rajasthan" },
  { name: "Sourav Paul", marks: 68, class: 8, address: "Patna, Bihar" },
  {
    name: "Zoya Khan",
    marks: 84,
    class: 10,
    address: "Bhopal, Madhya Pradesh",
  },
  {
    name: "Vikram Singh",
    marks: 77,
    class: 7,
    address: "Indore, Madhya Pradesh",
  },
  { name: "Ananya Dasgupta", marks: 90, class: 9, address: "Chandigarh" },
  { name: "Imran Hossain", marks: 81, class: 8, address: "Surat, Gujarat" },
  {
    name: "Riya Chakraborty",
    marks: 88,
    class: 12,
    address: "Guwahati, Assam",
  },
  {
    name: "Arvind Mehta",
    marks: 67,
    class: 6,
    address: "Varanasi, Uttar Pradesh",
  },
  { name: "Meher Ali", marks: 92, class: 11, address: "Nagpur, Maharashtra" },
  {
    name: "Shreya Ghosh",
    marks: 85,
    class: 9,
    address: "Noida, Uttar Pradesh",
  },
  { name: "Tanvir Rahman", marks: 74, class: 10, address: "Kochi, Kerala" },
  {
    name: "Divya Sharma",
    marks: 97,
    class: 12,
    address: "Bengaluru, Karnataka",
  },
  {
    name: "Rakesh Patel",
    marks: 63,
    class: 7,
    address: "Visakhapatnam, Andhra Pradesh",
  },
  { name: "Simran Kaur", marks: 82, class: 11, address: "Amritsar, Punjab" },
  { name: "Sayan Dutta", marks: 70, class: 8, address: "Ranchi, Jharkhand" },
  { name: "Niharika Bose", marks: 93, class: 10, address: "Mysuru, Karnataka" },
  {
    name: "Amit Mondal",
    marks: 78,
    class: 9,
    address: "Dehradun, Uttarakhand",
  },
  {
    name: "Sadia Anjum",
    marks: 86,
    class: 12,
    address: "Srinagar, Jammu & Kashmir",
  },
  { name: "Farhan Alam", marks: 89, class: 11, address: "Agra, Uttar Pradesh" },
  { name: "Puja Saha", marks: 94, class: 10, address: "Bhubaneswar, Odisha" },
  {
    name: "Kabir Chatterjee",
    marks: 73,
    class: 7,
    address: "Raipur, Chhattisgarh",
  },
];

const container = document.querySelector(".container");

students.forEach((student) => {
  const card = document.createElement("div");
  card.classList.add("cards");
  card.innerHTML = `
        <p><strong>Student Name: </strong>${student.name}</p>
        <p><strong>Marks: </strong>${student.marks}</p>
        <p><strong>Class: </strong>${student.class}</p>
        <p><strong>Address: </strong>${student.address}</p>
        `;

  container.appendChild(card);
  student.cardElement = card;
});

const search = document.querySelector("input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", () => {
  const searchResults = document.querySelector(".search-results");
  const searchName = search.value.trim().toLowerCase();
  searchResults.innerHTML = `<h2>Showing results of "${searchName}...."</h2>`;
  students.forEach((student) => {
    let subName = student.name.substring(0, searchName.length).toLowerCase();

    student.cardElement.hidden = subName !== searchName;
  });
});

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const searchResults = document.querySelector(".search-results");
    const searchName = search.value.trim().toLowerCase();
    searchResults.innerHTML = `<h2>Showing results of "${searchName}...."</h2>`;
    students.forEach((student) => {
      let subName = student.name.substring(0, searchName.length).toLowerCase();

      student.cardElement.hidden = subName !== searchName;
    });
  }
});
