'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToFooter = () => {
    document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const teams = [
    {
      title: "Healthcare Education",
      description: "Our Healthcare Education team develops comprehensive resources and workshops to promote understanding of preventive care, healthy lifestyle choices, and disease awareness in underserved communities."
    },
    {
      title: "Community Outreach",
      description: "The Community Outreach team builds partnerships with local organizations, schools, and healthcare providers to expand our reach and ensure healthcare awareness reaches those who need it most."
    },
    {
      title: "Research & Content",
      description: "Our Research & Content team creates evidence-based educational materials, infographics, and multimedia content to make complex healthcare information accessible and engaging for all audiences."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-cyan-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-teal-500/50 transition-all duration-300 group-hover:scale-105">
              <span className="tracking-wider">ATK</span>
            </div>
          </Link>
          <button
            onClick={scrollToFooter}
            className="px-8 py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold tracking-wide hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300 text-sm uppercase"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-teal-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiIGZpbGw9Im5vbmUiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-none">
            <span className="block bg-clip-text text-transparent bg-linear-to-r from-teal-300 via-cyan-300 to-blue-300">
              Awareness Through
            </span>
            <span className="block text-white mt-2">Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
            Empowering Communities Through Healthcare Knowledge
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-linear-to-br from-slate-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-[80px] px-16 py-20 shadow-2xl border border-slate-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-cyan-500/5"></div>
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-teal-700 via-cyan-700 to-blue-700 mb-8 tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-10 font-light">
                At ATK (Awareness Through Edu), we are dedicated to bridging the healthcare knowledge gap by providing accessible, evidence-based education to communities worldwide. We believe that informed individuals make healthier choices, and through our programs, we strive to empower every person with the knowledge they need to live their healthiest life.
              </p>
              <div className="flex justify-center">
                <button className="group relative px-10 py-5 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300">
                  <span className="relative z-10 tracking-wide">View our infographics</span>
                  <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00MCAwdjQwTTAgNDBoNDBNNDAgNDB2NDBNNDAgNDBoNDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-bold text-center text-white mb-20 tracking-tight">
            Our Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teams.map((team, index) => (
              <div
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-500 border border-slate-200/50"
              >
                <div className="absolute inset-0 bg-linear-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative p-10">
                  <div className="w-20 h-20 bg-linear-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-slate-900 mb-6 tracking-tight">
                    {team.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base text-center">
                    {team.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact-footer" className="relative h-[75vh] bg-linear-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBmaWxsPSJub25lIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-6xl mx-auto px-8">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-center">
            <span className="block bg-clip-text text-transparent bg-linear-to-r from-teal-300 to-cyan-300">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-16 text-center max-w-2xl">
            Ready to make a difference? Reach out to us and join our mission to spread healthcare awareness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Email Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-lg font-medium text-white">Send us a message</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                  <p className="text-slate-200 text-lg break-all">contact@awarenessthoughedu.org</p>
                </div>
                <button
                  onClick={() => copyToClipboard('contact@awarenessthoughedu.org', 'email')}
                  className="w-full py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-lg font-medium text-white">Give us a call</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                  <p className="text-slate-200 text-lg">(555) 123-4567</p>
                </div>
                <button
                  onClick={() => copyToClipboard('(555) 123-4567', 'phone')}
                  className="w-full py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedPhone ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Number
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">© 2024 Awareness Through Edu LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
