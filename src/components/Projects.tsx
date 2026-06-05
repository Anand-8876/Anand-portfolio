import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Brain, Briefcase, FileCode, Check } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: any;
  githubUrl: string;
  features: string[];
  fileName: string;
  codeSnippet: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'SSI Sutra v3',
      description: 'Enterprise MERN-stack medical robotics platform. Integrated AWS Cognito authentication, synced via custom Lambda functions, and implemented CryptoJS API response encryption.',
      tech: ['React.js', 'Redux Toolkit', 'Material-UI (MUI)', 'Node.js', 'Express.js', 'MongoDB', 'AWS Cognito/Lambda', 'CryptoJS', 'Docker', 'Nginx', 'Nodemailer'],
      icon: Briefcase,
      githubUrl: 'https://github.com/Anand-8876',
      features: ['AWS Cognito & Lambda Auth Sync', 'CryptoJS API response encryption', 'Encrypted Local Storage tokens', 'EC2 Load Balancers for scaling'],
      fileName: 'sutra_v3_security.ts',
      codeSnippet: `import CryptoJS from 'crypto-js';
import { CognitoIdentityProviderClient, AdminCreateUserCommand } from '@aws-sdk/client-cognito-identity-provider';

// Secure and obfuscate API responses and preview data
export function encryptResponse(payload: any, secretKey: string) {
  return CryptoJS.AES.encrypt(JSON.stringify(payload), secretKey).toString();
}

// Lambda synchronization logic: Sync auth users with Cognito User Pool
export async function syncUserToCognitoPool(user: { email: string }) {
  const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });
  await client.send(new AdminCreateUserCommand({
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    Username: user.email
  }));
}`
    },
    {
      title: 'Mantra Nucleus',
      description: 'Real-time hospital management telemetry and medical dashboard streaming system supporting live feeds and surgical analytics dashboard.',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'WebRTC', 'Socket.io', 'MongoDB'],
      icon: FileCode,
      githubUrl: 'https://github.com/Anand-8876',
      features: ['WebRTC Telemetry feeds', 'Socket.io hospital streams', 'Responsive data metrics', 'Highly optimized schemas'],
      fileName: 'nucleus_telemetry.ts',
      codeSnippet: `import { WebRTCStreamer } from './webrtc_stream';
import io from 'socket.io-client';

export function streamMantraNucleusTelemetry(hospitalId: string) {
  const client = io('wss://nucleus.ssi.net');
  const streamer = new WebRTCStreamer();
  streamer.on('telemetry', (data) => {
    client.emit('hospital_telemetry', { hospitalId, data });
  });
}`
    },
    {
      title: 'Drowsiness Detection System',
      description: 'AI-powered real-time drowsiness detection system using computer vision and machine learning. Monitors driver alertness through eye tracking and facial recognition to prevent accidents.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy', 'Flask'],
      icon: Eye,
      githubUrl: 'https://github.com/Anand-8876/Drowsiness-detection-system',
      features: ['Real-time Eye Tracking', 'Facial Recognition', 'Alert System', 'High Accuracy Detection'],
      fileName: 'drowsiness_detect.py',
      codeSnippet: `import cv2, tensorflow as tf
from driver_alert import AlertSystem

def monitor_driver_alertness(frame):
    # Process camera frames using OpenCV
    facial_landmarks = detect_landmarks(frame)
    ear = calculate_eye_aspect_ratio(facial_landmarks)
    
    if ear < DEBOUNCE_THRESHOLD:
        AlertSystem.trigger_buzzer() # 95%+ accuracy
        return "ALERT: Drowsy Detected"
    return "STATUS: Active"`
    },
    {
      title: 'Image Identification using CNN',
      description: 'Advanced computer vision application using Convolutional Neural Networks for multi-class image classification. Trained on custom datasets with data augmentation techniques achieving high accuracy.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
      icon: Brain,
      githubUrl: 'https://github.com/Anand-8876/image-classification-CNN',
      features: ['Custom CNN Architecture', 'Data Augmentation', 'Transfer Learning', '95%+ Accuracy'],
      fileName: 'cnn_model.py',
      codeSnippet: `from keras import layers, models

def build_augment_cnn(input_shape, classes):
    model = models.Sequential()
    # Adding Conv + MaxPooling Layers
    model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=input_shape))
    model.add(layers.MaxPooling2D((2,2)))
    model.add(layers.Conv2D(64, (3,3), activation='relu'))
    model.add(layers.Dense(classes, activation='softmax'))
    
    model.compile(optimizer='adam', loss='categorical_crossentropy')
    return model`
    },
    {
      title: 'Niyukti Job Portal',
      description: 'Comprehensive job portal connecting job seekers with employers. Features advanced search filters, application tracking, resume builder, and employer dashboard for job management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
      icon: Briefcase,
      githubUrl: 'https://github.com/Anand-8876/Niyukti-JOB-Portal',
      features: ['Job Search & Filter', 'Resume Builder', 'Application Tracking', 'Employer Dashboard'],
      fileName: 'job_portal_api.ts',
      codeSnippet: `import express from 'express';
import { verifyJWT } from '../middleware/auth';
import { JobModel } from '../models/Job';

const router = express.Router();

router.post('/jobs/apply', verifyJWT, async (req, res) => {
  const { jobId, resumeUrl } = req.body;
  const application = await JobModel.createApplication({
    jobId,
    applicantId: req.user.id,
    resumeUrl
  });
  
  res.status(201).json({ status: 'applied', application });
});`
    },
    {
      title: 'Nexus AI',
      description: 'Simple and intuitive chatbot application built with modern web technologies. Features clean UI, message history, and responsive design for seamless user interaction.',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Express'],
      icon: Brain,
      githubUrl: 'https://github.com/Anand-8876/Nexus-Ai',
      features: ['Clean Chat Interface', 'Message History', 'Responsive Design', 'Real-time Messaging'],
      fileName: 'nexus_chat.jsx',
      codeSnippet: `import React, { useState } from 'react';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  
  const sendMessage = async (text) => {
    const payload = { role: 'user', text };
    setMessages(prev => [...prev, payload]);
    
    const res = await fetch('/api/nexus/chat', { method: 'POST', body: JSON.stringify(payload) });
    const data = await res.json();
    setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
  };
  
  return <ChatLayout messages={messages} onSend={sendMessage} />;
}`
    },
    {
      title: 'Cam Brain',
      description: 'JavaScript-based machine learning model trainer for browser environments. Provides an intuitive interface for training, testing, and deploying ML models directly in the browser using TensorFlow.js.',
      tech: ['JavaScript', 'TensorFlow.js', 'HTML5', 'CSS3', 'Chart.js', 'Web APIs'],
      icon: Brain,
      githubUrl: 'https://github.com/Anand-8876/cambrain',
      features: ['Browser-based Training', 'Model Visualization', 'Real-time Metrics', 'Export Models'],
      fileName: 'cambrain_core.js',
      codeSnippet: `import * as tf from '@tensorflow/tfjs';

export async function trainModelInBrowser(dataX, dataY) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, activation: 'relu', inputShape: [1] }));
  model.add(tf.layers.dense({ units: 1 }));
  
  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: 'meanSquaredError'
  });
  
  await model.fit(dataX, dataY, { epochs: 50 });
  return model;
}`
    }
  ];

  // Keep track of active tab per project: 'readme' or 'code'
  const [activeTabs, setActiveTabs] = useState<Record<number, 'readme' | 'code'>>({});

  const toggleTab = (idx: number, tab: 'readme' | 'code') => {
    setActiveTabs(prev => ({
      ...prev,
      [idx]: tab
    }));
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">&gt; // 03. CODE_REPOSITORY</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            const currentTab = activeTabs[index] || 'readme';

            return (
              <div
                key={index}
                className="editor-window flex flex-col hover:border-neutral-700 transition-colors duration-300 min-h-[440px]"
              >
                
                {/* Editor Header Bar */}
                <div className="editor-header flex justify-between items-center select-none">
                  {/* Left Mock Window Dots */}
                  <div className="flex items-center">
                    <div className="editor-dot bg-neutral-800"></div>
                    <div className="editor-dot bg-neutral-800"></div>
                    <div className="editor-dot bg-neutral-800"></div>
                    
                    {/* Tabs */}
                    <div className="flex ml-4 h-9">
                      <button
                        onClick={() => toggleTab(index, 'readme')}
                        className={`editor-tab text-[10px] ${currentTab === 'readme' ? 'active font-bold border-b border-white text-white' : 'text-neutral-500'}`}
                      >
                        readme.md
                      </button>
                      <button
                        onClick={() => toggleTab(index, 'code')}
                        className={`editor-tab text-[10px] ${currentTab === 'code' ? 'active font-bold border-b border-white text-white' : 'text-neutral-500'}`}
                      >
                        {project.fileName}
                      </button>
                    </div>
                  </div>

                  {/* Right Action Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-neutral-900 border border-neutral-850 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Editor Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-neutral-950 font-mono text-xs text-neutral-400">
                  <AnimatePresence mode="wait">
                    {currentTab === 'readme' ? (
                      <motion.div
                        key="readme"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4 flex-1 flex flex-col justify-between"
                      >
                        <div>
                          {/* Heading */}
                          <div className="flex items-center space-x-2.5 mb-2.5">
                            <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-850 flex items-center justify-center">
                              <ProjectIcon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-base font-bold text-white tracking-wide">
                              {project.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-neutral-400 leading-relaxed text-[11px] mb-4">
                            {project.description}
                          </p>

                          {/* Key Features */}
                          <div className="space-y-1.5 mb-4">
                            <span className="text-neutral-600 block text-[9px] uppercase tracking-widest">// key_features:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                              {project.features.map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-center space-x-1.5 text-neutral-300">
                                  <Check className="w-3 h-3 text-neutral-600 flex-shrink-0" />
                                  <span className="truncate">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900/60">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 text-[10px]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="flex-1 flex flex-col"
                      >
                        <span className="text-neutral-700 block mb-2 select-none">// {project.fileName} - Core Implementation snippet</span>
                        <div className="bg-neutral-900/60 p-4 rounded border border-neutral-900 overflow-x-auto font-mono text-[10px] text-neutral-300 leading-normal flex-1">
                          <pre className="whitespace-pre">
                            <code>{project.codeSnippet}</code>
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Projects Action */}
        <div className="text-center mt-16">
          <p className="font-mono text-xs text-neutral-500 mb-4">// Browse all public repositories and commits</p>
          <a
            href="https://github.com/Anand-8876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-wider">github.com/Anand-8876</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;