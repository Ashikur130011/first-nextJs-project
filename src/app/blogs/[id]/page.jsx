import React from 'react';

const page = ({params}) => {
    const items = data.find(blog => blog.id === params.id)

    return (
        <div className='h-screen bg-white text-center p-8'>
            <h1 className='text-2xl my-3'>Blog Name: {items.name}</h1>
            <p>Details: {items.details}</p>
        </div>
    );
};

const data = [
    {
      "id": "1",
      "name": "Exploring the Future of Artificial Intelligence",
      "details": "This blog post delves into the advancements in AI technology, exploring how machine learning and neural networks are shaping the future. It covers recent breakthroughs and their potential impacts on various industries."
    },
    {
      "id": "2",
      "name": "A Guide to Healthy Living in the Modern World",
      "details": "In this article, we discuss practical tips for maintaining a healthy lifestyle despite the challenges of modern living. From diet and exercise to mental health, we cover all aspects of well-being."
    },
    {
      "id": "3",
      "name": "The Rise of Remote Work: Benefits and Challenges",
      "details": "As remote work becomes more prevalent, this blog examines the advantages and disadvantages for both employers and employees. It also provides strategies for staying productive while working from home."
    },
    {
      "id": "4",
      "name": "Understanding Blockchain Technology",
      "details": "Blockchain is revolutionizing the way we think about data security and transactions. This post breaks down the complex concepts behind blockchain technology and its potential applications in various sectors."
    },
    {
      "id": "5",
      "name": "Traveling on a Budget: Tips for Affordable Adventures",
      "details": "Traveling doesn't have to be expensive. This blog shares tips and tricks for exploring the world on a budget, including advice on finding cheap flights, affordable accommodations, and free activities."
    },
    {
      "id": "6",
      "name": "The Impact of Climate Change on Global Agriculture",
      "details": "This article explores how climate change is affecting agricultural practices around the world. It discusses the challenges farmers face and the innovative solutions being developed to adapt to changing conditions."
    },
    {
      "id": "7",
      "name": "Mastering the Art of Mindfulness Meditation",
      "details": "Mindfulness meditation can be a powerful tool for stress reduction and mental clarity. This blog provides a beginner's guide to practicing mindfulness, with step-by-step instructions and tips for getting started."
    },
    {
      "id": "8",
      "name": "The Evolution of Digital Marketing Strategies",
      "details": "Digital marketing has evolved significantly over the past decade. This post examines the latest trends in digital marketing, including the rise of influencer marketing and the importance of data analytics."
    },
    {
      "id": "9",
      "name": "An Introduction to Sustainable Fashion",
      "details": "Sustainable fashion is more than just a trend; it's a movement towards ethical and environmentally-friendly clothing production. This blog discusses what sustainable fashion is and why it matters."
    },
    {
      "id": "10",
      "name": "The Benefits of Learning a Second Language",
      "details": "Learning a second language can open up a world of opportunities. This article outlines the cognitive, social, and professional benefits of being bilingual and offers tips for language learning success."
    }
  ]
  

export default page;