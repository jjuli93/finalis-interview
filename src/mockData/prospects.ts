import { Prospect } from "@/types/Prospect";

export const prospects: Prospect[] = [
  {
    id: "bd0a35e8-2166-46af-ae7c-771c8d118d61",
    bankAccountNumber: "123456789 1234567890123 1234",
    bankName: "CitiBank",
    birthDate: new Date("04/03/1975"),
    city: "San Francisco",
    country: "USA",
    document: "123456789",
    email: "bryan.c.levy@gmail.com",
    fullAddress: "109 San Anselmo Ave S, San Bruno, CA 94066, USA",
    location: {
      lat: 37.61870844636964,
      lng: -122.40649013861992,
    },
    lastName: "Levy",
    name: "Bryan Cameron",
    onboardingAttempts: 1,
    phoneNumber: "+1415 555 3414",
    profilePhotoUrl: "/mock-data/1.jpeg",
    relevantDetails:
      "I am a dynamic marketing professional with eight years of experience in digital marketing and brand management. Throughout my career, I have led high-impact campaigns that significantly increased brand engagement and revenue growth. With a Master’s degree in Business Administration and certifications in Google Analytics and SEO, I bring both strategic vision and technical expertise to my work. I am eager to leverage my creative storytelling skills in a fast-paced environment that values data-driven decision-making.",
    status: "pending",
    taxId: "123",
    blacklisted: false,
  },
  {
    id: "bd0a35e8-2166-46af-ae7c-771c6d118d61",
    bankAccountNumber: "123456789 010101010101 999",
    bankName: "JPMorgan Chase",
    birthDate: new Date("07/26/1986"),
    city: "Denver",
    country: "USA",
    document: "11112223333",
    email: "lbennett@hotmail.com",
    fullAddress: "7573 E Colfax Ave, Denver, CO 80220, USA",
    location: {
      lat: 39.740665541397306,
      lng: -104.89866930407493,
    },
    lastName: "Bennett",
    name: "Lucinda",
    onboardingAttempts: 1,
    phoneNumber: "+1303 555 1389",
    profilePhotoUrl: "/mock-data/2.jpeg",
    relevantDetails:
      "I am an experienced software developer with over five years of expertise in full-stack web development, specializing in JavaScript frameworks like React and Node.js. I have led multiple projects in the fintech sector, improving user experience and optimizing backend performance. With a Bachelor’s degree in Computer Science, I am passionate about writing clean, maintainable code and continuously learning new technologies. I am currently looking for an opportunity where I can contribute to innovative software solutions while expanding my knowledge in cloud technologies.",
    status: "approved",
    taxId: "123",
    blacklisted: false,
  },
  {
    id: "bd0a35e8-2166-46af-ae7c-771c6d118d69",
    bankAccountNumber: "123456789 2222222222 888",
    bankName: "HSBC",
    birthDate: new Date("06/17/1950"),
    city: "Nashville",
    country: "USA",
    document: "121212131313",
    email: "charlesbranch17@gmail.com",
    fullAddress: "2304 Burns St, Nashville, TN 37216, USA",
    location: {
      lat: 36.2001144622906,
      lng: -86.72936565037931,
    },
    lastName: "Branch",
    name: "Charles",
    onboardingAttempts: 1,
    phoneNumber: "+1615 333 2456",
    profilePhotoUrl: "/mock-data/3.jpeg",
    relevantDetails:
      "I am a mechanical engineer with four years of hands-on experience in product design and manufacturing processes. My expertise includes CAD modeling, thermal analysis, and quality control, particularly in the automotive industry. I hold a Bachelor's degree in Mechanical Engineering and have worked on projects that improved product efficiency and reduced production costs. Passionate about sustainable engineering solutions, I am seeking a role where I can apply my technical skills to innovative product development.",
    status: "declined",
    taxId: "123",
    blacklisted: true,
  },
  {
    id: "bd0a35e8-2166-46af-ae7c-771c6d118d78",
    bankAccountNumber: "123412341 010101010101 777",
    bankName: "Bank of America",
    birthDate: new Date("10/26/1956"),
    city: "Chicago",
    country: "USA",
    document: "11112223333",
    email: "mabeltanner@gmail.com",
    fullAddress: "3823 N Park St, Westmont, IL 60559, USA",
    location: {
      lat: 41.81742442937551,
      lng: -87.98393341552581,
    },
    lastName: "Tanner",
    name: "Mabel",
    onboardingAttempts: 1,
    phoneNumber: "+1312 444 2345",
    profilePhotoUrl: "/mock-data/4.jpeg",
    relevantDetails:
      "I am an HR specialist with six years of experience in talent acquisition, employee relations, and corporate training. Having worked in both startup and corporate environments, I have successfully implemented policies that improved workplace culture and retention rates. With a degree in Human Resource Management and a certification in diversity and inclusion, I am dedicated to fostering positive and inclusive workspaces. I am looking for an opportunity to apply my expertise in a company that values people-centric growth strategies.",
    status: "pending",
    taxId: "123",
    blacklisted: false,
  },
];
