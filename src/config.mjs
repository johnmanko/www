export const SITE_TITLE = "John Manko"
export const SITE_URL = "johnmanko.com"
export const SITE_DESCRIPTION = 'John Manko is a software engineer.';

export const RESUME_SKILLS = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];

export const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    url: 'https://github.com/johnmanko',
    icon: 'fa-brands fa-github'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/1686575/john-manko',
    icon: 'fa-brands fa-stack-overflow'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johnmanko/',
    icon: 'fa-brands fa-linkedin'
  },
  {
    name: 'X',
    url: 'https://x.com/johnmanko',
    icon: 'fa-brands fa-square-x-twitter'
  },
  {
    name: 'Credly',
    url: 'https://www.credly.com/users/john-manko',
    icon: 'fa-solid fa-certificate'
  }

]

export const CREDLY_BADGES = [
  'a6c8e8e4-8810-49d5-96e7-b9cc0b6b3729'
]

export const PORTFOLIO = [
  {
    title: 'Microservices Performance',
    description: 'This project contains Spring Boot and other microservices demonstrating various performance techniques.',
    url: 'https://github.com/johnmanko/microservice-performance',
    code_url: 'https://github.com/johnmanko/microservice-performance',
    image: '/images/portfolio/microservice-performance.webp',
    tags: ['vegeta', 'load-testing', 'performance-testing', 'spring-boot', 'spring-async', 'asynchronous', 'spring-webflux', 'spring-reactive', 'virtual-threads']
  },
  {
    title: 'WWW',
    description: 'This website (johnmanko.com).  Uses Astro, DaisyUI/Tailwind, and AWS Amplify.',
    url: 'https://github.com/johnmanko/www',
    code_url: 'https://github.com/johnmanko/www',
    image: '/images/portfolio/www.webp',
    tags: ['astrojs', 'tailwind', 'typescript', 'github-pages']
  },
  {
    title: 'Soup to Nuts',
    description: 'Guides for configuring a local Kubernetes cluster with sample microservices.  This project is meant to help developers new to Kubernetes.',
    url: 'https://github.com/johnmanko/soup-to-nuts',
    code_url: 'https://github.com/johnmanko/soup-to-nuts',
    image: '/images/portfolio/soup-to-nuts.webp',
    tags: ['kubernetes', 'docker', 'microservices', 'kind', 'istio', 'cilium', 'rancher-desktop', 'quarkus', 'spring-boot', 'linux', 'macos']
  },
  {
    title: 'Vagrant Kubernetes Cluster',
    description: 'A sample for using Vagrant and VirtualBox to stand up a multi-node Kubernetes cluster.',
    url: 'https://github.com/johnmanko/vagrant-k8s-cluster',
    code_url: 'https://github.com/johnmanko/vagrant-k8s-cluster',
    image: '/images/portfolio/vagrant-k8s-cluster.webp',
    tags: ['kubernetes', 'virtualbox', 'vagrant', 'linux', 'cloud-init']
  }
]