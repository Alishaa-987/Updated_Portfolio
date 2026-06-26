export interface Article {
  title: string;
  summary: string;
  url: string;
  date: string;
  readTime: string;
  tag: string;
}

export const articles: Article[] = [
  {
    title: "Docker to Production: A Beginner's Guide to Cloud Deployment",
    summary: "Writing software locally on your laptop is straightforward. The code works because you have complete control over your files. But to make an application truly useful to others, you need to deploy it — and Docker makes that journey from local to production manageable.",
    url: "https://medium.com/@af4060957/docker-to-production-a-beginners-guide-to-cloud-deployment-86ebbe6d7e50",
    date: "May 23, 2025",
    readTime: "7 min read",
    tag: "DevOps",
  },
  {
    title: "A Beginner's Guide to CI/CD and Cloud Deployment",
    summary: "Building a software application locally is just the first step. To be truly useful, you must store user data, handle authentication, and deploy your app so it is accessible worldwide. CI/CD pipelines automate this entire lifecycle.",
    url: "https://medium.com/@af4060957/a-beginners-guide-to-ci-cd-and-cloud-deployment-6c44e7f0e6b7",
    date: "May 23, 2025",
    readTime: "6 min read",
    tag: "DevOps",
  },
];
