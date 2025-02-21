
"use client";
// app/about/page.tsx
import Image from 'next/image';
import { Smile, Code, Bot, BookOpen, GraduationCap, Cloud, Music, Mountain } from 'lucide-react';
import React from 'react';

interface StoryCard {
  title: string;
  company: string;
  period: string;
  image: string;
  reflection: string;
  lesson: string;
}

const AboutPage = () => {
  const professionalStory: StoryCard[] = [
    {
      title: "Cloud Robotics Journey",
      company: "InOrbit",
      period: "2021-2024",
      image: "/cloud-robotics.jpg",
      reflection: "Working with robot-cloud integration taught me the beauty of seamless communication between hardware and software. I loved seeing how our cloud solutions brought robots to life!",
      lesson: "Learned the importance of real-time data processing and the challenges of maintaining low-latency systems at scale."
    },
    // Add other experiences
  ];

  const personalInterests = [
    { icon: <Mountain />, title: "Hiking", description: "Weekend trail explorer - my favorite reset button" },
    { icon: <Music />, title: "Guitar", description: "Fingerstyle enthusiast - currently learning classical pieces" },
    { icon: <BookOpen />, title: "Sci-Fi Novels", description: "Recent favorite: Project Hail Mary by Andy Weir" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/profile-pic.jpg"
            alt="Arjit Johar"
            fill
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-2 right-0 bg-blue-100 p-2 rounded-full">
            <Smile className="text-blue-600" size={20} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hey there! I'm Arjit 👋
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cloud architect by day, amateur musician by night. Passionate about building systems that 
          scale but never forgetting the human element in technology.
        </p>
      </header>

      {/* Professional Journey */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
          <Code className="text-blue-500" size={28} />
          My Tech Journey
        </h2>

        <div className="space-y-16">
          {professionalStory.map((story, index) => (
            <div key={index} className={`group relative ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
              <div className={`md:flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="md:w-1/3 relative">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -top-4 left-4 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                    {story.period}
                  </div>
                </div>
                
                <div className="md:w-2/3 mt-6 md:mt-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {story.title} @ {story.company}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {story.reflection}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-medium">
                      Key Takeaway: {story.lesson}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Side */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
          <Smile className="text-blue-500" size={28} />
          When I'm Not Coding
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {personalInterests.map((interest, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-500 mb-4">
                {React.cloneElement(interest.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-blue-900 text-white p-12 rounded-3xl text-center mb-16">
        <h2 className="text-2xl font-bold mb-6">My Tech Philosophy</h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          "I believe technology should empower without complicating. The best solutions 
          feel invisible, letting humans focus on being human."
        </p>
      </section>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
        <p className="text-gray-600 mb-6">
          Whether you want to discuss cloud architecture, share hiking trails, 
          or talk about the latest sci-fi releases:
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:arjitjohar@gmail.com" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Send Email
          </a>
          <a href="https://linkedin.com/in/arjitjohar" target="_blank" rel="noopener" className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
