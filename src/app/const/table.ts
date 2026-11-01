import {Icourse, Iprod, Istd, Iemp, Ibook, Icust, Iorder, Imovie, Iteacher, Ivehicle} from "../models/table"

// Create table by using following objects (Employees)

 // 👉  1 
export const empArr: Iemp[] = [
  { empId: 201, empName: 'Aditya Jain', designation: 'Software Engineer', department: 'IT', salary: 52000, isPermanent: true, email: 'aditya.jain@example.com', contact: 9876501234 },
  { empId: 202, empName: 'Ritika Deshmukh', designation: 'Graphic Designer', department: 'Design', salary: 41000, isPermanent: true, email: 'ritika.deshmukh@example.com', contact: 9823456780 },
  { empId: 203, empName: 'Sahil Khan', designation: 'Backend Developer', department: 'IT', salary: 49000, isPermanent: false, email: 'sahil.khan@example.com', contact: 9812309876 },
  { empId: 204, empName: 'Meena Reddy', designation: 'HR Manager', department: 'Human Resources', salary: 65000, isPermanent: true, email: 'meena.reddy@example.com', contact: 9877701122 },
  { empId: 205, empName: 'Ravi Patel', designation: 'QA Tester', department: 'Testing', salary: 42000, isPermanent: true, email: 'ravi.patel@example.com', contact: 9123401111 },
  { empId: 206, empName: 'Shruti Sharma', designation: 'Data Scientist', department: 'Analytics', salary: 72000, isPermanent: true, email: 'shruti.sharma@example.com', contact: 9890112223 },
  { empId: 207, empName: 'Nikhil Bansal', designation: 'Network Admin', department: 'Infrastructure', salary: 46000, isPermanent: false, email: 'nikhil.bansal@example.com', contact: 9811188221 },
  { empId: 208, empName: 'Simran Kaur', designation: 'Recruiter', department: 'HR', salary: 38000, isPermanent: true, email: 'simran.kaur@example.com', contact: 9755511223 },
  { empId: 209, empName: 'Arun Nair', designation: 'DevOps Engineer', department: 'IT', salary: 59000, isPermanent: true, email: 'arun.nair@example.com', contact: 9833309876 },
  { empId: 210, empName: 'Kavya Pillai', designation: 'Technical Writer', department: 'Documentation', salary: 37000, isPermanent: false, email: 'kavya.pillai@example.com', contact: 9900110099 }
];



// 👉 2
export const studentArr: Istd[] = [
  { rollNo: 1, name: 'Rekha Gupta', course: 'BCA', year: '3rd Year', percentage: 88, isPassed: true, email: 'rudrayani@gmail.com', contact: 8930399872 },
  { rollNo: 2, name: 'Anjali Alamkire', course: 'B.Sc IT', year: '2nd Year', percentage: 82, isPassed: true, email: 'anjali@gmail.com', contact: 9460399872 },
  { rollNo: 3, name: 'Pooja Chamle', course: 'BBA', year: '1st Year', percentage: 76, isPassed: true, email: 'pooja@gmail.com', contact: 7260399878 },
  { rollNo: 4, name: 'Sakshi Kalburge', course: 'MBA', year: '2nd Year', percentage: 91, isPassed: true, email: 'sakshi@gmail.com', contact: 9760399872 },
  { rollNo: 5, name: 'Amit Desai', course: 'MCA', year: '1st Year', percentage: 68, isPassed: true, email: 'amit@gmail.com', contact: 9988776655 },
  { rollNo: 6, name: 'Sneha Pawar', course: 'B.Com', year: '3rd Year', percentage: 73, isPassed: true, email: 'sneha@gmail.com', contact: 9786543210 },
  { rollNo: 7, name: 'Rohit Chavan', course: 'B.Sc Physics', year: '2nd Year', percentage: 81, isPassed: true, email: 'rohit@gmail.com', contact: 8899776655 },
  { rollNo: 8, name: 'Tina Joshi', course: 'B.Tech CS', year: '4th Year', percentage: 95, isPassed: true, email: 'tina@gmail.com', contact: 9900332211 },
  { rollNo: 9, name: 'Akash Mane', course: 'BBA', year: '3rd Year', percentage: 67, isPassed: true, email: 'akash@gmail.com', contact: 9811234567 },
  { rollNo: 10, name: 'Nisha Jadhav', course: 'M.Sc Chemistry', year: '2nd Year', percentage: 89, isPassed: true, email: 'nisha@gmail.com', contact: 9700112233 }
];



// 👉 3
export const productArr: Iprod[] = [
  { prodId: 301, prodName: 'Laptop', category: 'Electronics', price: 60000, stock: 25, isAvailable: true, brand: 'Dell' },
  { prodId: 302, prodName: 'Smartphone', category: 'Electronics', price: 35000, stock: 40, isAvailable: true, brand: 'Samsung' },
  { prodId: 303, prodName: 'Headphones', category: 'Accessories', price: 2500, stock: 100, isAvailable: true, brand: 'Sony' },
  { prodId: 304, prodName: 'Watch', category: 'Fashion', price: 5000, stock: 15, isAvailable: false, brand: 'Fossil' },
  { prodId: 305, prodName: 'Keyboard', category: 'Computers', price: 1200, stock: 60, isAvailable: true, brand: 'Logitech' },
  { prodId: 306, prodName: 'Shoes', category: 'Footwear', price: 2500, stock: 30, isAvailable: true, brand: 'Nike' },
  { prodId: 307, prodName: 'Book', category: 'Stationery', price: 300, stock: 200, isAvailable: true, brand: 'Penguin' },
  { prodId: 308, prodName: 'Bag', category: 'Accessories', price: 1500, stock: 50, isAvailable: true, brand: 'Skybags' }
];






// 👉 4
export const courseArr : Icourse[] = [
  { courseId: 101, courseName: 'Web Development', duration: '6 Months', fees: 15000, mode: 'Online', isActive: true, trainer: 'Mr. Ramesh' },
  { courseId: 102, courseName: 'Data Science', duration: '8 Months', fees: 25000, mode: 'Offline', isActive: true, trainer: 'Ms. Anjali' },
  { courseId: 103, courseName: 'UI/UX Design', duration: '4 Months', fees: 12000, mode: 'Online', isActive: true, trainer: 'Mr. Vivek' },
  { courseId: 104, courseName: 'Python Programming', duration: '5 Months', fees: 14000, mode: 'Offline', isActive: true, trainer: 'Ms. Kavya' },
  { courseId: 105, courseName: 'Cloud Computing', duration: '6 Months', fees: 20000, mode: 'Online', isActive: false, trainer: 'Mr. Rahul' },
  { courseId: 106, courseName: 'Machine Learning', duration: '8 Months', fees: 27000, mode: 'Online', isActive: true, trainer: 'Dr. Sneha' },
  { courseId: 107, courseName: 'Ethical Hacking', duration: '3 Months', fees: 10000, mode: 'Offline', isActive: true, trainer: 'Mr. Deepak' },
  { courseId: 108, courseName: 'Digital Marketing', duration: '5 Months', fees: 13000, mode: 'Online', isActive: true, trainer: 'Ms. Neha' }
];




// 👉 5
 export const bookArr : Ibook[] = [
  { bookId: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 499, pages: 208, isAvailable: true, genre: 'Fiction' },
  { bookId: 2, title: 'Atomic Habits', author: 'James Clear', price: 599, pages: 320, isAvailable: true, genre: 'Self Help' },
  { bookId: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 450, pages: 280, isAvailable: false, genre: 'Finance' },
  { bookId: 4, title: 'Deep Work', author: 'Cal Newport', price: 550, pages: 304, isAvailable: true, genre: 'Productivity' },
  { bookId: 5, title: 'Clean Code', author: 'Robert C. Martin', price: 899, pages: 464, isAvailable: true, genre: 'Programming' },
  { bookId: 6, title: 'You Can Win', author: 'Shiv Khera', price: 399, pages: 280, isAvailable: true, genre: 'Motivation' },
  { bookId: 7, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 350, pages: 220, isAvailable: true, genre: 'Biography' },
  { bookId: 8, title: 'Think and Grow Rich', author: 'Napoleon Hill', price: 499, pages: 320, isAvailable: false, genre: 'Success' }
];




// 👉 6
 export const customerArr : Icust[] = [
  { custId: 1, name: 'Rahul Sharma', city: 'Delhi', age: 29, email: 'rahul@gmail.com', isPrime: true, contact: 9876501234 },
  { custId: 2, name: 'Sneha Joshi', city: 'Mumbai', age: 24, email: 'sneha@gmail.com', isPrime: true, contact: 9765432189 },
  { custId: 3, name: 'Amit Patil', city: 'Pune', age: 31, email: 'amit@gmail.com', isPrime: false, contact: 9812345670 },
  { custId: 4, name: 'Divya Rao', city: 'Hyderabad', age: 27, email: 'divya@gmail.com', isPrime: true, contact: 9823456701 },
  { custId: 5, name: 'Karan Mehta', city: 'Bangalore', age: 35, email: 'karan@gmail.com', isPrime: false, contact: 9871234567 },
  { custId: 6, name: 'Nisha Verma', city: 'Jaipur', age: 23, email: 'nisha@gmail.com', isPrime: true, contact: 9955667788 },
  { custId: 7, name: 'Saurabh Jain', city: 'Kolkata', age: 28, email: 'saurabh@gmail.com', isPrime: false, contact: 9876655443 },
  { custId: 8, name: 'Tina Kapoor', city: 'Chennai', age: 30, email: 'tina@gmail.com', isPrime: true, contact: 9900123456 }
];



// 👉 7
 export const orderArr : Iorder[] = [
  { orderId: 501, customerName: 'Rahul Sharma', product: 'Laptop', amount: 60000, status: 'Delivered', date: '2025-10-15' },
  { orderId: 502, customerName: 'Sneha Joshi', product: 'Mobile', amount: 30000, status: 'Pending', date: '2025-10-18' },
  { orderId: 503, customerName: 'Amit Patil', product: 'Shoes', amount: 2500, status: 'Delivered', date: '2025-09-29' },
  { orderId: 504, customerName: 'Divya Rao', product: 'Headphones', amount: 2000, status: 'Cancelled', date: '2025-09-22' },
  { orderId: 505, customerName: 'Karan Mehta', product: 'Keyboard', amount: 1500, status: 'Delivered', date: '2025-10-02' },
  { orderId: 506, customerName: 'Nisha Verma', product: 'Watch', amount: 5000, status: 'Pending', date: '2025-10-05' },
  { orderId: 507, customerName: 'Saurabh Jain', product: 'Mouse', amount: 800, status: 'Delivered', date: '2025-09-15' },
  { orderId: 508, customerName: 'Tina Kapoor', product: 'Bag', amount: 1800, status: 'Delivered', date: '2025-10-01' }
];



// 👉 8
 export const movieArr : Imovie[] = [
  { movieId: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, releaseYear: 2010, isHit: true, language: 'English' },
  { movieId: 2, title: '3 Idiots', genre: 'Comedy', rating: 8.4, releaseYear: 2009, isHit: true, language: 'Hindi' },
  { movieId: 3, title: 'Dangal', genre: 'Drama', rating: 8.5, releaseYear: 2016, isHit: true, language: 'Hindi' },
  { movieId: 4, title: 'Avatar', genre: 'Fantasy', rating: 7.8, releaseYear: 2009, isHit: true, language: 'English' },
  { movieId: 5, title: 'KGF', genre: 'Action', rating: 8.2, releaseYear: 2018, isHit: true, language: 'Kannada' },
  { movieId: 6, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, releaseYear: 2014, isHit: true, language: 'English' },
  { movieId: 7, title: 'Pathaan', genre: 'Action', rating: 7.1, releaseYear: 2023, isHit: false, language: 'Hindi' },
  { movieId: 8, title: 'Pushpa', genre: 'Action', rating: 7.6, releaseYear: 2021, isHit: true, language: 'Telugu' }
];


// 👉 9
 export const teacherArr : Iteacher[] = [
  { teacherId: 11, name: 'Ramesh Kumar', subject: 'Maths', experience: 10, salary: 55000, isFullTime: true, email: 'ramesh@school.com' },
  { teacherId: 12, name: 'Seema Gupta', subject: 'English', experience: 8, salary: 50000, isFullTime: true, email: 'seema@school.com' },
  { teacherId: 13, name: 'Anil Mehta', subject: 'Physics', experience: 12, salary: 60000, isFullTime: true, email: 'anil@school.com' },
  { teacherId: 14, name: 'Kavita Rani', subject: 'Chemistry', experience: 6, salary: 45000, isFullTime: false, email: 'kavita@school.com' },
  { teacherId: 15, name: 'Vivek Sharma', subject: 'Biology', experience: 7, salary: 47000, isFullTime: true, email: 'vivek@school.com' },
  { teacherId: 16, name: 'Nisha Jain', subject: 'Computer', experience: 9, salary: 52000, isFullTime: true, email: 'nisha@school.com' },
  { teacherId: 17, name: 'Arjun Das', subject: 'History', experience: 11, salary: 48000, isFullTime: false, email: 'arjun@school.com' },
  { teacherId: 18, name: 'Sneha Rao', subject: 'Economics', experience: 5, salary: 43000, isFullTime: true, email: 'sneha@school.com' }
];



// 👉 10
export const vehicleArr : Ivehicle[] = [
  { vehicleId: 1, brand: 'Honda', model: 'City', type: 'Car', price: 1200000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 2, brand: 'Hero', model: 'Splendor', type: 'Bike', price: 85000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 3, brand: 'Tata', model: 'Nexon', type: 'SUV', price: 1400000, isAvailable: true, fuel: 'Diesel' },
  { vehicleId: 4, brand: 'Hyundai', model: 'i20', type: 'Car', price: 1000000, isAvailable: false, fuel: 'Petrol' },
  { vehicleId: 5, brand: 'TVS', model: 'Jupiter', type: 'Scooter', price: 90000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 6, brand: 'Bajaj', model: 'Pulsar', type: 'Bike', price: 110000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 7, brand: 'Kia', model: 'Seltos', type: 'SUV', price: 1600000, isAvailable: true, fuel: 'Diesel' },
  { vehicleId: 8, brand: 'Suzuki', model: 'Access', type: 'Scooter', price: 95000, isAvailable: true, fuel: 'Petrol' }
];


// // 👉 11 - Hotels
// export const hotelArr = [
//   { hotelId: 1, name: 'Taj Residency', city: 'Mumbai', rating: 4.8, pricePerNight: 12000, isAvailable: true, rooms: 120, contact: 9810011001 },
//   { hotelId: 2, name: 'The Leela Palace', city: 'Delhi', rating: 4.7, pricePerNight: 15000, isAvailable: true, rooms: 200, contact: 9810011002 },
//   { hotelId: 3, name: 'ITC Grand', city: 'Chennai', rating: 4.5, pricePerNight: 9500, isAvailable: false, rooms: 150, contact: 9810011003 },
//   { hotelId: 4, name: 'Oberoi Udaivilas', city: 'Udaipur', rating: 4.9, pricePerNight: 30000, isAvailable: true, rooms: 80, contact: 9810011004 },
//   { hotelId: 5, name: 'Hyatt Regency', city: 'Pune', rating: 4.3, pricePerNight: 7000, isAvailable: true, rooms: 110, contact: 9810011005 },
//   { hotelId: 6, name: 'Radisson Blu', city: 'Hyderabad', rating: 4.2, pricePerNight: 6500, isAvailable: true, rooms: 95, contact: 9810011006 },
//   { hotelId: 7, name: 'Lemon Tree', city: 'Bangalore', rating: 4.0, pricePerNight: 4500, isAvailable: false, rooms: 70, contact: 9810011007 },
//   { hotelId: 8, name: 'Novotel', city: 'Kolkata', rating: 4.4, pricePerNight: 8000, isAvailable: true, rooms: 130, contact: 9810011008 }
// ];

// // 👉 12 - Doctors
// export const doctorArr = [
//   { doctorId: 1, name: 'Dr. Anil Kapoor', specialization: 'Cardiologist', experience: 15, fees: 1500, isAvailable: true, hospital: 'Apollo', email: 'anil.kapoor@hospital.com' },
//   { doctorId: 2, name: 'Dr. Sunita Rao', specialization: 'Dermatologist', experience: 10, fees: 1000, isAvailable: true, hospital: 'Fortis', email: 'sunita.rao@hospital.com' },
//   { doctorId: 3, name: 'Dr. Rajesh Iyer', specialization: 'Neurologist', experience: 18, fees: 2000, isAvailable: false, hospital: 'AIIMS', email: 'rajesh.iyer@hospital.com' },
//   { doctorId: 4, name: 'Dr. Meera Nair', specialization: 'Pediatrician', experience: 8, fees: 800, isAvailable: true, hospital: 'Manipal', email: 'meera.nair@hospital.com' },
//   { doctorId: 5, name: 'Dr. Vikram Singh', specialization: 'Orthopedic', experience: 12, fees: 1200, isAvailable: true, hospital: 'Max', email: 'vikram.singh@hospital.com' },
//   { doctorId: 6, name: 'Dr. Pooja Desai', specialization: 'Gynecologist', experience: 14, fees: 1300, isAvailable: true, hospital: 'Apollo', email: 'pooja.desai@hospital.com' },
//   { doctorId: 7, name: 'Dr. Suresh Menon', specialization: 'ENT', experience: 9, fees: 900, isAvailable: false, hospital: 'Fortis', email: 'suresh.menon@hospital.com' },
//   { doctorId: 8, name: 'Dr. Neha Joshi', specialization: 'Dentist', experience: 6, fees: 600, isAvailable: true, hospital: 'Clove', email: 'neha.joshi@hospital.com' }
// ];

// // 👉 13 - Restaurants
// export const restaurantArr = [
//   { restId: 1, name: 'Barbeque Nation', cuisine: 'Barbecue', city: 'Pune', rating: 4.4, avgCost: 1200, isOpen: true, isVeg: false },
//   { restId: 2, name: 'Haldiram', cuisine: 'North Indian', city: 'Delhi', rating: 4.2, avgCost: 500, isOpen: true, isVeg: true },
//   { restId: 3, name: 'Paradise Biryani', cuisine: 'Hyderabadi', city: 'Hyderabad', rating: 4.5, avgCost: 700, isOpen: true, isVeg: false },
//   { restId: 4, name: 'Saravana Bhavan', cuisine: 'South Indian', city: 'Chennai', rating: 4.3, avgCost: 400, isOpen: false, isVeg: true },
//   { restId: 5, name: 'Leopold Cafe', cuisine: 'Continental', city: 'Mumbai', rating: 4.1, avgCost: 900, isOpen: true, isVeg: false },
//   { restId: 6, name: 'Karims', cuisine: 'Mughlai', city: 'Delhi', rating: 4.4, avgCost: 600, isOpen: true, isVeg: false },
//   { restId: 7, name: 'Gujarati Thali House', cuisine: 'Gujarati', city: 'Ahmedabad', rating: 4.0, avgCost: 450, isOpen: true, isVeg: true },
//   { restId: 8, name: 'Pizza Hub', cuisine: 'Italian', city: 'Bangalore', rating: 3.9, avgCost: 800, isOpen: false, isVeg: false }
// ];

// // 👉 14 - Banks / Accounts
// export const accountArr = [
//   { accNo: 100101, holderName: 'Rohan Verma', bank: 'SBI', accType: 'Savings', balance: 85000, isActive: true, branch: 'Pune' },
//   { accNo: 100102, holderName: 'Priya Shah', bank: 'HDFC', accType: 'Current', balance: 450000, isActive: true, branch: 'Mumbai' },
//   { accNo: 100103, holderName: 'Manoj Tiwari', bank: 'ICICI', accType: 'Savings', balance: 23000, isActive: true, branch: 'Delhi' },
//   { accNo: 100104, holderName: 'Swati Kulkarni', bank: 'Axis', accType: 'Savings', balance: 120000, isActive: false, branch: 'Nagpur' },
//   { accNo: 100105, holderName: 'Deepak Yadav', bank: 'PNB', accType: 'Current', balance: 310000, isActive: true, branch: 'Lucknow' },
//   { accNo: 100106, holderName: 'Anita Bose', bank: 'SBI', accType: 'Savings', balance: 56000, isActive: true, branch: 'Kolkata' },
//   { accNo: 100107, holderName: 'Farhan Ali', bank: 'HDFC', accType: 'Savings', balance: 9500, isActive: true, branch: 'Hyderabad' },
//   { accNo: 100108, holderName: 'Lata Menon', bank: 'Kotak', accType: 'Current', balance: 275000, isActive: false, branch: 'Kochi' }
// ];

// // 👉 15 - Flights
// export const flightArr = [
//   { flightId: 'AI101', airline: 'Air India', from: 'Delhi', to: 'Mumbai', price: 5500, duration: '2h 10m', isDirect: true, seats: 45 },
//   { flightId: '6E202', airline: 'IndiGo', from: 'Pune', to: 'Bangalore', price: 3800, duration: '1h 30m', isDirect: true, seats: 60 },
//   { flightId: 'SG303', airline: 'SpiceJet', from: 'Hyderabad', to: 'Kolkata', price: 4500, duration: '2h 05m', isDirect: true, seats: 30 },
//   { flightId: 'UK404', airline: 'Vistara', from: 'Mumbai', to: 'Chennai', price: 6200, duration: '1h 55m', isDirect: true, seats: 25 },
//   { flightId: 'AI505', airline: 'Air India', from: 'Delhi', to: 'Goa', price: 7800, duration: '4h 20m', isDirect: false, seats: 18 },
//   { flightId: '6E606', airline: 'IndiGo', from: 'Jaipur', to: 'Pune', price: 4100, duration: '2h 00m', isDirect: true, seats: 52 },
//   { flightId: 'SG707', airline: 'SpiceJet', from: 'Chennai', to: 'Delhi', price: 6900, duration: '2h 50m', isDirect: true, seats: 0 },
//   { flightId: 'UK808', airline: 'Vistara', from: 'Bangalore', to: 'Mumbai', price: 5100, duration: '1h 45m', isDirect: true, seats: 33 }
// ];

// // 👉 16 - Employees Projects
// export const projectArr = [
//   { projectId: 1, title: 'E-Commerce Portal', client: 'Reliance', budget: 1500000, status: 'In Progress', teamSize: 8, isCritical: true, deadline: '2026-12-31' },
//   { projectId: 2, title: 'HR Management System', client: 'TCS', budget: 900000, status: 'Completed', teamSize: 5, isCritical: false, deadline: '2026-08-15' },
//   { projectId: 3, title: 'Mobile Banking App', client: 'HDFC', budget: 2500000, status: 'In Progress', teamSize: 12, isCritical: true, deadline: '2027-02-28' },
//   { projectId: 4, title: 'Learning Platform', client: 'Byjus', budget: 1100000, status: 'On Hold', teamSize: 6, isCritical: false, deadline: '2027-01-10' },
//   { projectId: 5, title: 'Inventory Tracker', client: 'Tata Motors', budget: 700000, status: 'Completed', teamSize: 4, isCritical: false, deadline: '2026-06-30' },
//   { projectId: 6, title: 'Analytics Dashboard', client: 'Infosys', budget: 1300000, status: 'In Progress', teamSize: 7, isCritical: true, deadline: '2026-12-15' },
//   { projectId: 7, title: 'CRM Tool', client: 'Wipro', budget: 800000, status: 'Planning', teamSize: 3, isCritical: false, deadline: '2027-03-31' },
//   { projectId: 8, title: 'Payment Gateway', client: 'Paytm', budget: 3000000, status: 'In Progress', teamSize: 15, isCritical: true, deadline: '2027-01-31' }
// ];

// // 👉 17 - Cities
// export const cityArr = [
//   { cityId: 1, name: 'Mumbai', state: 'Maharashtra', population: 20400000, isMetro: true, pincode: 400001, famousFor: 'Bollywood' },
//   { cityId: 2, name: 'Delhi', state: 'Delhi', population: 16800000, isMetro: true, pincode: 110001, famousFor: 'India Gate' },
//   { cityId: 3, name: 'Bangalore', state: 'Karnataka', population: 12300000, isMetro: true, pincode: 560001, famousFor: 'IT Hub' },
//   { cityId: 4, name: 'Hyderabad', state: 'Telangana', population: 10000000, isMetro: true, pincode: 500001, famousFor: 'Biryani' },
//   { cityId: 5, name: 'Pune', state: 'Maharashtra', population: 7400000, isMetro: false, pincode: 411001, famousFor: 'Education' },
//   { cityId: 6, name: 'Jaipur', state: 'Rajasthan', population: 4100000, isMetro: false, pincode: 302001, famousFor: 'Pink City' },
//   { cityId: 7, name: 'Kolkata', state: 'West Bengal', population: 14900000, isMetro: true, pincode: 700001, famousFor: 'Sweets' },
//   { cityId: 8, name: 'Nagpur', state: 'Maharashtra', population: 2900000, isMetro: false, pincode: 440001, famousFor: 'Oranges' }
// ];

// // 👉 18 - Mobile Phones
// export const mobileArr = [
//   { mobileId: 1, brand: 'Apple', model: 'iPhone 15', price: 79900, ram: 6, storage: 128, isAvailable: true, os: 'iOS' },
//   { mobileId: 2, brand: 'Samsung', model: 'Galaxy S24', price: 74999, ram: 8, storage: 256, isAvailable: true, os: 'Android' },
//   { mobileId: 3, brand: 'OnePlus', model: '12', price: 64999, ram: 12, storage: 256, isAvailable: true, os: 'Android' },
//   { mobileId: 4, brand: 'Xiaomi', model: 'Redmi Note 13', price: 17999, ram: 8, storage: 128, isAvailable: true, os: 'Android' },
//   { mobileId: 5, brand: 'Realme', model: 'Narzo 70', price: 14999, ram: 6, storage: 128, isAvailable: false, os: 'Android' },
//   { mobileId: 6, brand: 'Google', model: 'Pixel 8', price: 75999, ram: 8, storage: 128, isAvailable: true, os: 'Android' },
//   { mobileId: 7, brand: 'Vivo', model: 'V30', price: 33999, ram: 8, storage: 256, isAvailable: true, os: 'Android' },
//   { mobileId: 8, brand: 'Oppo', model: 'Reno 11', price: 29999, ram: 8, storage: 128, isAvailable: false, os: 'Android' }
// ];

// // 👉 19 - Libraries / Members
// export const memberArr = [
//   { memberId: 1, name: 'Aarav Mehta', age: 22, membership: 'Gold', booksIssued: 3, isActive: true, joinDate: '2024-01-15', email: 'aarav@mail.com' },
//   { memberId: 2, name: 'Diya Sharma', age: 19, membership: 'Silver', booksIssued: 1, isActive: true, joinDate: '2024-03-20', email: 'diya@mail.com' },
//   { memberId: 3, name: 'Kabir Singh', age: 28, membership: 'Platinum', booksIssued: 5, isActive: true, joinDate: '2023-11-05', email: 'kabir@mail.com' },
//   { memberId: 4, name: 'Ishita Roy', age: 25, membership: 'Gold', booksIssued: 2, isActive: false, joinDate: '2023-07-12', email: 'ishita@mail.com' },
//   { memberId: 5, name: 'Vihaan Kulkarni', age: 31, membership: 'Silver', booksIssued: 0, isActive: true, joinDate: '2025-02-01', email: 'vihaan@mail.com' },
//   { memberId: 6, name: 'Myra Pillai', age: 21, membership: 'Gold', booksIssued: 4, isActive: true, joinDate: '2024-09-18', email: 'myra@mail.com' },
//   { memberId: 7, name: 'Arjun Reddy', age: 35, membership: 'Platinum', booksIssued: 6, isActive: true, joinDate: '2022-05-25', email: 'arjun@mail.com' },
//   { memberId: 8, name: 'Saanvi Das', age: 18, membership: 'Silver', booksIssued: 2, isActive: false, joinDate: '2025-06-30', email: 'saanvi@mail.com' }
// ];

// // 👉 20 - Gym Members
// export const gymArr = [
//   { gymId: 1, name: 'Rohit Sharma', age: 27, plan: 'Monthly', fees: 1500, trainer: 'Sandeep', isActive: true, weight: 78 },
//   { gymId: 2, name: 'Neha Kapoor', age: 24, plan: 'Quarterly', fees: 4000, trainer: 'Priya', isActive: true, weight: 58 },
//   { gymId: 3, name: 'Varun Joshi', age: 30, plan: 'Yearly', fees: 14000, trainer: 'Sandeep', isActive: true, weight: 85 },
//   { gymId: 4, name: 'Anjali Verma', age: 22, plan: 'Monthly', fees: 1500, trainer: 'Priya', isActive: false, weight: 54 },
//   { gymId: 5, name: 'Sagar Patil', age: 33, plan: 'Half Yearly', fees: 8000, trainer: 'Rahul', isActive: true, weight: 90 },
//   { gymId: 6, name: 'Kriti Rao', age: 26, plan: 'Quarterly', fees: 4000, trainer: 'Rahul', isActive: true, weight: 60 },
//   { gymId: 7, name: 'Manish Gupta', age: 38, plan: 'Yearly', fees: 14000, trainer: 'Sandeep', isActive: false, weight: 88 },
//   { gymId: 8, name: 'Pallavi Nair', age: 29, plan: 'Monthly', fees: 1500, trainer: 'Priya', isActive: true, weight: 62 }
// ];

// // 👉 21 - Cars (Showroom)
// export const carArr = [
//   { carId: 1, brand: 'Maruti', model: 'Swift', year: 2024, price: 650000, mileage: 22, fuel: 'Petrol', isAvailable: true },
//   { carId: 2, brand: 'Hyundai', model: 'Creta', year: 2025, price: 1300000, mileage: 17, fuel: 'Diesel', isAvailable: true },
//   { carId: 3, brand: 'Mahindra', model: 'Thar', year: 2024, price: 1500000, mileage: 15, fuel: 'Diesel', isAvailable: false },
//   { carId: 4, brand: 'Tata', model: 'Punch', year: 2025, price: 700000, mileage: 20, fuel: 'Petrol', isAvailable: true },
//   { carId: 5, brand: 'Toyota', model: 'Fortuner', year: 2024, price: 3400000, mileage: 12, fuel: 'Diesel', isAvailable: true },
//   { carId: 6, brand: 'Honda', model: 'Amaze', year: 2023, price: 800000, mileage: 19, fuel: 'Petrol', isAvailable: true },
//   { carId: 7, brand: 'Tata', model: 'Nexon EV', year: 2025, price: 1600000, mileage: 0, fuel: 'Electric', isAvailable: true },
//   { carId: 8, brand: 'Kia', model: 'Sonet', year: 2024, price: 1100000, mileage: 18, fuel: 'Petrol', isAvailable: false }
// ];

// // 👉 22 - Colleges
// export const collegeArr = [
//   { collegeId: 1, name: 'IIT Bombay', city: 'Mumbai', type: 'Government', established: 1958, fees: 220000, rating: 4.9, isAutonomous: true },
//   { collegeId: 2, name: 'COEP', city: 'Pune', type: 'Government', established: 1854, fees: 90000, rating: 4.5, isAutonomous: true },
//   { collegeId: 3, name: 'VIT', city: 'Vellore', type: 'Private', established: 1984, fees: 198000, rating: 4.4, isAutonomous: true },
//   { collegeId: 4, name: 'MIT WPU', city: 'Pune', type: 'Private', established: 1983, fees: 250000, rating: 4.2, isAutonomous: false },
//   { collegeId: 5, name: 'BITS Pilani', city: 'Pilani', type: 'Private', established: 1964, fees: 500000, rating: 4.7, isAutonomous: true },
//   { collegeId: 6, name: 'NIT Trichy', city: 'Trichy', type: 'Government', established: 1964, fees: 150000, rating: 4.6, isAutonomous: true },
//   { collegeId: 7, name: 'SPPU', city: 'Pune', type: 'Government', established: 1949, fees: 40000, rating: 4.1, isAutonomous: false },
//   { collegeId: 8, name: 'Symbiosis', city: 'Pune', type: 'Private', established: 1971, fees: 300000, rating: 4.3, isAutonomous: false }
// ];

// // 👉 23 - Cricketers
// export const cricketerArr = [
//   { playerId: 1, name: 'Virat Kohli', role: 'Batsman', team: 'India', matches: 295, runs: 13906, isActive: true, jerseyNo: 18 },
//   { playerId: 2, name: 'Rohit Sharma', role: 'Batsman', team: 'India', matches: 273, runs: 11168, isActive: true, jerseyNo: 45 },
//   { playerId: 3, name: 'Jasprit Bumrah', role: 'Bowler', team: 'India', matches: 89, runs: 100, isActive: true, jerseyNo: 93 },
//   { playerId: 4, name: 'Ravindra Jadeja', role: 'All-rounder', team: 'India', matches: 197, runs: 2756, isActive: true, jerseyNo: 8 },
//   { playerId: 5, name: 'MS Dhoni', role: 'Wicketkeeper', team: 'India', matches: 350, runs: 10773, isActive: false, jerseyNo: 7 },
//   { playerId: 6, name: 'KL Rahul', role: 'Wicketkeeper', team: 'India', matches: 77, runs: 2851, isActive: true, jerseyNo: 1 },
//   { playerId: 7, name: 'Mohammed Shami', role: 'Bowler', team: 'India', matches: 101, runs: 200, isActive: true, jerseyNo: 11 },
//   { playerId: 8, name: 'Hardik Pandya', role: 'All-rounder', team: 'India', matches: 94, runs: 1769, isActive: true, jerseyNo: 33 }
// ];

// // 👉 24 - Subjects
// export const subjectArr = [
//   { subjectId: 1, name: 'Mathematics', code: 'MTH101', credits: 4, semester: 1, isElective: false, faculty: 'Dr. Rao' },
//   { subjectId: 2, name: 'Physics', code: 'PHY101', credits: 4, semester: 1, isElective: false, faculty: 'Dr. Iyer' },
//   { subjectId: 3, name: 'Data Structures', code: 'CS201', credits: 3, semester: 3, isElective: false, faculty: 'Prof. Mehta' },
//   { subjectId: 4, name: 'Machine Learning', code: 'CS401', credits: 3, semester: 7, isElective: true, faculty: 'Dr. Kapoor' },
//   { subjectId: 5, name: 'Database Systems', code: 'CS301', credits: 4, semester: 5, isElective: false, faculty: 'Prof. Sharma' },
//   { subjectId: 6, name: 'Cloud Computing', code: 'CS402', credits: 3, semester: 7, isElective: true, faculty: 'Dr. Nair' },
//   { subjectId: 7, name: 'Economics', code: 'ECO101', credits: 2, semester: 2, isElective: true, faculty: 'Prof. Das' },
//   { subjectId: 8, name: 'Operating Systems', code: 'CS302', credits: 4, semester: 5, isElective: false, faculty: 'Dr. Joshi' }
// ];

// // 👉 25 - Laptops
// export const laptopArr = [
//   { laptopId: 1, brand: 'Dell', model: 'Inspiron 15', price: 55000, ram: 16, processor: 'Intel i5', isAvailable: true, warranty: 1 },
//   { laptopId: 2, brand: 'HP', model: 'Pavilion', price: 62000, ram: 16, processor: 'Intel i7', isAvailable: true, warranty: 2 },
//   { laptopId: 3, brand: 'Apple', model: 'MacBook Air M2', price: 99000, ram: 8, processor: 'M2', isAvailable: true, warranty: 1 },
//   { laptopId: 4, brand: 'Lenovo', model: 'ThinkPad E14', price: 68000, ram: 16, processor: 'Ryzen 5', isAvailable: false, warranty: 3 },
//   { laptopId: 5, brand: 'Asus', model: 'VivoBook', price: 45000, ram: 8, processor: 'Intel i3', isAvailable: true, warranty: 1 },
//   { laptopId: 6, brand: 'Acer', model: 'Aspire 7', price: 52000, ram: 16, processor: 'Ryzen 5', isAvailable: true, warranty: 1 },
//   { laptopId: 7, brand: 'MSI', model: 'Katana', price: 95000, ram: 16, processor: 'Intel i7', isAvailable: false, warranty: 2 },
//   { laptopId: 8, brand: 'Dell', model: 'XPS 13', price: 125000, ram: 16, processor: 'Intel i7', isAvailable: true, warranty: 2 }
// ];

// // 👉 26 - Appliances
// export const applianceArr = [
//   { appId: 1, name: 'Refrigerator', brand: 'LG', price: 32000, warranty: 2, energyRating: 4, isAvailable: true, category: 'Kitchen' },
//   { appId: 2, name: 'Washing Machine', brand: 'Samsung', price: 28000, warranty: 2, energyRating: 5, isAvailable: true, category: 'Laundry' },
//   { appId: 3, name: 'Microwave', brand: 'IFB', price: 11000, warranty: 1, energyRating: 3, isAvailable: true, category: 'Kitchen' },
//   { appId: 4, name: 'Air Conditioner', brand: 'Daikin', price: 42000, warranty: 5, energyRating: 5, isAvailable: false, category: 'Cooling' },
//   { appId: 5, name: 'Television', brand: 'Sony', price: 55000, warranty: 2, energyRating: 4, isAvailable: true, category: 'Entertainment' },
//   { appId: 6, name: 'Water Purifier', brand: 'Kent', price: 15000, warranty: 1, energyRating: 3, isAvailable: true, category: 'Kitchen' },
//   { appId: 7, name: 'Ceiling Fan', brand: 'Havells', price: 3200, warranty: 2, energyRating: 5, isAvailable: true, category: 'Cooling' },
//   { appId: 8, name: 'Induction Cooktop', brand: 'Philips', price: 4500, warranty: 1, energyRating: 4, isAvailable: false, category: 'Kitchen' }
// ];

// // 👉 27 - Events
// export const eventArr = [
//   { eventId: 1, title: 'Tech Conference 2026', city: 'Bangalore', date: '2026-12-05', ticketPrice: 2500, seats: 500, isSoldOut: false, organizer: 'TechIndia' },
//   { eventId: 2, title: 'Music Fest', city: 'Goa', date: '2026-12-20', ticketPrice: 4000, seats: 2000, isSoldOut: false, organizer: 'SunBurn' },
//   { eventId: 3, title: 'Startup Summit', city: 'Mumbai', date: '2026-11-18', ticketPrice: 1500, seats: 300, isSoldOut: true, organizer: 'StartupHub' },
//   { eventId: 4, title: 'Food Carnival', city: 'Delhi', date: '2026-11-25', ticketPrice: 500, seats: 1000, isSoldOut: false, organizer: 'FoodieClub' },
//   { eventId: 5, title: 'Book Fair', city: 'Kolkata', date: '2027-01-10', ticketPrice: 100, seats: 5000, isSoldOut: false, organizer: 'BookGuild' },
//   { eventId: 6, title: 'Marathon', city: 'Pune', date: '2026-12-12', ticketPrice: 800, seats: 3000, isSoldOut: false, organizer: 'RunPune' },
//   { eventId: 7, title: 'Comedy Night', city: 'Hyderabad', date: '2026-11-30', ticketPrice: 1200, seats: 250, isSoldOut: true, organizer: 'LaughLab' },
//   { eventId: 8, title: 'Art Exhibition', city: 'Jaipur', date: '2027-01-22', ticketPrice: 300, seats: 400, isSoldOut: false, organizer: 'ArtWorld' }
// ];

// // 👉 28 - Software Companies
// export const companyArr = [
//   { companyId: 1, name: 'TCS', headquarters: 'Mumbai', employees: 600000, founded: 1968, revenueCr: 240000, isPublic: true, sector: 'IT Services' },
//   { companyId: 2, name: 'Infosys', headquarters: 'Bangalore', employees: 320000, founded: 1981, revenueCr: 155000, isPublic: true, sector: 'IT Services' },
//   { companyId: 3, name: 'Wipro', headquarters: 'Bangalore', employees: 230000, founded: 1945, revenueCr: 90000, isPublic: true, sector: 'IT Services' },
//   { companyId: 4, name: 'Zoho', headquarters: 'Chennai', employees: 18000, founded: 1996, revenueCr: 8000, isPublic: false, sector: 'SaaS' },
//   { companyId: 5, name: 'Freshworks', headquarters: 'Chennai', employees: 5000, founded: 2010, revenueCr: 3500, isPublic: true, sector: 'SaaS' },
//   { companyId: 6, name: 'Flipkart', headquarters: 'Bangalore', employees: 22000, founded: 2007, revenueCr: 70000, isPublic: false, sector: 'E-Commerce' },
//   { companyId: 7, name: 'Persistent', headquarters: 'Pune', employees: 23000, founded: 1990, revenueCr: 10000, isPublic: true, sector: 'IT Services' },
//   { companyId: 8, name: 'Razorpay', headquarters: 'Bangalore', employees: 3500, founded: 2014, revenueCr: 2500, isPublic: false, sector: 'FinTech' }
// ];

// // 👉 29 - Grocery Items
// export const groceryArr = [
//   { itemId: 1, name: 'Basmati Rice', category: 'Grains', price: 120, unit: 'kg', stock: 500, isOrganic: false, brand: 'India Gate' },
//   { itemId: 2, name: 'Toor Dal', category: 'Pulses', price: 160, unit: 'kg', stock: 300, isOrganic: false, brand: 'Tata Sampann' },
//   { itemId: 3, name: 'Milk', category: 'Dairy', price: 60, unit: 'litre', stock: 200, isOrganic: false, brand: 'Amul' },
//   { itemId: 4, name: 'Almonds', category: 'Dry Fruits', price: 900, unit: 'kg', stock: 80, isOrganic: true, brand: 'Happilo' },
//   { itemId: 5, name: 'Olive Oil', category: 'Oils', price: 750, unit: 'litre', stock: 60, isOrganic: true, brand: 'Figaro' },
//   { itemId: 6, name: 'Wheat Flour', category: 'Grains', price: 45, unit: 'kg', stock: 800, isOrganic: false, brand: 'Aashirvaad' },
//   { itemId: 7, name: 'Honey', category: 'Spreads', price: 350, unit: 'bottle', stock: 90, isOrganic: true, brand: 'Dabur' },
//   { itemId: 8, name: 'Tea Powder', category: 'Beverages', price: 280, unit: 'kg', stock: 150, isOrganic: false, brand: 'Tata Tea' }
// ];

// // 👉 30 - Hospitals
// export const hospitalArr = [
//   { hospitalId: 1, name: 'Apollo Hospital', city: 'Chennai', beds: 700, type: 'Private', rating: 4.6, hasEmergency: true, established: 1983 },
//   { hospitalId: 2, name: 'AIIMS', city: 'Delhi', beds: 2500, type: 'Government', rating: 4.8, hasEmergency: true, established: 1956 },
//   { hospitalId: 3, name: 'Fortis', city: 'Mumbai', beds: 400, type: 'Private', rating: 4.3, hasEmergency: true, established: 2001 },
//   { hospitalId: 4, name: 'Ruby Hall', city: 'Pune', beds: 550, type: 'Private', rating: 4.4, hasEmergency: true, established: 1959 },
//   { hospitalId: 5, name: 'Manipal', city: 'Bangalore', beds: 600, type: 'Private', rating: 4.5, hasEmergency: true, established: 1991 },
//   { hospitalId: 6, name: 'Sassoon', city: 'Pune', beds: 1296, type: 'Government', rating: 3.9, hasEmergency: true, established: 1867 },
//   { hospitalId: 7, name: 'Care Clinic', city: 'Nagpur', beds: 50, type: 'Private', rating: 4.0, hasEmergency: false, established: 2015 },
//   { hospitalId: 8, name: 'Max Healthcare', city: 'Delhi', beds: 500, type: 'Private', rating: 4.5, hasEmergency: true, established: 2000 }
// ];

// // 👉 31 - Songs
// export const songArr = [
//   { songId: 1, title: 'Kesariya', artist: 'Arijit Singh', album: 'Brahmastra', duration: 4.28, year: 2022, genre: 'Romantic', isPopular: true },
//   { songId: 2, title: 'Chaiyya Chaiyya', artist: 'Sukhwinder Singh', album: 'Dil Se', duration: 6.45, year: 1998, genre: 'Dance', isPopular: true },
//   { songId: 3, title: 'Tum Hi Ho', artist: 'Arijit Singh', album: 'Aashiqui 2', duration: 4.22, year: 2013, genre: 'Romantic', isPopular: true },
//   { songId: 4, title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam', album: 'Kal Ho Naa Ho', duration: 5.18, year: 2003, genre: 'Emotional', isPopular: true },
//   { songId: 5, title: 'Zingaat', artist: 'Ajay-Atul', album: 'Sairat', duration: 4.05, year: 2016, genre: 'Folk', isPopular: true },
//   { songId: 6, title: 'Apna Time Aayega', artist: 'Ranveer Singh', album: 'Gully Boy', duration: 3.34, year: 2019, genre: 'Hip-Hop', isPopular: true },
//   { songId: 7, title: 'Srivalli', artist: 'Javed Ali', album: 'Pushpa', duration: 3.43, year: 2021, genre: 'Romantic', isPopular: true },
//   { songId: 8, title: 'Naatu Naatu', artist: 'Rahul Sipligunj', album: 'RRR', duration: 3.36, year: 2022, genre: 'Dance', isPopular: false }
// ];

// // 👉 32 - Bikes
// export const bikeArr = [
//   { bikeId: 1, brand: 'Royal Enfield', model: 'Classic 350', price: 195000, cc: 349, mileage: 35, isAvailable: true, color: 'Black' },
//   { bikeId: 2, brand: 'Yamaha', model: 'R15 V4', price: 185000, cc: 155, mileage: 45, isAvailable: true, color: 'Blue' },
//   { bikeId: 3, brand: 'KTM', model: 'Duke 200', price: 195000, cc: 199, mileage: 35, isAvailable: false, color: 'Orange' },
//   { bikeId: 4, brand: 'Honda', model: 'Shine', price: 85000, cc: 124, mileage: 60, isAvailable: true, color: 'Red' },
//   { bikeId: 5, brand: 'Bajaj', model: 'Pulsar NS200', price: 150000, cc: 199, mileage: 40, isAvailable: true, color: 'Black' },
//   { bikeId: 6, brand: 'TVS', model: 'Apache RTR 160', price: 125000, cc: 160, mileage: 47, isAvailable: true, color: 'White' },
//   { bikeId: 7, brand: 'Hero', model: 'Xtreme 160R', price: 120000, cc: 163, mileage: 55, isAvailable: true, color: 'Grey' },
//   { bikeId: 8, brand: 'Suzuki', model: 'Gixxer', price: 140000, cc: 155, mileage: 45, isAvailable: false, color: 'Blue' }
// ];

// // 👉 33 - Tourist Places
// export const placeArr = [
//   { placeId: 1, name: 'Taj Mahal', city: 'Agra', state: 'Uttar Pradesh', entryFee: 1100, rating: 4.9, bestSeason: 'Winter', isUnesco: true },
//   { placeId: 2, name: 'Gateway of India', city: 'Mumbai', state: 'Maharashtra', entryFee: 0, rating: 4.5, bestSeason: 'Winter', isUnesco: false },
//   { placeId: 3, name: 'Hawa Mahal', city: 'Jaipur', state: 'Rajasthan', entryFee: 200, rating: 4.4, bestSeason: 'Winter', isUnesco: false },
//   { placeId: 4, name: 'Ajanta Caves', city: 'Aurangabad', state: 'Maharashtra', entryFee: 600, rating: 4.7, bestSeason: 'Monsoon', isUnesco: true },
//   { placeId: 5, name: 'Golden Temple', city: 'Amritsar', state: 'Punjab', entryFee: 0, rating: 4.9, bestSeason: 'Winter', isUnesco: false },
//   { placeId: 6, name: 'Hampi', city: 'Hampi', state: 'Karnataka', entryFee: 600, rating: 4.6, bestSeason: 'Winter', isUnesco: true },
//   { placeId: 7, name: 'Munnar', city: 'Munnar', state: 'Kerala', entryFee: 0, rating: 4.7, bestSeason: 'Monsoon', isUnesco: false },
//   { placeId: 8, name: 'Red Fort', city: 'Delhi', state: 'Delhi', entryFee: 600, rating: 4.5, bestSeason: 'Winter', isUnesco: true }
// ];

// // 👉 34 - Transactions
// export const transactionArr = [
//   { txnId: 'TXN001', accountHolder: 'Rohan Verma', type: 'Credit', amount: 25000, mode: 'UPI', status: 'Success', date: '2026-10-01' },
//   { txnId: 'TXN002', accountHolder: 'Priya Shah', type: 'Debit', amount: 12000, mode: 'NEFT', status: 'Success', date: '2026-10-03' },
//   { txnId: 'TXN003', accountHolder: 'Manoj Tiwari', type: 'Debit', amount: 3500, mode: 'Card', status: 'Failed', date: '2026-10-05' },
//   { txnId: 'TXN004', accountHolder: 'Swati Kulkarni', type: 'Credit', amount: 50000, mode: 'IMPS', status: 'Success', date: '2026-10-08' },
//   { txnId: 'TXN005', accountHolder: 'Deepak Yadav', type: 'Debit', amount: 8000, mode: 'UPI', status: 'Pending', date: '2026-10-10' },
//   { txnId: 'TXN006', accountHolder: 'Anita Bose', type: 'Credit', amount: 15000, mode: 'Cheque', status: 'Success', date: '2026-10-12' },
//   { txnId: 'TXN007', accountHolder: 'Farhan Ali', type: 'Debit', amount: 2200, mode: 'UPI', status: 'Success', date: '2026-10-15' },
//   { txnId: 'TXN008', accountHolder: 'Lata Menon', type: 'Debit', amount: 70000, mode: 'RTGS', status: 'Success', date: '2026-10-18' }
// ];

// // 👉 35 - Tasks
// export const taskArr = [
//   { taskId: 1, title: 'Design Login Page', assignedTo: 'Ritika', priority: 'High', status: 'In Progress', dueDate: '2026-11-05', isCompleted: false },
//   { taskId: 2, title: 'Setup Database', assignedTo: 'Sahil', priority: 'High', status: 'Completed', dueDate: '2026-10-25', isCompleted: true },
//   { taskId: 3, title: 'Write API Docs', assignedTo: 'Kavya', priority: 'Medium', status: 'Pending', dueDate: '2026-11-10', isCompleted: false },
//   { taskId: 4, title: 'Fix Navbar Bug', assignedTo: 'Aditya', priority: 'Low', status: 'Completed', dueDate: '2026-10-28', isCompleted: true },
//   { taskId: 5, title: 'Deploy to Staging', assignedTo: 'Arun', priority: 'High', status: 'In Progress', dueDate: '2026-11-08', isCompleted: false },
//   { taskId: 6, title: 'Unit Testing', assignedTo: 'Ravi', priority: 'Medium', status: 'Pending', dueDate: '2026-11-12', isCompleted: false },
//   { taskId: 7, title: 'Code Review', assignedTo: 'Shruti', priority: 'Medium', status: 'Completed', dueDate: '2026-10-30', isCompleted: true },
//   { taskId: 8, title: 'Client Demo Prep', assignedTo: 'Meena', priority: 'High', status: 'Pending', dueDate: '2026-11-15', isCompleted: false }
// ];