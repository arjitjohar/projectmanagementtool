"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/globals.css";
import { ThemeProvider } from "./_components/theme_provider";

const client = generateClient<Schema>();

// app/page.tsx
export default function App() {

  return (
    <ThemeProvider>
      <main className="py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Full Stack Developer & Technical Innovator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building scalable solutions and pushing the boundaries of modern web development
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">About Me</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Passionate developer with expertise in modern web technologies...
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Project Demos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project Cards */}
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Project {project}</h4>
                  <p className="text-gray-600">Description of project...</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
