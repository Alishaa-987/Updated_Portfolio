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
    title: "The Journey of a Web Request in the Cloud",
    summary:	"Writing software locally on your laptop is straightforward. The code works because you have complete control over your files. But to make an application truly useful to others, you need to deploy it — and Docker makes that journey from local to production manageable.",
    url: "https://medium.com/@af4060957/the-journey-of-a-web-request-in-the-cloud-cf3cf21abf04",
    date: "",
    readTime: "",
    tag: "DevOps",
  },
  {
    title: "A Beginner's Guide to CI/CD and Cloud Deployment",
    summary:	"Building a software application locally is just the first step. To be truly useful, you must store user data, handle authentication, and deploy your app so it is accessible worldwide. CI/CD pipelines automate this entire lifecycle.",
    url: "https://medium.com/@af4060957/a-beginners-guide-to-ci-cd-and-cloud-deployment-067d90603210",
    date: "",
    readTime: "",
    tag: "DevOps",
  },
  {
    title: "Docker to Production: A Beginner's Guide to Cloud Deployment",
    summary:	"Writing software locally on your laptop is straightforward. The code works because you have complete control over your files. But to make an application truly useful to others, you need to deploy it — and Docker makes that journey from local to production manageable.",
    url: "https://medium.com/@af4060957/docker-to-production-a-beginners-guide-to-cloud-deployment-d02692e648ba",
    date: "",
    readTime: "",
    tag: "DevOps",
  },
];


