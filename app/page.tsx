import ArticleCard from './components/ArticleCard'
import NewsletterForm from './components/NewsletterForm'

const articles = [
  {
    id: 1,
    title: "New Technology to Clean Oceans",
    excerpt: "Groundbreaking invention promises to remove millions of tons of plastic from our oceans.",
    content: "In a groundbreaking development, scientists have unveiled a new technology that promises to remove millions of tons of plastic from our oceans, potentially reversing decades of pollution and giving marine life a fighting chance. This innovative system, which combines artificial intelligence and advanced filtration techniques, has shown remarkable results in initial trials.\n\nThe technology, dubbed 'OceanClean', works by deploying a network of autonomous drones that can identify and collect plastic waste of various sizes, from large debris to microplastics. These drones use advanced AI algorithms to distinguish between plastic and marine life, ensuring that the ecosystem remains undisturbed during the cleaning process.\n\nDr. Emily Chen, the lead researcher on the project, explains, 'What makes OceanClean truly revolutionary is its ability to adapt to different marine environments and types of plastic waste. Whether it's a busy coastal area or the remote Pacific garbage patch, our system can be fine-tuned to maximize its efficiency.'\n\nEarly tests have shown that a single OceanClean unit can remove up to 100,000 pounds of plastic from the ocean in a year. With plans to deploy hundreds of these units across the globe, experts are optimistic about making a significant dent in ocean pollution within the next decade.\n\nThe implications of this technology extend far beyond just cleaning our oceans. By removing plastic waste, we can restore marine ecosystems, protect endangered species, and ultimately improve the health of our planet. Additionally, the collected plastic can be recycled and repurposed, contributing to a more circular economy.\n\nAs we face the growing challenge of environmental pollution, innovations like OceanClean offer a beacon of hope. They remind us that with human ingenuity and dedication, we can find solutions to even the most daunting ecological problems. The journey to clean our oceans has just begun, but with this new technology, we are taking a giant leap in the right direction.",
    date: "2023-05-16",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Local Community Plants 1000 Trees",
    excerpt: "In a remarkable display of environmental stewardship, the community of Greenville came together to plant 1000 trees in a single day.",
    content: "In a remarkable display of environmental stewardship, the community of Greenville came together to plant 1000 trees in a single day. This massive undertaking, dubbed 'Green Greenville', saw participation from residents of all ages, local businesses, and city officials.\n\nThe initiative was sparked by high school student Sarah Johnson, who proposed the idea to the city council after learning about the benefits of urban forests in her environmental science class. 'I never expected it to become this big,' Sarah said, 'but I'm thrilled to see how our community has embraced the project.'\n\nThe trees, a mix of native species chosen for their ability to thrive in the local climate, were planted in parks, along streets, and even in residents' yards. Local nurseries donated the saplings, while the city's parks department provided guidance on proper planting techniques.\n\nMayor Tom Wilson, who got his hands dirty alongside other volunteers, praised the community's spirit. 'This is what Greenville is all about,' he said. 'When we come together, we can make a real difference for our environment and our future.'\n\nExperts estimate that once mature, these 1000 trees could absorb up to 48,000 pounds of carbon dioxide annually, while also providing shade, reducing energy costs, and creating habitats for local wildlife.\n\nThe success of 'Green Greenville' has inspired neighboring towns to consider similar initiatives. It serves as a powerful reminder that local action can have a significant impact on global issues like climate change.\n\nAs the sun set on Greenville's day of planting, the community gathered for a celebratory picnic in the park. Looking out over the newly planted saplings, Sarah reflected, 'These trees will grow with us, making our town greener and healthier for generations to come. This is just the beginning.'",
    date: "2023-05-15",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Global Happiness Levels Increase",
    excerpt: "A new global survey reveals a significant uptick in overall happiness levels across nations, defying expectations in these challenging times.",
    content: "In a surprising turn of events, a new global survey has revealed a significant uptick in overall happiness levels across nations, defying expectations in these challenging times. The World Happiness Report, an annual publication of the United Nations Sustainable Development Solutions Network, shows that despite ongoing global issues, people around the world are reporting higher levels of life satisfaction and positive emotions.\n\nThe report, which surveys people in 156 countries, asks respondents to evaluate their lives on a scale from 0 to 10, with 10 representing the best possible life. This year's average global score rose to 5.8, up from 5.4 in the previous year.\n\nDr. Helena Kraft, one of the lead researchers on the report, explains, 'What we're seeing is a remarkable display of human resilience. Despite the challenges we've faced globally, people are finding new ways to connect, support each other, and find joy in their daily lives.'\n\nSeveral factors contribute to this increase in global happiness. The report highlights improved social support systems, advances in healthcare, and a growing emphasis on work-life balance in many countries. Additionally, the widespread adoption of remote work has given many people more flexibility and time with family.\n\nInterestingly, the countries showing the most significant improvements in happiness are not necessarily the wealthiest. Nations that have invested in strong community programs, mental health support, and environmental protection have seen the largest gains.\n\nThe report also notes a growing trend of 'collective joy' – communities coming together to celebrate and support each other, even in difficult times. From neighborhood festivals to online support groups, people are finding strength and happiness in shared experiences.\n\nWhile the increase in global happiness is certainly cause for celebration, the report also emphasizes that there is still work to be done. Inequality, both within and between nations, remains a significant challenge to global wellbeing.\n\nNevertheless, this year's World Happiness Report offers a beacon of hope. It reminds us that happiness is not solely dependent on external circumstances, but also on our ability to adapt, connect, and find meaning in our lives. As we move forward, these insights can guide individuals, communities, and nations in building a happier, more resilient world.",
    date: "2023-05-14",
    readTime: "7 min read"
  },
]

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Inspiring Positive Change</h1>
      
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          {...article}
          isLatest={index === 0}
        />
      ))}

      <NewsletterForm />
    </div>
  )
}

