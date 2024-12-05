import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Form from "./components/Form";
import DashboardCard from "./components/DashboardCard";

const data = [
  {
    id: 1,
    viewCount: 245,
    author: "Jane Doe",
    topic: "A/B Testing Results & Insights",
    title: "Improving Conversion Rates with CTA Variations",
    description:
      "A detailed analysis of how different call-to-action designs impact conversion rates.",
    keyInsights: [
      "Button color increased engagement by 18%",
      "Shorter text reduced drop-offs by 12%",
      "Mobile users preferred larger CTA buttons",
    ],
    result: "Achieved a 15% overall lift in conversions for the new design.",
    attachmentUrl: "https://example.com/cta_ab_testing_results.pdf",
    dateAdded: "2024-11-20",
    team: "UX Optimization Team",
    country: "United Kingdom",
  },
  {
    id: 2,
    viewCount: 392,
    author: "John Smith",
    topic: "User Research Results & Insights",
    title: "Understanding User Preferences in Subscription Models",
    description:
      "Insights from interviews and surveys with 500+ participants on subscription services.",
    keyInsights: [
      "Users value flexible cancellation options",
      "Tiered pricing increases satisfaction",
      "Onboarding experiences are critical to retention",
    ],
    result:
      "Identified key changes to enhance user satisfaction and reduce churn.",
    attachmentUrl: "https://example.com/user_research_subscription.pdf",
    dateAdded: "2024-10-15",
    team: "Customer Experience Research Team",
    country: "Germany",
  },
  {
    id: 3,
    viewCount: 178,
    author: "Emily Carter",
    topic: "Marketing Campaign Results & Insights",
    title: "Success Metrics from the Holiday Campaign 2024",
    description:
      "An overview of the key outcomes from the 2024 holiday marketing campaign.",
    keyInsights: [
      "Social media ads drove 35% of total traffic",
      "Email marketing achieved a 22% open rate",
      "Discount offers increased sales by 40% during the campaign period",
    ],
    result: "Exceeded revenue targets by 15%.",
    attachmentUrl: "https://example.com/holiday_campaign_results.pdf",
    dateAdded: "2024-12-01",
    team: "Marketing Strategy Team",
    country: "France",
  },
  {
    id: 4,
    viewCount: 310,
    author: "Michael Brown",
    topic: "Technical Solutions & Tools",
    title: "Implementing Scalable Microservices Architecture",
    description:
      "How microservices helped improve system scalability and reliability.",
    keyInsights: [
      "Reduced downtime by 20% after implementation",
      "Improved API response times by 35%",
      "Simplified deployment pipelines with containerization",
    ],
    result: "Increased system performance and reduced maintenance overhead.",
    attachmentUrl: "https://example.com/microservices_technical_solutions.pdf",
    dateAdded: "2024-11-10",
    team: "Platform Engineering Team",
    country: "Netherlands",
  },
  {
    id: 5,
    viewCount: 227,
    author: "Sophia Lee",
    topic: "Customer Acquisition Strategies",
    title: "Leveraging Referral Programs for Growth",
    description:
      "Analysis of the effectiveness of referral programs in acquiring new customers.",
    keyInsights: [
      "Referrals account for 25% of new customer sign-ups",
      "Customers acquired via referrals have a 30% higher lifetime value",
      "Incentives significantly increase participation rates",
    ],
    result: "Boosted customer acquisition rates by 20% within 3 months.",
    attachmentUrl: "https://example.com/referral_program_growth.pdf",
    dateAdded: "2024-11-05",
    team: "Growth Marketing Team",
    country: "Denmark",
  },
  {
    id: 6,
    viewCount: 285,
    author: "Liam Nguyen",
    topic: "Product Feedback & Innovation",
    title: "Enhancing User Experience Based on Feedback",
    description: "Utilizing customer feedback to drive product improvements.",
    keyInsights: [
      "Users requested better mobile app navigation",
      "Feature X adoption increased by 50% after redesign",
      "Customer satisfaction scores improved by 12% post-update",
    ],
    result:
      "Delivered a more intuitive product experience, resulting in higher engagement.",
    attachmentUrl: "https://example.com/product_feedback_report.pdf",
    dateAdded: "2024-11-18",
    team: "Product Innovation Team",
    country: "Germany",
  },
];

const theme = extendTheme({});

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
    {/* {data.map((item) => (
        <DashboardCard
          key={item.id}
          viewCount={item.viewCount}
          author={item.author}
          topic={item.topic}
          title={item.title}
          description={item.description}
          keyInsights={item.keyInsights}
          result={item.result}
          attachmentUrl={item.attachmentUrl}
          dateAdded={item.dateAdded}
          team={item.team}
          country={item.country}
        />
      ))} */}
      <Form />
    </ChakraProvider>
  );
}

export default App;
