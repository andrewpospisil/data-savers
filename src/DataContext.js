import React, { createContext, useContext, useState } from 'react';


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [jsonData, setJsonData] = useState(
        [
            {
              "id": 1,
              "topic": "AB Test",
              "title": "Test Landing Page Conversion",
              "department": "Marketing",
              "market": "NL",
              "description": "Testing the conversion rate between two landing page designs.",
              "result": "Increased conversion by 12%.",
              "keyInsights": "The new design with a simplified call-to-action outperformed the old one.",
              "keyInsight": 67,
              "name": "Alice Johnson",
              "email": "alice.johnson@lebara.com",
              "date": "2024-12-01",
              "numberOfLikes": 120,
              "numberOfComments": 45,
              "numberOfShares": 30
            },
            {
              "id": 2,
              "topic": "User Test",
              "title": "User Experience Research for New Feature",
              "department": "Product",
              "market": "UK",
              "description": "Conducting research on how users interact with a new feature in the app.",
              "result": "Identified issues with navigation flow.",
              "keyInsights": "Users struggled with the feature placement in the menu.",
              "keyInsight": 92,
              "name": "Bob Smith",
              "email": "bob.smith@lebara.com",
              "date": "2024-12-02",
              "numberOfLikes": 85,
              "numberOfComments": 30,
              "numberOfShares": 15
            },
            {
              "id": 3,
              "topic": "Survey",
              "title": "Customer Satisfaction Survey",
              "department": "Customer Support",
              "market": "DE",
              "description": "Surveying customers to understand their satisfaction with the support team.",
              "result": "75% satisfaction rate.",
              "keyInsights": "Customers appreciate quick response time but want more personalized interactions.",
              "keyInsight": 56,
              "name": "Charlie Davis",
              "email": "charlie.davis@lebara.com",
              "date": "2024-12-03",
              "numberOfLikes": 60,
              "numberOfComments": 25,
              "numberOfShares": 12
            },
            {
              "id": 4,
              "topic": "Campaign",
              "title": "Holiday Discount Campaign",
              "department": "Marketing",
              "market": "FR",
              "description": "Launching a holiday season discount campaign to boost sales.",
              "result": "Sales increased by 20% during the campaign.",
              "keyInsights": "Social media ads were the most effective channel.",
              "keyInsight": 45,
              "name": "David Brown",
              "email": "david.brown@lebara.com",
              "date": "2024-12-04",
              "numberOfLikes": 200,
              "numberOfComments": 50,
              "numberOfShares": 40
            },
            {
              "id": 5,
              "topic": "AB Test",
              "title": "Email Campaign A/B Testing",
              "department": "Marketing",
              "market": "DE",
              "description": "A/B testing different email subject lines for higher open rates.",
              "result": "A subject line change resulted in a 5% higher open rate.",
              "keyInsights": "Personalized subject lines worked better than generic ones.",
              "keyInsight": 78,
              "name": "Emma Wilson",
              "email": "emma.wilson@lebara.com",
              "date": "2024-12-05",
              "numberOfLikes": 95,
              "numberOfComments": 40,
              "numberOfShares": 20
            },
            {
              "id": 6,
              "topic": "User Test",
              "title": "Beta User Testing for App Redesign",
              "department": "Product",
              "market": "DK",
              "description": "Testing a new redesign of the mobile app with beta users.",
              "result": "Positive feedback, but some features were difficult to find.",
              "keyInsights": "The new layout was preferred, but the search functionality needs improvement.",
              "keyInsight": 63,
              "name": "Frank Harris",
              "email": "frank.harris@lebara.com",
              "date": "2024-12-06",
              "numberOfLikes": 110,
              "numberOfComments": 35,
              "numberOfShares": 22
            },
            {
              "id": 7,
              "topic": "Survey",
              "title": "Employee Engagement Survey",
              "department": "HR",
              "market": "NL",
              "description": "Surveying employees to gauge engagement and satisfaction.",
              "result": "Employee engagement increased by 10% compared to last year.",
              "keyInsights": "Employees value work-life balance and opportunities for growth.",
              "keyInsight": 84,
              "name": "Grace Lee",
              "email": "grace.lee@lebara.com",
              "date": "2024-12-07",
              "numberOfLikes": 75,
              "numberOfComments": 30,
              "numberOfShares": 18
            },
            {
              "id": 8,
              "topic": "Campaign",
              "title": "Social Media Awareness Campaign",
              "department": "Marketing",
              "market": "UK",
              "description": "Campaign to raise awareness of new product features on social media.",
              "result": "Achieved a 50% increase in followers on Instagram.",
              "keyInsights": "Influencer partnerships drove the most traffic.",
              "keyInsight": 72,
              "name": "Henry Martinez",
              "email": "henry.martinez@lebara.com",
              "date": "2024-12-08",
              "numberOfLikes": 180,
              "numberOfComments": 55,
              "numberOfShares": 60
            },
            {
              "id": 9,
              "topic": "AB Test",
              "title": "Website Speed Test",
              "department": "Tech",
              "market": "NL",
              "description": "Testing different website optimizations for speed improvements.",
              "result": "Page load time decreased by 30%.",
              "keyInsights": "Reducing image sizes and enabling caching improved speed significantly.",
              "keyInsight": 55,
              "name": "Ivy Moore",
              "email": "ivy.moore@lebara.com",
              "date": "2024-12-09",
              "numberOfLikes": 130,
              "numberOfComments": 40,
              "numberOfShares": 25
            },
            {
              "id": 10,
              "topic": "User Test",
              "title": "Usability Testing for Checkout Flow",
              "department": "E-commerce",
              "market": "UK",
              "description": "Usability test of the checkout process to identify friction points.",
              "result": "Improved checkout conversion by 8%.",
              "keyInsights": "Simplifying the payment options led to a smoother process.",
              "keyInsight": 59,
              "name": "Jack Green",
              "email": "jack.green@lebara.com",
              "date": "2024-12-10",
              "numberOfLikes": 90,
              "numberOfComments": 38,
              "numberOfShares": 18
            },
            {
              "id": 11,
              "topic": "Survey",
              "title": "Product Feedback Survey",
              "department": "Product",
              "market": "DE",
              "description": "Surveying customers about the latest product release.",
              "result": "60% of customers gave a 4/5 rating.",
              "keyInsights": "Users liked the new features but wanted more customization options.",
              "keyInsight": 65,
              "name": "Kathy White",
              "email": "kathy.white@lebara.com",
              "date": "2024-12-11",
              "numberOfLikes": 50,
              "numberOfComments": 20,
              "numberOfShares": 10
            },
            {
              "id": 12,
              "topic": "Campaign",
              "title": "Black Friday Sale Promotion",
              "department": "Marketing",
              "market": "FR",
              "description": "Promoting Black Friday sales through targeted email campaigns.",
              "result": "Revenue increased by 30% compared to last year.",
              "keyInsights": "Email list segmentation led to more effective targeting.",
              "keyInsight": 87,
              "name": "Liam Scott",
              "email": "liam.scott@lebara.com",
              "date": "2024-12-12",
              "numberOfLikes": 210,
              "numberOfComments": 60,
              "numberOfShares": 45
            }
          ]
          
          );
  const addData = (newData) => {
    setJsonData((prevData) => [...prevData, newData]);
  };

  return (
    <DataContext.Provider value={{ jsonData, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
