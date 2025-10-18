const laundryServices = [
    {
        image:
            "https://drycleaningca.com/wp-content/uploads/2025/07/martinizing-wash-fold-img-2048x1224-1-1024x612.jpg",
        name: "Premium Wash & Fold",
        price: 249,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6_k-Drvi-tWu9A_yAcfW5SobRIOAX8coPQ&s",
        name: "Dry Cleaning",
        price: 399,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B8TSumz3hroF5tuFKyQHppRC2uidG4SI5A&s",
        name: "Ironing Service",
        price: 149,
    },
    {
        image:
            "https://clearlineappliances.com/cdn/shop/files/Resize-images_62071e7e-bbc8-40e7-ac15-108491add099_512x512.png?v=1684841920",
        name: "Steam Press",
        price: 199,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLAX04djN_m7lzN6J-saccc9eTIrwNRHEGg&s",
        name: "Curtain & Upholstery Cleaning",
        price: 599,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOFQT2RJZ_zh7ExJ0lUnna4xxEZ4V3Csqeg&s",
        name: "Shoe & Sneaker Cleaning",
        price: 349,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjUo0jwhMC9oFekFWyoizdaVdSCZDeSMMkw&s",
        name: "Bed Sheet & Blanket Wash",
        price: 299,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSdT1zy18SJi3bv0UzPbwcMWcbsnofsXh7Q&s",
        name: "Express 24-Hour Delivery Wash",
        price: 499,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgvxk0BQqvV0nT3Iis28RbZ1K7hsZKHjt6w&s",
        name: "Wedding Dress Cleaning",
        price: 999,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtV1uCgS40r-FNFYVCGGymxwRSLPRBzERdg&s",
        name: "Leather & Jacket Cleaning",
        price: 749,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsPH1oxcAnM-GCd7WQF4z8EWiTXt8pbp9Bw&s",
        name: "Delicate Fabric Care",
        price: 429,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD9ISrUy16Z3o7TJ5CxBk9rqZU7HnH4m0hQ&s",
        name: "Carpet Cleaning",
        price: 899,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCCq3M2uhduu9Rbvoub5iKl-uL0CaPtPjQ&s",
        name: "Stain Removal Service",
        price: 299,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStESih7cVmpMh0qkDf0_P6kgIdZfBapbdVvQ&s",
        name: "Baby Clothes Wash",
        price: 199,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1KZhn37SRMwALEsux-YB6UjM_8VNKlNabQ&s",
        name: "Uniform & Workwear Wash",
        price: 249,
    },
];
let serviceIndex = 0;
let addedItems = [];
let totalAmount = 0;
let serviceItem = document.querySelector(".service-item");
let img = document.querySelector("img");
let h4 = document.querySelector("h4");
let price = document.querySelector(".price");
let skipButton = document.querySelector(".skip-btn");
const addButton = document.querySelector(".add-btn");
const itemListBody = document.getElementById("item-list");
const totalAmountSpan = document.getElementById("total-amount");
const emptyRow = itemListBody.querySelector(".empty-row");
function displayServices() {

    if(laundryServices.length === 0) return;

    const service = laundryServices[serviceIndex];
    h4.textContent = service.name;
    img.setAttribute("src", service.image);
    img.setAttribute("alt", service.name);
    price.textContent = `₹ ${service.price}`;
}
skipButton.addEventListener("click", function () {
    services();
});
