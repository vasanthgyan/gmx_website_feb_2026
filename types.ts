
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: React.ReactNode;
  image: string; // New: Ensures no broken images on services page
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  structure: string;
  timeline: string;
  results: string[];
  impact: string;
  image: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface GccPhase {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}
