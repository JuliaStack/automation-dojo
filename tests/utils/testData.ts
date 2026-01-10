/**
 * Generate random test data for sign-up/sign-in tests
 */

export function generateRandomUsername(prefix: string = 'user'): string {
  const randomNum = Math.floor(Math.random() * 100000);
  return `${prefix}${randomNum}`;
}

export function generateRandomEmail(domain: string = 'example.com'): string {
  const randomNum = Math.floor(Math.random() * 1000000);
  return `testuser${randomNum}@${domain}`;
}

export function generateRandomPassword(length: number = 12): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*';
  
  let password = '';
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];
  
  const allChars = uppercase + lowercase + numbers + special;
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

export interface TestUser {
  username: string;
  email: string;
  password: string;
}

export function generateRandomUser(): TestUser {
  const username = generateRandomUsername();
  return {
    username,
    email: generateRandomEmail(),
    password: generateRandomPassword(),
  };
}

// Article data generation
const articleTitleSamples = [
  'Getting Started with',
  'Ultimate Guide to',
  'Best Practices for',
  'Complete Tutorial on',
  'Advanced Techniques in',
  'Mastering',
  'Introduction to',
  'Deep Dive into',
];

const articleTopics = [
  'Test Automation',
  'Web Development',
  'JavaScript Testing',
  'End-to-End Testing',
  'Quality Assurance',
  'Playwright',
  'Frontend Testing',
  'API Testing',
  'Performance Testing',
  'Continuous Integration',
];

const articleContentSamples = [
  'This is a comprehensive guide covering all aspects of the topic. You will learn step-by-step instructions and best practices from industry experts.',
  'In this article, we explore the fundamental concepts and provide practical examples. By the end, you\'ll have a solid understanding of how everything works together.',
  'This detailed tutorial walks through real-world scenarios and solutions. We\'ve included code examples and explanations for each step.',
  'Discover the latest trends and methodologies in this field. Learn from experienced professionals and apply these insights to your projects.',
  'This in-depth analysis covers everything you need to know. We break down complex concepts into easy-to-understand sections with practical applications.',
];

export interface Article {
  title: string;
  description: string;
  text: string;
}

export function generateRandomArticleTitle(): string {
  const titlePrefix = articleTitleSamples[Math.floor(Math.random() * articleTitleSamples.length)];
  const topic = articleTopics[Math.floor(Math.random() * articleTopics.length)];
  return `${titlePrefix} ${topic}`;
}

export function generateRandomArticleDescription(): string {
  const descriptions = [
    'A beginner-friendly introduction to key concepts and practical applications.',
    'Learn essential skills and techniques used by professionals in the industry.',
    'Discover advanced strategies to improve your workflow and productivity.',
    'Comprehensive guide covering all you need to know about this topic.',
    'Step-by-step tutorial with real-world examples and best practices.',
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

export function generateRandomArticleText(): string {
  const samples = articleContentSamples;
  const text = samples[Math.floor(Math.random() * samples.length)];
  return text + '\n\n' + 'Additional details and examples will help reinforce the concepts discussed above. Practice and experimentation are key to mastery.';
}

export function generateRandomArticle(): Article {
  return {
    title: generateRandomArticleTitle(),
    description: generateRandomArticleDescription(),
    text: generateRandomArticleText(),
  };
}
